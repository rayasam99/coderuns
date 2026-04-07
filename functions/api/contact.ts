interface Env {
  RESEND_API_KEY?: string;
  CONTACT_FROM_EMAIL?: string;
  CONTACT_TO_EMAIL?: string;
  TURNSTILE_SECRET_KEY?: string;
}

type PagesContext = {
  request: Request;
  env: Env;
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
  });

export async function onRequestPost(context: PagesContext) {
  const { request, env } = context;

  if (!env.RESEND_API_KEY) {
    return json({ error: 'Missing RESEND_API_KEY environment variable.' }, 500);
  }

  if (!env.TURNSTILE_SECRET_KEY) {
    return json({ error: 'Missing TURNSTILE_SECRET_KEY environment variable.' }, 500);
  }

  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return json({ error: 'Invalid JSON payload.' }, 400);
  }

  const name = String(payload.name ?? '').trim();
  const email = String(payload.email ?? '').trim();
  const phone = String(payload.phone ?? '').trim();
  const company = String(payload.company ?? '').trim();
  const subject = String(payload.subject ?? '').trim();
  const message = String(payload.message ?? '').trim();
  const turnstileToken = String(payload.turnstileToken ?? '').trim();

  if (!name || !email || !message || !turnstileToken) {
    return json({ error: 'Name, email, message, and security verification are required.' }, 400);
  }

  const ipAddress = request.headers.get('CF-Connecting-IP') || undefined;
  const turnstileBody = new URLSearchParams({
    secret: env.TURNSTILE_SECRET_KEY,
    response: turnstileToken,
  });

  if (ipAddress) {
    turnstileBody.set('remoteip', ipAddress);
  }

  const turnstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: turnstileBody.toString(),
  });

  const turnstileResult = (await turnstileResponse.json()) as { success?: boolean };

  if (!turnstileResponse.ok || !turnstileResult.success) {
    return json({ error: 'Security verification failed. Please try again.' }, 400);
  }

  const to = env.CONTACT_TO_EMAIL || 'sales@coderuns.com';
  const from = env.CONTACT_FROM_EMAIL || 'Coderuns Contact <onboarding@resend.dev>';
  const safeSubject = subject || `New contact form submission from ${name}`;

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937;">
      <h2 style="margin-bottom: 16px;">New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
      <p><strong>Company:</strong> ${escapeHtml(company || 'Not provided')}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject || 'Not provided')}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `;

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: safeSubject,
      html,
    }),
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();
    return json({ error: 'Unable to send email.', details: errorText }, 502);
  }

  return json({ ok: true, message: 'Message sent successfully.' });
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(data.error || 'Unable to send your message right now.');
      }

      setForm({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
      setStatus({ type: 'success', message: data.message || 'Message sent successfully.' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Unable to send your message right now.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full rounded-2xl border border-[#efd7cb] bg-white/90 px-5 py-4 font-[var(--font-body)] text-[15px] text-[#2b2b2b] placeholder:text-[#8f97ad] transition-all focus:border-[#FD5F18] focus:outline-none focus:ring-4 focus:ring-[#FD5F18]/10';

  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#fff7f2_100%)] py-16">
      <div className="max-w-325 mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-[32px] border border-[#f1ddd2] bg-white px-6 py-10 shadow-[0_28px_80px_rgba(20,20,20,0.08)] sm:px-8 lg:px-12 lg:py-12">
            <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(253,95,24,0.14),transparent_70%)]" />

            <div className="relative text-center">
              <span className="cr-eyebrow mb-4 inline-flex">Contact Us</span>
              <h2 className="cr-heading-lg mt-4 mb-3 text-[#292929]">
                Reach <span className="text-[#FD5F18]">& Get In Touch</span>
                <br />With Us!
              </h2>
              <p className="cr-body mx-auto max-w-2xl text-[#666]">
                Tell us what you are building, what you need help with, or where you want to go next. We&apos;ll help
                you move it forward.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="relative mt-10 flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input className={inputClass} type="text" name="name" placeholder="Your Name*" value={form.name} onChange={handleChange} required />
                <input className={inputClass} type="email" name="email" placeholder="Your Email*" value={form.email} onChange={handleChange} required />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input className={inputClass} type="tel" name="phone" placeholder="Your Number*" value={form.phone} onChange={handleChange} />
                <input className={inputClass} type="text" name="company" placeholder="Company" value={form.company} onChange={handleChange} />
              </div>
              <input className={inputClass} type="text" name="subject" placeholder="Your Subject.." value={form.subject} onChange={handleChange} />
              <textarea
                className={`${inputClass} min-h-[180px] resize-none`}
                name="message"
                placeholder="Message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                required
              />
              {status.type !== 'idle' && (
                <p
                  className={`rounded-2xl px-4 py-3 text-sm ${
                    status.type === 'success'
                      ? 'border border-emerald-200 bg-emerald-50 text-emerald-700'
                      : 'border border-red-200 bg-red-50 text-red-700'
                  }`}
                >
                  {status.message}
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="cr-btn mt-2 w-full py-4 text-center uppercase tracking-[0.08em] shadow-[0_20px_40px_rgba(253,95,24,0.22)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

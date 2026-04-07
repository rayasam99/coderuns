import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          'expired-callback': () => void;
          'error-callback': () => void;
        }
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

type TurnstileWidgetProps = {
  onTokenChange: (token: string) => void;
  resetKey?: number;
};

const siteKey = import.meta.env.PUBLIC_TURNSTILE_SITE_KEY;

export default function TurnstileWidget({ onTokenChange, resetKey = 0 }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    if (window.turnstile) {
      setScriptReady(true);
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>('script[data-turnstile-script="true"]');

    if (existingScript) {
      existingScript.addEventListener('load', handleLoad);
      return () => existingScript.removeEventListener('load', handleLoad);
    }

    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    script.dataset.turnstileScript = 'true';
    script.addEventListener('load', handleLoad);
    document.head.appendChild(script);

    return () => script.removeEventListener('load', handleLoad);
  }, []);

  useEffect(() => {
    if (!scriptReady || !containerRef.current || !window.turnstile || !siteKey || widgetIdRef.current) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      callback: (token: string) => onTokenChange(token),
      'expired-callback': () => onTokenChange(''),
      'error-callback': () => onTokenChange(''),
    });
  }, [onTokenChange, scriptReady]);

  useEffect(() => {
    if (!window.turnstile || !widgetIdRef.current || resetKey === 0) {
      return;
    }

    window.turnstile.reset(widgetIdRef.current);
    onTokenChange('');
  }, [onTokenChange, resetKey]);

  return (
    <div className="space-y-3">
      <div ref={containerRef} />
      {!siteKey && (
        <p className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
          Missing PUBLIC_TURNSTILE_SITE_KEY environment variable.
        </p>
      )}
    </div>
  );

  function handleLoad() {
    setScriptReady(true);
  }
}

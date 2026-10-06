'use client';

import { useEffect, useRef, useState } from 'react';
import { site } from '@/data/site';
import { delay } from '@/lib/css';

/** Email + botón de copiar, con aviso (toast) */
export default function EmailCopy() {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [toast, setToast] = useState({ on: false, text: 'Email copiado' });
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    let text = 'Email copiado';
    try {
      await navigator.clipboard.writeText(site.email);
    } catch {
      // sin permiso de portapapeles: se selecciona el texto para copiarlo a mano
      const r = document.createRange();
      r.selectNodeContents(linkRef.current!);
      const s = getSelection();
      s?.removeAllRanges();
      s?.addRange(r);
      text = 'Email seleccionado: pulsa Ctrl+C';
    }
    setToast({ on: true, text });
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setToast((t) => ({ ...t, on: false })), 2200);
  };

  return (
    <>
      <div className="mail" data-reveal style={delay('.08s')}>
        <a href={`mailto:${site.email}`} ref={linkRef}>{site.email}</a>
        <button className="btn magnetic" type="button" onClick={copy}>Copiar email</button>
      </div>
      <div className={`toast${toast.on ? ' on' : ''}`} role="status">{toast.text}</div>
    </>
  );
}

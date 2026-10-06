'use client';

import { useEffect, useRef, useState } from 'react';
import { site } from '@/data/site';

const fmt = new Intl.DateTimeFormat('es-ES', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Madrid' });

export default function SiteFooter() {
  const giantRef = useRef<HTMLAnchorElement>(null);
  const [clock, setClock] = useState('--:--');

  // hora local de Zaragoza (se rellena en el cliente para no desajustar el HTML del servidor)
  useEffect(() => {
    const tick = () => setClock(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  // el texto gigante se desplaza al hacer scroll
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onScroll = () => {
      const g = giantRef.current;
      if (!g) return;
      const r = g.getBoundingClientRect();
      const k = Math.min(1, Math.max(0, 1 - r.top / innerHeight));
      g.style.transform = `translateX(${-k * 35}%)`;
    };
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer>
      <a className="giant" ref={giantRef} href={`mailto:${site.email}`} aria-label="Escríbeme un email">
        Hablemos <em>—</em> Hablemos <em>—</em> Hablemos
      </a>
      <div className="foot">
        <span>© 2026 {site.name}</span>
        <span>Zaragoza · <span>{clock}</span></span>
      </div>
    </footer>
  );
}

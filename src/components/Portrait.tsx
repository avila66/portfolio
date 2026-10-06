'use client';

import { useEffect, useRef } from 'react';

/**
 * Retrato: si hay foto (site.photo) se muestra; si no, un degradado que se deforma despacio.
 * La animación se pausa fuera de pantalla y respeta "reducir movimiento".
 */
export default function Portrait({ photo }: { photo: string | null }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    const ctx = cv?.getContext('2d');
    if (!cv || !ctx) return;

    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let accent = '#D2361E';
    let visible = false, running = false, raf = 0;

    const size = () => {
      const r = cv.getBoundingClientRect();
      cv.width = r.width * devicePixelRatio;
      cv.height = r.height * devicePixelRatio;
    };
    const readAccent = () => {
      accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#D2361E';
    };

    const draw = (t: number) => {
      if (!visible && !reduce) { running = false; return; } // pausa fuera de pantalla
      const w = cv.width, h = cv.height;
      ctx.clearRect(0, 0, w, h);
      const pts = 8, R = Math.min(w, h) * 0.32, ox = w / 2, oy = h * 0.46;
      ctx.beginPath();
      for (let i = 0; i <= pts; i++) {
        const a = (i / pts) * Math.PI * 2;
        const r = R * (1 + 0.14 * Math.sin(a * 3 + t / 1400) + 0.08 * Math.cos(a * 2 - t / 1900));
        const x = ox + Math.cos(a) * r, y = oy + Math.sin(a) * r;
        if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y);
      }
      const g = ctx.createRadialGradient(ox - R * 0.4, oy - R * 0.5, 10, ox, oy, R * 1.3);
      g.addColorStop(0, '#F4C9A8'); g.addColorStop(0.55, accent); g.addColorStop(1, '#141615');
      ctx.fillStyle = g;
      ctx.filter = `blur(${2 * devicePixelRatio}px)`;
      ctx.fill();
      ctx.filter = 'none';
      if (!reduce) raf = requestAnimationFrame(draw); else running = false;
    };
    const start = () => { if (!running) { running = true; raf = requestAnimationFrame(draw); } };

    const onResize = () => { size(); if (reduce) start(); };
    const onTheme = () => { readAccent(); start(); }; // el color de acento cambia con el tema

    size(); readAccent();
    addEventListener('resize', onResize);
    addEventListener('themechange', onTheme);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) start(); });
    io.observe(cv);

    return () => {
      cancelAnimationFrame(raf);
      running = false;
      io.disconnect();
      removeEventListener('resize', onResize);
      removeEventListener('themechange', onTheme);
    };
  }, [photo]);

  if (photo) return <img src={photo} alt="Alejandro Vilafañe" loading="lazy" />;
  return <canvas ref={ref} aria-hidden="true" />;
}

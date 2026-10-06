'use client';

import { useEffect } from 'react';

/**
 * Animación de aparición al hacer scroll: solo para los elementos [data-reveal]
 * que empiezan por debajo de la pantalla.
 */
export default function RevealController() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove('pre');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px' },
    );

    const frames: number[] = [];
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      if (el.getBoundingClientRect().top > innerHeight) {
        el.classList.add('pre');
        frames.push(requestAnimationFrame(() => el.classList.add('reveal-ready')));
        io.observe(el);
      }
    });

    return () => {
      io.disconnect();
      frames.forEach(cancelAnimationFrame);
    };
  }, []);

  return null;
}

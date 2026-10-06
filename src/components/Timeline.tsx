'use client';

import { useEffect, useRef } from 'react';
import { timeline } from '@/data/site';
import { delay } from '@/lib/css';

/** Trayectoria: la línea se rellena con el scroll y enciende cada punto al pasar */
export default function Timeline() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current, fill = fillRef.current, list = listRef.current;
    if (!wrap || !fill || !list) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = [...list.querySelectorAll('li')];

    const onScroll = () => {
      const tr = wrap.getBoundingClientRect();
      const tk = reduce ? 1 : Math.min(1, Math.max(0, (innerHeight * 0.65 - tr.top) / tr.height));
      fill.style.transform = `scaleY(${tk})`;
      items.forEach((li) => li.classList.toggle('lit', li.offsetTop + 38 <= tk * wrap.offsetHeight));
    };
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    return () => {
      removeEventListener('scroll', onScroll);
      removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section id="trayectoria">
      <div className="sec-head" data-reveal>
        <h2>Trayectoria</h2>
        <span className="mono">Formación y experiencia</span>
      </div>
      <div className="tl-wrap" ref={wrapRef}>
        <div className="tl-rail" aria-hidden="true"><div className="tl-fill" ref={fillRef} /></div>
        <ul className="timeline" ref={listRef}>
          {timeline.map((t, i) => (
            <li key={t.title + t.when} data-reveal style={delay(i ? `${(i * 0.05).toFixed(2)}s` : undefined)}>
              <span className="mono">{t.when}</span>
              <div><h4>{t.title}</h4><p>{t.text}</p></div>
              <span className="where">{t.where}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

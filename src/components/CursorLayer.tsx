'use client';

import { useEffect, useRef } from 'react';
import { projects } from '@/data/projects';
import ProjectArt from './ProjectArt';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * Cursor que sigue al ratón, preview flotante de los proyectos y botones magnéticos.
 * Solo se activa con ratón (no en táctil) y si no se ha pedido reducir movimiento.
 */
export default function CursorLayer() {
  const curRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;

    const cur = curRef.current!;
    const prev = prevRef.current!;
    const slides = slidesRef.current!;

    let sc = 0.6, mx = innerWidth / 2, my = innerHeight / 2;
    let cx = mx, cy = my, px = mx, py = my, lastX = mx, tilt = 0;
    let previewOn = false, raf = 0;

    const hidePreview = () => {
      previewOn = false;
      prev.classList.remove('on');
      cur.classList.remove('big');
    };

    const onMove = (e: PointerEvent) => {
      mx = e.clientX; my = e.clientY;
      cur.classList.add('on');
      // botones magnéticos
      const b = (e.target as Element).closest<HTMLElement>('.magnetic');
      if (b) {
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.3}px, ${(e.clientY - r.top - r.height / 2) * 0.4}px)`;
      }
    };

    const onOver = (e: PointerEvent) => {
      if (!(e.target instanceof Element)) return;
      cur.classList.toggle('big', !!e.target.closest('a, button, .project .row'));
      const proj = e.target.closest<HTMLElement>('.project');
      if (proj) {
        previewOn = true;
        prev.classList.add('on');
        slides.style.transform = `translateY(${-Number(proj.dataset.i) * 100}%)`;
      } else if (previewOn) {
        previewOn = false;
        prev.classList.remove('on');
      }
    };

    const onOut = (e: PointerEvent) => {
      if (!(e.target instanceof Element)) return;
      const b = e.target.closest<HTMLElement>('.magnetic');
      if (b && !b.contains(e.relatedTarget as Node | null)) b.style.transform = '';
    };

    const onLeaveWindow = () => cur.classList.remove('on');

    const loop = () => {
      cx = lerp(cx, mx, 0.22); cy = lerp(cy, my, 0.22);
      px = lerp(px, mx, 0.1);  py = lerp(py, my, 0.1);
      tilt = lerp(tilt, Math.max(-12, Math.min(12, (mx - lastX) * 0.6)), 0.1); lastX = mx;
      cur.style.transform = `translate(${cx}px, ${cy}px)`;
      sc = lerp(sc, previewOn ? 1 : 0.6, 0.12);
      prev.style.transform = `translate(${px - 170}px, ${py - 128}px) scale(${sc}) rotate(${tilt}deg)`;
      raf = requestAnimationFrame(loop);
    };

    prev.style.transition = 'opacity .35s';
    addEventListener('pointermove', onMove);
    document.addEventListener('pointerover', onOver);
    document.addEventListener('pointerout', onOut);
    document.documentElement.addEventListener('pointerleave', onLeaveWindow);
    document.addEventListener('preview:hide', hidePreview);
    loop();

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      document.removeEventListener('pointerout', onOut);
      document.documentElement.removeEventListener('pointerleave', onLeaveWindow);
      document.removeEventListener('preview:hide', hidePreview);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={curRef} aria-hidden="true" />
      <div className="preview" ref={prevRef} aria-hidden="true">
        <div className="slides" ref={slidesRef}>
          {projects.map((p) => (
            <div key={p.id} style={{ height: '100%' }}>
              <ProjectArt project={p} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

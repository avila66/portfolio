'use client';

import { useEffect, useRef, useState } from 'react';
import type { Project } from '@/data/projects';
import ProjectArt from './ProjectArt';

/**
 * Ventana de detalle con el <dialog> nativo: Esc, foco atrapado y devuelto al cerrar.
 * El padre pasa `project` para abrirla y recibe `onClosed` cuando termina de cerrarse.
 */
export default function ProjectModal({
  project,
  onClosed,
}: {
  project: Project | null;
  onClosed: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [closing, setClosing] = useState(false);
  const downOutside = useRef(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const d = ref.current;
    if (!d || !project || d.open) return;
    d.showModal();
    d.scrollTop = 0;
    d.focus({ preventScroll: true });
  }, [project]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const requestClose = () => {
    const d = ref.current;
    if (!d || !d.open || closing) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      d.close();
      return;
    }
    setClosing(true);
    timer.current = window.setTimeout(() => d.close(), 260);
  };

  const outside = (e: React.PointerEvent | React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
  };

  return (
    <dialog
      ref={ref}
      className={`modal${closing ? ' closing' : ''}`}
      aria-labelledby="m-title"
      tabIndex={-1}
      onCancel={(e) => {
        e.preventDefault();
        requestClose();
      }}
      onClose={() => {
        setClosing(false);
        onClosed();
      }}
      onPointerDown={(e) => {
        downOutside.current = outside(e);
      }}
      onClick={(e) => {
        const onCloseButton = (e.target as Element).closest('[data-close]');
        if (onCloseButton || (downOutside.current && outside(e))) requestClose();
      }}
    >
      {project && (
        <>
          <button className="m-close" type="button" data-close aria-label="Cerrar ventana">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <div className="m-grid">
            <div className="m-art" aria-hidden="true">
              <ProjectArt project={project} />
            </div>

            <div className="m-main">
              <span className="mono">{project.year}</span>
              <h3 id="m-title">
                {project.title}
                {project.wip && <> <span className="wip">{project.wip}</span></>}
              </h3>
              <p className="d-lead">{project.lead}</p>
              <span className="mono d-label">Qué incluye</span>
              <ul className="d-list">
                {project.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {project.links && (
                <div className="d-links">
                  {project.links.map((l) => (
                    <a key={l.href} className="btn" href={l.href} target="_blank" rel="noopener">
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="m-side">
              <dl className="d-meta">
                {project.meta.map((m) => (
                  <div key={m.label}>
                    <dt className="mono">{m.label}</dt>
                    <dd>{m.value}</dd>
                  </div>
                ))}
              </dl>
              <ul className="d-stack">
                {project.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </dialog>
  );
}

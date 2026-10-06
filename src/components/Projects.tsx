'use client';

import { useState } from 'react';
import { projects, type Project } from '@/data/projects';
import { delay } from '@/lib/css';
import ProjectArt from './ProjectArt';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  const open = (p: Project) => {
    document.dispatchEvent(new Event('preview:hide')); // oculta la preview flotante
    setActive(p);
  };

  return (
    <section id="proyectos">
      <div className="sec-head" data-reveal>
        <h2>Proyectos <em>seleccionados</em></h2>
        <span className="mono">DAM · 2025 — 2026</span>
      </div>

      <ul className="projects">
        {projects.map((p, i) => (
          <li key={p.id} className="project" data-reveal data-i={i} style={delay(i ? `${i * 0.08}s` : undefined)}>
            <div className="row" onClick={() => open(p)}>
              <span className="yr">{p.year}</span>
              <div className="body">
                <h3>
                  <button className="open" type="button" aria-haspopup="dialog">{p.title}</button>
                  {p.wip && <> <span className="wip">{p.wip}</span></>}
                </h3>
                <p>{p.summary}</p>
              </div>
              <span className="tag">{p.tag}</span>
              <span className="go" aria-hidden="true">+</span>
              <div className="thumb"><ProjectArt project={p} /></div>
            </div>
          </li>
        ))}
      </ul>

      <ProjectModal project={active} onClosed={() => setActive(null)} />
    </section>
  );
}

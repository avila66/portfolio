'use client';

import { useEffect, useState } from 'react';
import { site } from '@/data/site';
import ThemeToggle from './ThemeToggle';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 10);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : undefined}>
      <a href="#top" className="mark" aria-label="Inicio">A<i>v</i>.</a>
      <div className="nav-right">
        <div className="navlinks">
          <a href="#proyectos">Proyectos</a>
          <a href="#sobre-mi" className="hide-sm">Sobre mí</a>
          <a href="#trayectoria" className="hide-sm">Trayectoria</a>
          <a href="#idiomas" className="hide-sm">Idiomas</a>
          <a href={site.cv} download>CV</a>
          <a href="#contacto">Contacto</a>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}

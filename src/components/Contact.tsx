import { site } from '@/data/site';
import { delay } from '@/lib/css';
import EmailCopy from './EmailCopy';

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <span className="mono kicker" style={{ display: 'block' }} data-reveal>¿Buscáis alumno de DAM para la FCT?</span>
      <EmailCopy />
      <div className="socials" data-reveal style={delay('.16s')}>
        <a className="btn magnetic" href={site.cv} download>Descargar CV ↓</a>
        <a className="btn ghost magnetic" href={site.linkedin} target="_blank" rel="noopener">LinkedIn ↗</a>
        <a className="btn ghost magnetic" href={site.github} target="_blank" rel="noopener">GitHub ↗</a>
      </div>
    </section>
  );
}

import { facts, site, skills } from '@/data/site';
import { delay } from '@/lib/css';
import Portrait from './Portrait';

export default function About() {
  return (
    <section id="sobre-mi">
      <div className="about">
        <div className="portrait" data-reveal>
          <Portrait photo={site.photo} />
          <span className="mono note">Zaragoza · 2026</span>
        </div>
        <div className="about-text" data-reveal style={delay('.1s')}>
          <span className="mono">Sobre mí</span>
          <p className="big" style={{ marginTop: 16 }}>
            Me gusta diseñar lo que la gente ve y usa, y hacerlo <em>en equipo</em>.
          </p>
          <p>Estoy en 2º de DAM en Salesianos Zaragoza. Antes hice el grado medio de SMR en el mismo centro, así que vengo de redes, servidores y soporte. Lo que más me gusta es el frontend y el diseño de páginas; el backend me cuesta un poco más, y por eso mismo quiero mejorar en él.</p>
          <p>Fuera de la pantalla: videojuegos, coleccionar cartas (de ahí salió Card Manager), voleibol y los perros, que me encantan.</p>
          <div className="facts">
            {facts.map((f) => (
              <div key={f.label}><b>{f.value}</b><span>{f.label}</span></div>
            ))}
          </div>
          <div className="stack">
            <div><span className="mono">Manejo</span><p>{skills.manejo}</p></div>
            <div><span className="mono">Aprendiendo</span><p>{skills.aprendiendo}</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

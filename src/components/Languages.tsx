import { delay } from '@/lib/css';

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const ENGLISH_LEVEL = 'B2';

export default function Languages() {
  const reached = LEVELS.indexOf(ENGLISH_LEVEL);

  return (
    <section id="idiomas">
      <div className="sec-head" data-reveal>
        <h2>Idiomas</h2>
        <span className="mono">Escala MCER</span>
      </div>
      <ul className="langs">
        <li data-reveal>
          <h3>Español</h3>
          <p className="native">Lengua materna</p>
          <span className="where"><span className="mono">Nivel</span>Nativo</span>
        </li>
        <li data-reveal style={delay('.08s')}>
          <h3>Inglés</h3>
          <div className="scale" role="img" aria-label={`Nivel ${ENGLISH_LEVEL}, en una escala de A1 a C2`}>
            {LEVELS.map((l, i) => (
              <span key={l} className={`step${i <= reached ? ' on' : ''}${i === reached ? ' now' : ''}`}>
                <i /><b>{l}</b>
              </span>
            ))}
          </div>
          <span className="where"><span className="mono">Certificado</span>Cambridge B2 First</span>
        </li>
      </ul>
    </section>
  );
}

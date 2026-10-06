import { techs } from '@/data/site';

/** Cinta de tecnologías (dos pistas idénticas para que el bucle no tenga saltos) */
export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      {[0, 1].map((n) => (
        <div className="track" key={n}>
          {techs.map((t) => (
            <span key={t} style={{ display: 'contents' }}>
              <span>{t}</span>
              <span className="star">✦</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

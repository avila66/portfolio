export default function Hero() {
  return (
    <header className="hero">
      <span className="status"><span className="dot" /> Buscando empresa para la FCT · marzo–junio 2027</span>
      <h1>
        <span className="line"><span>Alejandro</span></span>
        <span className="line indent"><span><em>Vilafañe</em></span></span>
      </h1>
      <div className="hero-foot">
        <p className="lede">
          Estudiante de <b>2º de DAM</b> en Salesianos Zaragoza. Vengo del mundo de los sistemas y ahora hago aplicaciones, sobre todo <b>frontend y diseño web</b>.
        </p>
        <a href="#proyectos" className="badge" aria-label="Ver proyectos">
          <svg viewBox="0 0 100 100" aria-hidden="true">
            <defs><path id="circ" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs>
            <text><textPath href="#circ">Ver proyectos · Ver proyectos · Ver proyectos · </textPath></text>
          </svg>
          <span className="arrow">↓</span>
        </a>
      </div>
    </header>
  );
}

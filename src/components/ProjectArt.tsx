import type { Project } from '@/data/projects';

/** Ilustración de cada proyecto (preview flotante, miniatura móvil y ventana de detalle) */
export default function ProjectArt({ project }: { project: Pick<Project, 'art' | 'img'> }) {
  if (project.img) {
    return (
      <div className="art">
        <img src={project.img} alt="" loading="lazy" />
      </div>
    );
  }

  switch (project.art) {
    case 'crm':
      return (
        <div className="art art-win">
          <div className="win">
            <div className="bar"><i /><i /><i /></div>
            <div className="tbl"><span /><span /><span /><span /><span /></div>
          </div>
          <span className="cap">CRM · Clínica veterinaria</span>
        </div>
      );
    case 'card':
      return (
        <div className="art art-cards">
          <i /><i /><i />
          <span className="cap">Card Manager</span>
        </div>
      );
    case 'portfolio':
      return (
        <div className="art art-term">
          <b>alejandro@dam</b>:<u>~/portfolio</u>$ <em>git log --oneline</em><br />
          a3f9c21 modo claro / oscuro<br />
          7be1d04 línea de trayectoria<br />
          41c8e9a previews de proyectos<br />
          0d2f6b3 primer commit<br />
          <b>alejandro@dam</b>:<u>~/portfolio</u>$ <span className="caret" />
          <span className="cap" style={{ color: '#8B949E' }}>Este portfolio</span>
        </div>
      );
    default:
      return null;
  }
}

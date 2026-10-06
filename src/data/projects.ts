export type ArtKey = 'crm' | 'card' | 'portfolio';

export type Project = {
  id: string;
  art: ArtKey;
  /**
   * Para usar una captura real en vez de la ilustración: ponla en /public
   * y escribe aquí su ruta, por ejemplo img: '/card-manager.png'.
   * Se usará en la preview flotante, en la miniatura (móvil) y en la ventana de detalle.
   */
  img?: string;
  year: string;
  title: string;
  wip?: string;
  summary: string;
  tag: string;
  lead: string;
  includes: string[];
  meta: { label: string; value: string }[];
  stack: string[];
  links?: { label: string; href: string }[];
};

/**
 * Para añadir un proyecto nuevo, copia uno de los objetos de esta lista.
 * Para enlazar a GitHub o a una demo, usa `links`.
 */
export const projects: Project[] = [
  {
    id: 'crm',
    art: 'crm',
    year: '2026',
    title: 'CRM veterinario',
    wip: 'En desarrollo',
    summary:
      'CRM y web para una clínica veterinaria: oportunidades, empresas, particulares y animales, más una parte de recursos humanos. El formulario de contacto de la web envía los mensajes al CRM. La base de datos en Supabase ya está hecha; ahora estoy con el diseño y el frontend. Lo hago en pareja con Alejo, que se encarga del backend.',
    tag: 'SGE · Next.js · Supabase',
    lead: 'Un CRM para una clínica veterinaria con una web pública conectada: el formulario de contacto crea una oportunidad nueva en el CRM, con la persona y su animal.',
    includes: [
      'Oportunidades en lista y Kanban, de Nuevo a Atendido',
      'Empresas, particulares y animales',
      'Citas de hoy y de mañana, y lo que hay que contestar',
      'Recursos humanos: fichajes, vacaciones y nóminas',
      'Modo claro y oscuro, y exportación a CSV',
    ],
    meta: [
      { label: 'Mi parte', value: 'Diseño y frontend' },
      { label: 'Equipo', value: 'En pareja con Alejo, que se encarga del backend' },
      { label: 'Contexto', value: 'Proyecto de Sistemas de Gestión Empresarial. Odoo fue una parte aparte del trabajo.' },
      { label: 'Estado', value: 'En desarrollo. La base de datos en Supabase ya está hecha.' },
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    links: [{ label: 'Ver en GitHub ↗', href: 'https://github.com/Panaiaio/crm-mimascota' }],
  },
  {
    id: 'card-manager',
    art: 'card',
    year: '2025–26',
    title: 'Card Manager',
    summary:
      'Web para gestionar colecciones de cartas (Pokémon, Topps de fútbol y más): registro de cartas y colecciones y valor total de lo que tienes. La valoración la introduce cada usuario, con la idea de conectar una API de precios más adelante. Proyecto final de Bases de datos, en pareja: yo hice el frontend y el diseño.',
    tag: 'Next.js · Supabase · GitHub',
    lead: 'Una web para llevar el control de tus colecciones de cartas, como Pokémon o Topps de fútbol, y saber cuánto vale todo lo que tienes. Nació de mi afición a coleccionar cartas.',
    includes: [
      'Registro de cartas',
      'Registro de colecciones',
      'Valor total de lo que tienes',
      'Valoración introducida por cada usuario',
    ],
    meta: [
      { label: 'Mi parte', value: 'Frontend y diseño' },
      { label: 'Equipo', value: 'En pareja' },
      { label: 'Contexto', value: 'Proyecto final de Bases de datos' },
      { label: 'Siguiente paso', value: 'Conectar una API de precios para valorar las cartas' },
    ],
    stack: ['Next.js', 'Supabase'],
    // Si lo subes a Vercel, añade aquí un segundo enlace: { label: 'Ver demo ↗', href: '...' }
    links: [{ label: 'Ver en GitHub ↗', href: 'https://github.com/avila66/card-manager' }],
  },
  {
    id: 'portfolio',
    art: 'portfolio',
    year: '2026',
    title: 'Este portfolio',
    summary:
      'Hecho con Claude, una inteligencia artificial de Anthropic: yo le di las instrucciones y la información, y Claude lo programó. Está escrito con Next.js (React y TypeScript) y CSS propio, sin plantillas ni librerías de componentes, con modo claro/oscuro, animaciones que respetan el ajuste de reducir movimiento y diseño adaptado a móvil.',
    tag: 'Next.js · React · TypeScript',
    lead: 'Este mismo portfolio, hecho con Claude, una inteligencia artificial de Anthropic. Yo le di las instrucciones y la información, y Claude lo programó.',
    includes: [
      'Next.js con React y TypeScript, y CSS propio sin plantillas',
      'Modo claro y oscuro que recuerda tu elección',
      'Animaciones que respetan el ajuste de reducir movimiento',
      'Diseño adaptado a móvil',
    ],
    meta: [
      { label: 'Mi parte', value: 'Instrucciones, contenido e ideas' },
      { label: 'Programación', value: 'Claude, a partir de mis instrucciones' },
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'CSS'],
    // Si subes este portfolio a GitHub, añade aquí: links: [{ label: 'Ver en GitHub ↗', href: '...' }]
  },
];

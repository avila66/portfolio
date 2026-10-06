export const site = {
  name: 'Alejandro Vilafañe',
  email: 'alexvilacotela@gmail.com',
  /** Pon tu CV en la carpeta /public con este nombre */
  cv: '/cv-alejandro-vilafane.pdf',
  linkedin: 'https://www.linkedin.com/in/alejandro-vilafa%C3%B1e-cotela-6629063a0/',
  github: 'https://github.com/avila66',
  /**
   * Cuando tengas la foto (vertical, 4:5), ponla en /public y escribe aquí su ruta,
   * por ejemplo '/foto-alejandro.jpg'. La animación del retrato se desactiva sola.
   */
  photo: null as string | null,
};

export const techs = [
  'Java', 'Next.js', 'HTML / CSS', 'Supabase', 'SQL', 'Odoo', 'Linux', 'Windows Server', 'Redes', 'Flutter',
];

export const facts = [
  { value: '4', label: 'meses de prácticas en empresa' },
  { value: '2', label: 'ciclos de FP' },
  { value: '3', label: 'proyectos seleccionados' },
];

export const skills = {
  manejo: 'Java · HTML/CSS · Next.js · SQL · Linux · Ubuntu Server · Windows Server · Redes',
  aprendiendo: 'Supabase · Odoo · Dart y Flutter · C# · Python',
};

export const timeline = [
  { when: 'Mar — Jun 2027', title: 'FCT de DAM', text: 'Buscando empresa de desarrollo para las prácticas de segundo curso.', where: 'Pendiente' },
  { when: '2025 — 2027', title: 'CFGS Desarrollo de Aplicaciones Multiplataforma', text: 'Programación, bases de datos, desarrollo de interfaces y sistemas de gestión empresarial con Odoo.', where: 'Salesianos Zaragoza' },
  { when: '2026 · 1 mes', title: 'Prácticas de desarrollo web', text: 'Mantenimiento y corrección de la web corporativa de una empresa de protección contra incendios.', where: 'Sarpans' },
  { when: '2025 · 3 meses', title: 'Prácticas de SysOps y soporte', text: 'Revisión y resolución de tickets de incidencias de los empleados y atención al usuario.', where: 'Hiberus' },
  { when: '2023 — 2025', title: 'CFGM Sistemas Microinformáticos y Redes', text: 'Redes, Linux, Ubuntu Server y Windows Server.', where: 'Salesianos Zaragoza' },
];

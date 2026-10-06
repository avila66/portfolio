# Portfolio de Alejandro Vilafañe (Next.js)

Portfolio hecho con **Next.js (App Router), React y TypeScript**, con CSS propio (sin Tailwind ni librerías de componentes).

## Arrancar

Necesitas Node.js 20.9 o superior.

```bash
npm install
npm run dev      # desarrollo en http://localhost:3000
npm run build    # compilar para producción
npm start        # servir la versión compilada
```

## Qué editar

| Quiero cambiar…                          | Archivo                      |
| ---------------------------------------- | ---------------------------- |
| Proyectos (textos, ventana de detalle)   | `src/data/projects.ts`       |
| Email, enlaces, CV, foto, trayectoria, cifras, tecnologías | `src/data/site.ts` |
| Colores, tipografías, tamaños            | `src/app/globals.css` (variables `:root` al principio) |
| Título, descripción y datos para redes   | `src/app/layout.tsx`         |

- **CV:** copia tu PDF en `public/` con el nombre `cv-alejandro-vilafane.pdf` (o cambia `cv` en `src/data/site.ts`).
- **Foto:** copia la imagen (vertical, 4:5) en `public/` y escribe su ruta en `photo` de `src/data/site.ts`, por ejemplo `'/foto-alejandro.jpg'`. La animación del retrato se desactiva sola.
- **Capturas de los proyectos:** copia la imagen en `public/` y pon `img: '/nombre.png'` en el proyecto. Se usa en la preview, la miniatura y la ventana de detalle.
- **Nuevo proyecto:** copia uno de los objetos de `projects` y cambia sus datos. Los enlaces (GitHub, demo) van en `links`.
- **Imagen para LinkedIn:** cuando publiques, descomenta `images` en `src/app/layout.tsx` con la URL completa de una imagen de 1200×630.

## Estructura

```
src/
  app/            layout.tsx (metadatos, tema, tipografías) · page.tsx · globals.css · icon.svg
  components/     una pieza por archivo
    ThemeToggle   botón claro/oscuro con transición circular
    ProjectModal  ventana de detalle con <dialog> nativo
    CursorLayer   cursor, preview flotante y botones magnéticos
    Portrait      retrato animado (o foto)
    Timeline, Nav, ScrollProgress, RevealController, SiteFooter, EmailCopy…
  data/           contenido editable (site.ts, projects.ts)
  lib/            tema (theme.ts) y utilidades
```

## Publicar en Vercel

1. Sube el proyecto a un repositorio de GitHub (`node_modules` y `.next` ya están ignorados).
2. En vercel.com, **Add New → Project**, elige el repositorio y pulsa **Deploy**. No hace falta configurar nada.

## Notas

- El tema (claro/oscuro) se decide en un pequeño script del `<head>` antes de pintar, así no hay parpadeo. Respeta la preferencia del sistema hasta que el visitante elige.
- Las animaciones se desactivan con «reducir movimiento» y el cursor personalizado solo se activa con ratón.
- Las tipografías (Syne, Manrope y JetBrains Mono) se cargan desde Google Fonts en `layout.tsx`. Si prefieres que se descarguen en el build, puedes migrarlas a `next/font/google`.

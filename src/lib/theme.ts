export type Theme = 'light' | 'dark';

export const THEME_COLORS: Record<Theme, string> = { light: '#F4F2EF', dark: '#110F0E' };

export const readStoredTheme = (): Theme | null => {
  try {
    const t = localStorage.getItem('theme');
    return t === 'light' || t === 'dark' ? t : null;
  } catch {
    return null;
  }
};

export const storeTheme = (t: Theme) => {
  try {
    localStorage.setItem('theme', t);
  } catch {}
};

/** Aplica el tema: atributo en <html>, color de la barra del navegador y aviso al resto de componentes */
export const paintTheme = (t: Theme) => {
  document.documentElement.dataset.theme = t;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', THEME_COLORS[t]);
  window.dispatchEvent(new Event('themechange'));
};

/**
 * Se ejecuta en <head> ANTES de pintar la página, para evitar el parpadeo:
 * preferencia guardada > preferencia del sistema.
 */
export const THEME_SCRIPT = `(function(){var s=null;try{s=localStorage.getItem('theme')}catch(e){}
var t=(s==='light'||s==='dark')?s:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
document.documentElement.dataset.theme=t;
var m=document.querySelector('meta[name="theme-color"]');
if(m)m.setAttribute('content',t==='dark'?'${THEME_COLORS.dark}':'${THEME_COLORS.light}');})();`;

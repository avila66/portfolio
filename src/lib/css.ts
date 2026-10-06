import type { CSSProperties } from 'react';

/** Retardo de la animación de aparición (variable CSS --d) */
export const delay = (d?: string): CSSProperties | undefined =>
  d ? ({ '--d': d } as CSSProperties) : undefined;

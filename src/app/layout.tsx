import type { Metadata } from 'next';
import { THEME_SCRIPT } from '@/lib/theme';
import './globals.css';

export const metadata: Metadata = {
  title: 'Alejandro Vilafañe Portfolio',
  description:
    'Alejandro Vilafañe, estudiante de 2º de DAM en Salesianos Zaragoza. Frontend y diseño web. Buscando empresa para la FCT (marzo–junio 2027).',
  authors: [{ name: 'Alejandro Vilafañe' }],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    title: 'Alejandro Vilafañe · Portfolio',
    description:
      'Estudiante de 2º de DAM en Zaragoza. Frontend y diseño web. Buscando empresa para la FCT (marzo–junio 2027).',
    // Cuando lo publiques, añade una imagen para LinkedIn (1200×630):
    // images: ['https://TU-DOMINIO/og.png'],
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: el script del <head> pone data-theme antes de que React cargue
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#F4F2EF" suppressHydrationWarning />
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=Manrope:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

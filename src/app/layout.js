import './globals.css';
import { Poppins, Caveat } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  variable: '--font-poppins',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-caveat',
});

export const metadata = {
  title: 'JapTom Telecom — Internet por fibra óptica en El Alto y Tarija',
  description:
    'Soluciones tecnológicas en fibra óptica con la mejor velocidad. Planes para hogar y negocio en El Alto y Tarija, Bolivia.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${poppins.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}

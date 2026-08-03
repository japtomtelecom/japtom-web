'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useIdioma } from '@/lib/idioma';

const T = {
  es: {
    links: [
      { href: '/', label: 'Inicio' },
      { href: '/servicios', label: 'Servicios' },
      { href: '/cobertura', label: 'Cobertura' },
      { href: '/consulta', label: 'Consulta tu cuenta' },
      { href: '/contacto', label: 'Contacto' },
    ],
    ciudades: 'El Alto · Tarija',
  },
  en: {
    links: [
      { href: '/', label: 'Home' },
      { href: '/servicios', label: 'Services' },
      { href: '/cobertura', label: 'Coverage' },
      { href: '/consulta', label: 'Check your account' },
      { href: '/contacto', label: 'Contact' },
    ],
    ciudades: 'El Alto · Tarija',
  },
};

export default function Header() {
  const [abierto, setAbierto] = useState(false);
  const { lang, cambiarIdioma } = useIdioma();
  const t = T[lang];

  return (
    <header className="bg-brand-800 text-white">
      <div className="section flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="JapTom Telecom" className="w-9 h-9 rounded-full bg-white" />
          <div>
            <div className="font-display text-lg font-bold leading-tight">JapTom Telecom</div>
            <div className="text-brand-200 text-xs">{t.ciudades}</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {t.links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-brand-200">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center text-xs font-semibold border border-brand-600 rounded-full overflow-hidden">
            <button
              onClick={() => cambiarIdioma('es')}
              className={`px-3 py-1 ${lang === 'es' ? 'bg-brand-600' : 'hover:bg-brand-700'}`}
            >
              ES
            </button>
            <button
              onClick={() => cambiarIdioma('en')}
              className={`px-3 py-1 ${lang === 'en' ? 'bg-brand-600' : 'hover:bg-brand-700'}`}
            >
              EN
            </button>
          </div>

          <button
            className="md:hidden text-2xl"
            onClick={() => setAbierto((v) => !v)}
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </div>
      </div>

      {abierto && (
        <nav className="md:hidden bg-brand-700 border-t border-brand-600">
          {t.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setAbierto(false)}
              className="block px-4 py-3 text-sm border-b border-brand-600/50"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 px-4 py-3">
            <button
              onClick={() => cambiarIdioma('es')}
              className={`px-3 py-1 rounded text-xs font-semibold ${lang === 'es' ? 'bg-brand-600' : 'bg-brand-800'}`}
            >
              ES
            </button>
            <button
              onClick={() => cambiarIdioma('en')}
              className={`px-3 py-1 rounded text-xs font-semibold ${lang === 'en' ? 'bg-brand-600' : 'bg-brand-800'}`}
            >
              EN
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}

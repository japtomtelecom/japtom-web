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

function Bandera({ pais }) {
  const src = pais === 'bo' ? 'https://flagcdn.com/w40/bo.png' : 'https://flagcdn.com/w40/us.png';
  return (
    <img src={src} alt={pais === 'bo' ? 'Bolivia' : 'USA'} className="w-6 h-4 object-cover rounded-sm" />
  );
}

export default function Header() {
  const [abierto, setAbierto] = useState(false);
  const { lang, cambiarIdioma } = useIdioma();
  const t = T[lang];

  return (
    <header className="bg-brand-800 text-white">
      <div className="section flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
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
          <div className="hidden md:flex items-center gap-2 bg-white/10 rounded-full p-1 border border-white/20">
            <button
              onClick={() => cambiarIdioma('es')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                lang === 'es' ? 'bg-accent text-white' : 'text-brand-100 hover:bg-white/10'
              }`}
            >
              <Bandera pais="bo" /> ES
            </button>
            <button
              onClick={() => cambiarIdioma('en')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                lang === 'en' ? 'bg-accent text-white' : 'text-brand-100 hover:bg-white/10'
              }`}
            >
              <Bandera pais="us" /> EN
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
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${
                lang === 'es' ? 'bg-accent text-white' : 'bg-brand-800 text-brand-100'
              }`}
            >
              <Bandera pais="bo" /> ES
            </button>
            <button
              onClick={() => cambiarIdioma('en')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${
                lang === 'en' ? 'bg-accent text-white' : 'bg-brand-800 text-brand-100'
              }`}
            >
              <Bandera pais="us" /> EN
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
'use client';

import Link from 'next/link';
import { useState } from 'react';

const LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/cobertura', label: 'Cobertura' },
  { href: '/consulta', label: 'Consulta tu cuenta' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Header() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="bg-brand-800 text-white">
      <div className="section flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="JapTom Telecom" className="w-9 h-9 rounded-full bg-white" />
          <div>
            <div className="font-display text-lg font-bold leading-tight">JapTom Telecom</div>
            <div className="text-brand-200 text-xs">El Alto · Tarija</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-brand-200">
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-2xl"
          onClick={() => setAbierto((v) => !v)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </div>

      {abierto && (
        <nav className="md:hidden bg-brand-700 border-t border-brand-600">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setAbierto(false)}
              className="block px-4 py-3 text-sm border-b border-brand-600/50"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
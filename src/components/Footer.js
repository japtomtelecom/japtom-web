'use client';

import { useIdioma } from '@/lib/idioma';

const T = {
  es: {
    desc: 'Internet por fibra óptica en El Alto y Tarija. Soluciones tecnológicas con la mejor velocidad.',
    enlaces: 'Enlaces',
    links: [
      { href: '/servicios', label: 'Servicios' },
      { href: '/planes', label: 'Otros servicios' },
      { href: '/cobertura', label: 'Cobertura' },
      { href: '/consulta', label: 'Consulta tu cuenta' },
      { href: '/contacto', label: 'Contacto' },
    ],
    contacto: 'Contacto',
    derechos: 'Todos los derechos reservados.',
  },
  en: {
    desc: 'Fiber optic internet in El Alto and Tarija. Technology solutions with the best speed.',
    enlaces: 'Links',
    links: [
      { href: '/servicios', label: 'Services' },
      { href: '/planes', label: 'Other services' },
      { href: '/cobertura', label: 'Coverage' },
      { href: '/consulta', label: 'Check your account' },
      { href: '/contacto', label: 'Contact' },
    ],
    contacto: 'Contact',
    derechos: 'All rights reserved.',
  },
};

export default function Footer() {
  const { lang } = useIdioma();
  const t = T[lang];

  return (
    <footer className="bg-brand-900 text-brand-100 mt-16">
      <div className="section py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-display text-lg font-bold text-white mb-2">JapTom Telecom</div>
          <p className="text-brand-200">{t.desc}</p>
        </div>
        <div>
          <div className="font-semibold text-white mb-2">{t.enlaces}</div>
          <ul className="space-y-1 text-brand-200">
            {t.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white mb-2">{t.contacto}</div>
          <p className="text-brand-200">WhatsApp: 71537257 · 77766262 · +1 (689) 306-3870</p>
          <p className="text-brand-200 mt-1">gerencia@japtomtelecom.com</p>
        </div>
      </div>
      <div className="text-center text-xs text-brand-300 py-4 border-t border-brand-700">
        © {new Date().getFullYear()} JapTom Telecom. {t.derechos}
      </div>
    </footer>
  );
}

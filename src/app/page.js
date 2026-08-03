'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useIdioma } from '@/lib/idioma';

const T = {
  es: {
    titulo: 'Servicios de telecomunicaciones e ingeniería',
    subtitulo:
      'Planta externa, cableado estructurado, tendido de fibra óptica, configuración de equipos y cámaras de seguridad — soluciones completas para tu empresa.',
    verServicios: 'Ver nuestros servicios',
    hablarAsesor: '📲 Hablar con un asesor',
    slogan: '¡Con la mejor velocidad!',
    haceomos: 'Lo que hacemos',
    infra: 'Infraestructura',
    infraDesc: 'Planta externa, cableado estructurado y tendido de fibra óptica, aérea y subterránea.',
    equipos: 'Configuración de equipos',
    equiposDesc: 'Routers, switches, ONTs y equipos MikroTik listos para producción.',
    seguridad: 'Seguridad',
    seguridadDesc: 'Cámaras de videovigilancia con acceso remoto desde tu celular.',
    verTodos: 'Ver todos los servicios →',
    yaCliente: '¿Ya eres cliente de internet?',
    consultaDesc: 'Consulta el estado de tu cuenta y tu fecha de vencimiento en segundos.',
    consultarCuenta: 'Consultar mi cuenta →',
    waTexto: 'Hola, quiero información sobre sus servicios.',
  },
  en: {
    titulo: 'Telecommunications and engineering services',
    subtitulo:
      'Outside plant, structured cabling, fiber optic laying, equipment configuration and security cameras — complete solutions for your business.',
    verServicios: 'See our services',
    hablarAsesor: '📲 Talk to an advisor',
    slogan: 'With the best speed!',
    haceomos: 'What we do',
    infra: 'Infrastructure',
    infraDesc: 'Outside plant, structured cabling, and aerial/underground fiber optic laying.',
    equipos: 'Equipment configuration',
    equiposDesc: 'Routers, switches, ONTs and MikroTik equipment ready for production.',
    seguridad: 'Security',
    seguridadDesc: 'Video surveillance cameras with remote access from your phone.',
    verTodos: 'See all services →',
    yaCliente: 'Already an internet customer?',
    consultaDesc: 'Check your account status and due date in seconds.',
    consultarCuenta: 'Check my account →',
    waTexto: 'Hello, I would like information about your services.',
  },
};

export default function InicioPage() {
  const { lang } = useIdioma();
  const t = T[lang];
  const wa = 'https://wa.me/59171537257?text=' + encodeURIComponent(t.waTexto);

  return (
    <>
      <Header />

      <section className="relative bg-brand-800 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1606814540563-5c02d62fd409?auto=format&fit=crop&w=1600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="section py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center relative">
          <div>
            <h1 className="font-display text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              {t.titulo}
            </h1>
            <p className="text-brand-100 text-lg mb-8">{t.subtitulo}</p>
            <div className="flex flex-wrap gap-3 items-center">
              <a href="/servicios" className="btn-primary">
                {t.verServicios}
              </a>
              <a href={wa} target="_blank" rel="noreferrer" className="btn-whatsapp">
                {t.hablarAsesor}
              </a>
            </div>
            <p className="font-script text-3xl text-accent-300 mt-6">{t.slogan}</p>
          </div>
          <div className="hidden md:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="" className="w-56 h-56 rounded-full bg-white mx-auto p-6" />
          </div>
        </div>
      </section>

      <section className="section py-16">
        <h2 className="font-display text-2xl font-bold text-brand-800 mb-8 text-center">
          {t.haceomos}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <div className="text-3xl mb-3">🏗️</div>
            <h3 className="font-semibold text-brand-700 mb-2">{t.infra}</h3>
            <p className="text-brand-500 text-sm">{t.infraDesc}</p>
          </div>
          <div className="card p-6">
            <div className="text-3xl mb-3">⚙️</div>
            <h3 className="font-semibold text-brand-700 mb-2">{t.equipos}</h3>
            <p className="text-brand-500 text-sm">{t.equiposDesc}</p>
          </div>
          <div className="card p-6">
            <div className="text-3xl mb-3">📹</div>
            <h3 className="font-semibold text-brand-700 mb-2">{t.seguridad}</h3>
            <p className="text-brand-500 text-sm">{t.seguridadDesc}</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="/servicios" className="text-accent-500 font-semibold hover:underline">
            {t.verTodos}
          </a>
        </div>
      </section>

      <section className="bg-brand-50 py-16">
        <div className="section text-center">
          <h2 className="font-display text-2xl font-bold text-brand-800 mb-3">{t.yaCliente}</h2>
          <p className="text-brand-500 mb-6">{t.consultaDesc}</p>
          <a href="/consulta" className="btn-secondary">
            {t.consultarCuenta}
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useIdioma } from '@/lib/idioma';

const SERVICIOS = [
  {
    icono: '🏗️',
    imagen: 'https://images.pexels.com/photos/36657008/pexels-photo-36657008.jpeg?auto=compress&cs=tinysrgb&w=800',
    es: { nombre: 'Planta externa', descripcion: 'Diseño, construcción y mantenimiento de infraestructura de telecomunicaciones para operadores y empresas.' },
    en: { nombre: 'Outside plant', descripcion: 'Design, construction and maintenance of telecommunications infrastructure for carriers and businesses.' },
  },
  {
    icono: '🔌',
    imagen: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    es: { nombre: 'Cableado estructurado', descripcion: 'Instalación de redes de datos, voz y energía para oficinas, edificios y locales comerciales, bajo normativa.' },
    en: { nombre: 'Structured cabling', descripcion: 'Installation of data, voice and power networks for offices, buildings and commercial spaces, per code.' },
  },
  {
    icono: '🧵',
    imagen: 'https://images.unsplash.com/photo-1624965439943-09e0238644e2?auto=format&fit=crop&w=800&q=80',
    es: { nombre: 'Tendido de fibra óptica', descripcion: 'Tendido aéreo y subterráneo de fibra óptica, empalmes, certificación y mediciones ópticas (OTDR).' },
    en: { nombre: 'Fiber optic laying', descripcion: 'Aerial and underground fiber optic laying, splicing, certification and optical measurements (OTDR).' },
  },
  {
    icono: '⚙️',
    imagen: 'https://images.unsplash.com/photo-1584169417032-d34e8d805e8b?auto=format&fit=crop&w=800&q=80',
    es: { nombre: 'Configuración de equipos', descripcion: 'Configuración de routers, switches, ONTs y equipos MikroTik para redes empresariales y de operador.' },
    en: { nombre: 'Equipment configuration', descripcion: 'Configuration of routers, switches, ONTs and MikroTik equipment for business and carrier networks.' },
  },
  {
    icono: '📹',
    imagen: 'https://images.pexels.com/photos/7364948/pexels-photo-7364948.jpeg?auto=compress&cs=tinysrgb&w=800',
    es: { nombre: 'Cámaras de seguridad', descripcion: 'Instalación y configuración de sistemas de videovigilancia, con acceso remoto desde tu celular.' },
    en: { nombre: 'Security cameras', descripcion: 'Installation and configuration of video surveillance systems, with remote access from your phone.' },
  },
];

const T = {
  es: {
    titulo: 'Servicios de telecomunicaciones e ingeniería',
    subtitulo: 'Diseñamos, instalamos y mantenemos la infraestructura que tu empresa necesita — de la planta externa a la cámara de seguridad.',
    cotizar: 'Cotizar este servicio →',
    noEncuentras: '¿No encuentras lo que buscas? Cuéntanos qué necesitas.',
    hablarAsesor: '📲 Hablar con un asesor',
    cotizarTexto: (nombre) => `Hola, quiero cotizar el servicio de ${nombre}.`,
    asesorTexto: 'Hola, quiero información sobre sus servicios.',
  },
  en: {
    titulo: 'Telecommunications and engineering services',
    subtitulo: 'We design, install and maintain the infrastructure your business needs — from outside plant to security cameras.',
    cotizar: 'Get a quote →',
    noEncuentras: "Can't find what you're looking for? Tell us what you need.",
    hablarAsesor: '📲 Talk to an advisor',
    cotizarTexto: (nombre) => `Hi, I would like a quote for ${nombre}.`,
    asesorTexto: 'Hello, I would like information about your services.',
  },
};

export default function ServiciosPage() {
  const { lang } = useIdioma();
  const t = T[lang];
  const wa = 'https://wa.me/59171537257?text=' + encodeURIComponent(t.asesorTexto);

  return (
    <>
      <Header />

      <section className="bg-brand-800 text-white">
        <div className="section py-16 md:py-20 text-center">
          <h1 className="font-display text-3xl md:text-4xl font-extrabold mb-4">{t.titulo}</h1>
          <p className="text-brand-100 text-lg max-w-2xl mx-auto">{t.subtitulo}</p>
        </div>
      </section>

      <section className="section py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICIOS.map((s) => {
            const st = s[lang];
            return (
              <div key={st.nombre} className="card overflow-hidden">
                {s.imagen ? (
                  <img src={s.imagen} alt={st.nombre} className="w-full h-40 object-cover" />
                ) : (
                  <div className="w-full h-40 bg-brand-50 flex items-center justify-center text-5xl">
                    {s.icono}
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-brand-800 mb-2">{st.nombre}</h3>
                  <p className="text-brand-500 text-sm mb-4">{st.descripcion}</p>
                  <a
                    href={`https://wa.me/59171537257?text=${encodeURIComponent(t.cotizarTexto(st.nombre))}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent-500 font-semibold text-sm hover:underline"
                  >
                    {t.cotizar}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-14">
          <p className="text-brand-500 mb-4">{t.noEncuentras}</p>
          <a href={wa} target="_blank" rel="noreferrer" className="btn-whatsapp">
            {t.hablarAsesor}
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

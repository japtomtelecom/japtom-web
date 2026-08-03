import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SERVICIOS = [
  {
    icono: '🏗️',
    nombre: 'Planta externa',
    descripcion: 'Diseño, construcción y mantenimiento de infraestructura de telecomunicaciones para operadores y empresas.',
    imagen: 'https://images.pexels.com/photos/36657008/pexels-photo-36657008.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icono: '🔌',
    nombre: 'Cableado estructurado',
    descripcion: 'Instalación de redes de datos, voz y energía para oficinas, edificios y locales comerciales, bajo normativa.',
    imagen: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
  },
  {
    icono: '🧵',
    nombre: 'Tendido de fibra óptica',
    descripcion: 'Tendido aéreo y subterráneo de fibra óptica, empalmes, certificación y mediciones ópticas (OTDR).',
    imagen: 'https://images.unsplash.com/photo-1624965439943-09e0238644e2?auto=format&fit=crop&w=800&q=80',
  },
  {
    icono: '⚙️',
    nombre: 'Configuración de equipos',
    descripcion: 'Configuración de routers, switches, ONTs y equipos MikroTik para redes empresariales y de operador.',
    imagen: 'https://images.unsplash.com/photo-1584169417032-d34e8d805e8b?auto=format&fit=crop&w=800&q=80',
  },
  {
    icono: '📹',
    nombre: 'Cámaras de seguridad',
    descripcion: 'Instalación y configuración de sistemas de videovigilancia, con acceso remoto desde tu celular.',
    imagen: 'https://images.pexels.com/photos/7364948/pexels-photo-7364948.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function ServiciosPage() {
  const wa = 'https://wa.me/59171537257?text=' + encodeURIComponent('Hola, quiero información sobre sus servicios.');

  return (
    <>
      <Header />

      <section className="bg-brand-800 text-white">
        <div className="section py-16 md:py-20 text-center">
          <h1 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
            Servicios de telecomunicaciones e ingeniería
          </h1>
          <p className="text-brand-100 text-lg max-w-2xl mx-auto">
            Diseñamos, instalamos y mantenemos la infraestructura que tu empresa necesita — de la
            planta externa a la cámara de seguridad.
          </p>
        </div>
      </section>

      <section className="section py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICIOS.map((s) => (
            <div key={s.nombre} className="card overflow-hidden">
              {s.imagen ? (
                <img src={s.imagen} alt={s.nombre} className="w-full h-40 object-cover" />
              ) : (
                <div className="w-full h-40 bg-brand-50 flex items-center justify-center text-5xl">
                  {s.icono}
                </div>
              )}
              <div className="p-6">
                <h3 className="font-display font-bold text-lg text-brand-800 mb-2">{s.nombre}</h3>
               <p className="text-brand-500 text-sm mb-4">{s.descripcion}</p>
                
                  href={`https://wa.me/59171537257?text=${encodeURIComponent('Hola, quiero cotizar el servicio de ' + s.nombre + '.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent-500 font-semibold text-sm hover:underline"
                >
                  Cotizar este servicio →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-brand-500 mb-4">¿No encuentras lo que buscas? Cuéntanos qué necesitas.</p>
          <a href={wa} target="_blank" rel="noreferrer" className="btn-whatsapp">
            📲 Hablar con un asesor
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
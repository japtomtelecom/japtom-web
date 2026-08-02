import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function InicioPage() {
  const wa = 'https://wa.me/59171537257?text=' + encodeURIComponent('Hola, quiero información sobre sus servicios.');

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
              Servicios de telecomunicaciones e ingeniería
            </h1>
            <p className="text-brand-100 text-lg mb-8">
              Planta externa, cableado estructurado, tendido de fibra óptica, configuración de
              equipos y cámaras de seguridad — soluciones completas para tu empresa.
            </p>
            <div className="flex flex-wrap gap-3 items-center">
              <a href="/servicios" className="btn-primary">
                Ver nuestros servicios
              </a>
              <a href={wa} target="_blank" rel="noreferrer" className="btn-whatsapp">
                📲 Hablar con un asesor
              </a>
            </div>
            <p className="font-script text-3xl text-accent-300 mt-6">¡Con la mejor velocidad!</p>
          </div>
          <div className="hidden md:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="" className="w-56 h-56 rounded-full bg-white mx-auto p-6" />
          </div>
        </div>
      </section>

      <section className="section py-16">
        <h2 className="font-display text-2xl font-bold text-brand-800 mb-8 text-center">
          Lo que hacemos
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <div className="text-3xl mb-3">🏗️</div>
            <h3 className="font-semibold text-brand-700 mb-2">Infraestructura</h3>
            <p className="text-brand-500 text-sm">
              Planta externa, cableado estructurado y tendido de fibra óptica, aérea y subterránea.
            </p>
          </div>
          <div className="card p-6">
            <div className="text-3xl mb-3">⚙️</div>
            <h3 className="font-semibold text-brand-700 mb-2">Configuración de equipos</h3>
            <p className="text-brand-500 text-sm">
              Routers, switches, ONTs y equipos MikroTik listos para producción.
            </p>
          </div>
          <div className="card p-6">
            <div className="text-3xl mb-3">📹</div>
            <h3 className="font-semibold text-brand-700 mb-2">Seguridad</h3>
            <p className="text-brand-500 text-sm">
              Cámaras de videovigilancia con acceso remoto desde tu celular.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="/servicios" className="text-accent-500 font-semibold hover:underline">
            Ver todos los servicios →
          </a>
        </div>
      </section>

      <section className="bg-brand-50 py-16">
        <div className="section text-center">
          <h2 className="font-display text-2xl font-bold text-brand-800 mb-3">
            ¿Ya eres cliente de internet?
          </h2>
          <p className="text-brand-500 mb-6">
            Consulta el estado de tu cuenta y tu fecha de vencimiento en segundos.
          </p>
          <a href="/consulta" className="btn-secondary">
            Consultar mi cuenta →
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

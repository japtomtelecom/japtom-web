import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CoberturaPage() {
  const wa = 'https://wa.me/59171537257?text=' + encodeURIComponent('Hola, quiero saber si hay cobertura en mi zona.');

  return (
    <>
      <Header />
      <section className="section py-16">
        <h1 className="font-display text-3xl font-bold text-brand-800 mb-2 text-center">
          Zonas de cobertura
        </h1>
        <p className="text-brand-500 text-center mb-12">
          Llegamos a estas dos ciudades con fibra óptica. ¿No estás seguro si tu zona tiene
          cobertura? Escríbenos y lo confirmamos.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card overflow-hidden">
            <div className="p-4 border-b border-brand-100">
              <h2 className="font-display text-lg font-semibold text-brand-700">📍 El Alto</h2>
            </div>
            <iframe
              title="Mapa El Alto"
              src="https://www.google.com/maps?q=El+Alto,+Bolivia&output=embed"
              className="w-full h-80 border-0"
              loading="lazy"
            />
          </div>

          <div className="card overflow-hidden">
            <div className="p-4 border-b border-brand-100">
              <h2 className="font-display text-lg font-semibold text-brand-700">📍 Tarija</h2>
            </div>
            <iframe
              title="Mapa Tarija"
              src="https://www.google.com/maps?q=Tarija,+Bolivia&output=embed"
              className="w-full h-80 border-0"
              loading="lazy"
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <a href={wa} target="_blank" rel="noreferrer" className="btn-whatsapp">
            📲 Consultar cobertura en mi zona
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
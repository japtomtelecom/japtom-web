import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ZONAS_EL_ALTO = [
  'Ventilla', 'Rancho', 'Retamas III', 'San Judas', 'Urb. Jardín', 'Parcopata',
  'Los Pinos', 'Cristal I', 'San Agustín', 'Plan 3000', 'Alfa Omega', 'Tarapacá',
  '14 de Septiembre', '31 de Octubre', 'Samo', 'Copacabana', 'Los Ángeles',
  'San Martín', 'Senkata', 'Fertilizantes', 'Achocalla', 'Amachuma', 'Santa Isabel',
  'Ceja', 'Magisterio', 'Kiswaras', 'Normal El Alto', 'Vergel', 'Santísima Trinidad',
  'Concretec', 'Puente Vela', 'Florida',
];

const ZONAS_TARIJA = ['Zona central Tarija', 'Consultar disponibilidad por barrio'];

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
          Llegamos a estas zonas con fibra óptica. ¿No ves la tuya? Escríbenos, seguimos expandiendo la red.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="card p-6">
            <h2 className="font-display text-xl font-semibold text-brand-700 mb-4">📍 El Alto</h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-brand-600">
              {ZONAS_EL_ALTO.map((z) => (
                <li key={z}>• {z}</li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <h2 className="font-display text-xl font-semibold text-brand-700 mb-4">📍 Tarija</h2>
            <ul className="space-y-2 text-sm text-brand-600">
              {ZONAS_TARIJA.map((z) => (
                <li key={z}>• {z}</li>
              ))}
            </ul>
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

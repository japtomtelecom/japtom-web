'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useIdioma } from '@/lib/idioma';

const T = {
  es: {
    titulo: 'Zonas de cobertura',
    subtitulo: 'Llegamos a estas dos ciudades con fibra óptica. ¿No estás seguro si tu zona tiene cobertura? Escríbenos y lo confirmamos.',
    consultar: '📲 Consultar cobertura en mi zona',
    waTexto: 'Hola, quiero saber si hay cobertura en mi zona.',
  },
  en: {
    titulo: 'Coverage areas',
    subtitulo: "We reach these two cities with fiber optic. Not sure if your area has coverage? Message us and we'll confirm.",
    consultar: '📲 Check coverage in my area',
    waTexto: 'Hello, I would like to know if there is coverage in my area.',
  },
};

export default function CoberturaPage() {
  const { lang } = useIdioma();
  const t = T[lang];
  const wa = 'https://wa.me/59171537257?text=' + encodeURIComponent(t.waTexto);

  return (
    <>
      <Header />
      <section className="section py-16">
        <h1 className="font-display text-3xl font-bold text-brand-800 mb-2 text-center">{t.titulo}</h1>
        <p className="text-brand-500 text-center mb-12">{t.subtitulo}</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card overflow-hidden">
            <div className="p-4 border-b border-brand-100">
              <h2 className="font-display text-lg font-semibold text-brand-700">📍 El Alto</h2>
            </div>
            <iframe
              title="El Alto map"
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
              title="Tarija map"
              src="https://www.google.com/maps?q=Tarija,+Bolivia&output=embed"
              className="w-full h-80 border-0"
              loading="lazy"
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <a href={wa} target="_blank" rel="noreferrer" className="btn-whatsapp">
            {t.consultar}
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}

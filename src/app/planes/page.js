'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useIdioma } from '@/lib/idioma';

const PLANES_EL_ALTO = [
  { nombre: 'Comunal', velocidad: '20 Mbps', precio: 100 },
  { nombre: 'Básico', velocidad: '48 Mbps', precio: 150 },
  { nombre: 'Hogar', velocidad: '60 Mbps', precio: 200 },
  { nombre: 'Plus', velocidad: '90 Mbps', precio: 300 },
  { nombre: 'Corporativo', velocidad: '100 Mbps', precio: 500, frecuencia: 'Semestral' },
];

const PLANES_TARIJA = [
  { nombre: 'Churo', velocidad: '20/10 Mbps', precio: 130 },
  { nombre: 'Yapita', velocidad: '45/20 Mbps', precio: 150 },
  { nombre: 'Cumpa', velocidad: '70/35 Mbps', precio: 180 },
];

const T = {
  es: {
    titulo: 'Otros servicios: internet por fibra óptica',
    subtitulo: 'Además de nuestros servicios de infraestructura, también ofrecemos planes de internet residencial para El Alto y Tarija.',
    mes: 'mes',
    semestre: 'semestre',
    quieroPlan: 'Quiero este plan',
    waTexto: (plan) => `Hola, quiero contratar el plan ${plan}.`,
  },
  en: {
    titulo: 'Other services: fiber optic internet',
    subtitulo: 'In addition to our infrastructure services, we also offer residential internet plans for El Alto and Tarija.',
    mes: 'month',
    semestre: 'semester',
    quieroPlan: 'I want this plan',
    waTexto: (plan) => `Hi, I would like to sign up for the ${plan} plan.`,
  },
};

function TarjetaPlan({ plan, t }) {
  return (
    <div className="card p-6 flex flex-col">
      <h3 className="font-display text-xl font-bold text-brand-800">{plan.nombre}</h3>
      <p className="text-brand-500 text-sm mb-4">{plan.velocidad}</p>
      <div className="text-3xl font-bold text-brand-700 mb-1">
        Bs {plan.precio}
        <span className="text-sm font-normal text-brand-400"> /{plan.frecuencia === 'Semestral' ? t.semestre : t.mes}</span>
      </div>
      <a
        href={`https://wa.me/59171537257?text=${encodeURIComponent(t.waTexto(plan.nombre))}`}
        target="_blank"
        rel="noreferrer"
        className="btn-primary text-center mt-4"
      >
        {t.quieroPlan}
      </a>
    </div>
  );
}

export default function PlanesPage() {
  const { lang } = useIdioma();
  const t = T[lang];

  return (
    <>
      <Header />
      <section className="section py-16">
        <h1 className="font-display text-3xl font-bold text-brand-800 mb-2 text-center">{t.titulo}</h1>
        <p className="text-brand-500 text-center mb-12">{t.subtitulo}</p>

        <h2 className="font-display text-xl font-semibold text-brand-700 mb-4">📍 El Alto</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-12">
          {PLANES_EL_ALTO.map((p) => (
            <TarjetaPlan key={p.nombre} plan={p} t={t} />
          ))}
        </div>

        <h2 className="font-display text-xl font-semibold text-brand-700 mb-4">📍 Tarija</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {PLANES_TARIJA.map((p) => (
            <TarjetaPlan key={p.nombre} plan={p} t={t} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

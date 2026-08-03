'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useIdioma } from '@/lib/idioma';

function formatBs(n) {
  return `Bs ${Number(n || 0).toFixed(0)}`;
}

const T = {
  es: {
    titulo: 'Consulta tu cuenta',
    subtitulo: 'Ingresa tu ID de cliente y tu nombre completo tal como está registrado.',
    idLabel: 'ID de cliente',
    idPlaceholder: 'Ej: CSB00398',
    nombreLabel: 'Nombre completo',
    nombrePlaceholder: 'Como aparece en tu contrato',
    consultando: 'Consultando…',
    consultar: 'Consultar',
    errorGenerico: 'Ocurrió un error, intenta de nuevo.',
    errorConexion: 'No se pudo conectar. Intenta de nuevo en un momento.',
    hola: (nombre) => `Hola, ${nombre} 👋`,
    ciudad: 'Ciudad',
    plan: 'Plan',
    precio: 'Precio',
    estadoServicio: 'Estado del servicio',
    activo: 'Activo',
    inactivo: 'Inactivo',
    situacion: 'Situación de pago',
    alDia: '✅ Al día',
    vencido: '⚠️ Vencido',
    vence: 'Vence',
    sinPagos: '— (aún no hay pagos registrados)',
    pagarServicio: '📲 Quiero pagar mi servicio',
    waTexto: (nombre) => `Hola, soy ${nombre}, quiero pagar mi servicio.`,
  },
  en: {
    titulo: 'Check your account',
    subtitulo: 'Enter your client ID and your full name as registered.',
    idLabel: 'Client ID',
    idPlaceholder: 'e.g: CSB00398',
    nombreLabel: 'Full name',
    nombrePlaceholder: 'As it appears on your contract',
    consultando: 'Checking…',
    consultar: 'Check',
    errorGenerico: 'An error occurred, please try again.',
    errorConexion: 'Could not connect. Please try again in a moment.',
    hola: (nombre) => `Hi, ${nombre} 👋`,
    ciudad: 'City',
    plan: 'Plan',
    precio: 'Price',
    estadoServicio: 'Service status',
    activo: 'Active',
    inactivo: 'Inactive',
    situacion: 'Payment status',
    alDia: '✅ Up to date',
    vencido: '⚠️ Overdue',
    vence: 'Due',
    sinPagos: '— (no payments registered yet)',
    pagarServicio: '📲 I want to pay my bill',
    waTexto: (nombre) => `Hi, I'm ${nombre}, I want to pay my bill.`,
  },
};

export default function ConsultaPage() {
  const { lang } = useIdioma();
  const t = T[lang];
  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const [cargando, setCargando] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  async function consultar(e) {
    e.preventDefault();
    setError('');
    setResultado(null);
    setCargando(true);
    try {
      const res = await fetch('/api/consulta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ codigo, nombre }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || t.errorGenerico);
      } else {
        setResultado(data);
      }
    } catch {
      setError(t.errorConexion);
    } finally {
      setCargando(false);
    }
  }

  return (
    <>
      <Header />
      <section className="section py-16 max-w-xl mx-auto">
        <h1 className="font-display text-3xl font-bold text-brand-800 mb-2 text-center">{t.titulo}</h1>
        <p className="text-brand-500 text-center mb-8">{t.subtitulo}</p>

        <form onSubmit={consultar} className="card p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-brand-600 mb-1">{t.idLabel}</label>
            <input
              className="input"
              placeholder={t.idPlaceholder}
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-600 mb-1">{t.nombreLabel}</label>
            <input
              className="input"
              placeholder={t.nombrePlaceholder}
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={cargando} className="btn-primary w-full">
            {cargando ? t.consultando : t.consultar}
          </button>
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
        </form>

        {resultado && (
          <div className="card p-6 mt-6">
            <h2 className="font-display text-xl font-bold text-brand-800 mb-4">
              {t.hola(resultado.nombre.split(' ')[0])}
            </h2>
            <dl className="grid grid-cols-2 gap-y-3 text-sm">
              <dt className="text-brand-500">{t.ciudad}</dt>
              <dd>{resultado.ciudad || 'El Alto'}</dd>
              <dt className="text-brand-500">{t.plan}</dt>
              <dd>{resultado.plan || '—'}</dd>
              <dt className="text-brand-500">{t.precio}</dt>
              <dd>{formatBs(resultado.precio)}</dd>
              <dt className="text-brand-500">{t.estadoServicio}</dt>
              <dd>{resultado.activo ? t.activo : t.inactivo}</dd>
              <dt className="text-brand-500">{t.situacion}</dt>
              <dd>
                {resultado.estado === 'Al día' ? (
                  <span className="text-green-700 font-semibold">{t.alDia}</span>
                ) : (
                  <span className="text-red-600 font-semibold">{t.vencido}</span>
                )}
              </dd>
              <dt className="text-brand-500">{t.vence}</dt>
              <dd>
                {resultado.fecha_vencimiento
                  ? new Date(resultado.fecha_vencimiento + 'T00:00:00').toLocaleDateString(
                      lang === 'en' ? 'en-US' : 'es-BO'
                    )
                  : t.sinPagos}
              </dd>
            </dl>
            <a
              href={`https://wa.me/59171537257?text=${encodeURIComponent(t.waTexto(resultado.nombre))}`}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp w-full justify-center mt-6"
            >
              {t.pagarServicio}
            </a>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

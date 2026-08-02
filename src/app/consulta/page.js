'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function formatBs(n) {
  return `Bs ${Number(n || 0).toFixed(0)}`;
}

export default function ConsultaPage() {
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
        setError(data.error || 'Ocurrió un error, intenta de nuevo.');
      } else {
        setResultado(data);
      }
    } catch {
      setError('No se pudo conectar. Intenta de nuevo en un momento.');
    } finally {
      setCargando(false);
    }
  }

  return (
    <>
      <Header />
      <section className="section py-16 max-w-xl mx-auto">
        <h1 className="font-display text-3xl font-bold text-brand-800 mb-2 text-center">
          Consulta tu cuenta
        </h1>
        <p className="text-brand-500 text-center mb-8">
          Ingresa tu ID de cliente y tu nombre completo tal como está registrado.
        </p>

        <form onSubmit={consultar} className="card p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-brand-600 mb-1">ID de cliente</label>
            <input
              className="input"
              placeholder="Ej: CSB00398"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-600 mb-1">Nombre completo</label>
            <input
              className="input"
              placeholder="Como aparece en tu contrato"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={cargando} className="btn-primary w-full">
            {cargando ? 'Consultando…' : 'Consultar'}
          </button>
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
        </form>

        {resultado && (
          <div className="card p-6 mt-6">
            <h2 className="font-display text-xl font-bold text-brand-800 mb-4">
              Hola, {resultado.nombre.split(' ')[0]} 👋
            </h2>
            <dl className="grid grid-cols-2 gap-y-3 text-sm">
              <dt className="text-brand-500">Ciudad</dt>
              <dd>{resultado.ciudad || 'El Alto'}</dd>
              <dt className="text-brand-500">Plan</dt>
              <dd>{resultado.plan || '—'}</dd>
              <dt className="text-brand-500">Precio</dt>
              <dd>{formatBs(resultado.precio)}</dd>
              <dt className="text-brand-500">Estado del servicio</dt>
              <dd>{resultado.activo ? 'Activo' : 'Inactivo'}</dd>
              <dt className="text-brand-500">Situación de pago</dt>
              <dd>
                {resultado.estado === 'Al día' ? (
                  <span className="text-green-700 font-semibold">✅ Al día</span>
                ) : (
                  <span className="text-red-600 font-semibold">⚠️ Vencido</span>
                )}
              </dd>
              <dt className="text-brand-500">Vence</dt>
              <dd>
                {resultado.fecha_vencimiento
                  ? new Date(resultado.fecha_vencimiento + 'T00:00:00').toLocaleDateString('es-BO')
                  : '— (aún no hay pagos registrados)'}
              </dd>
            </dl>
            
              href={`https://wa.me/59171537257?text=${encodeURIComponent(`Hola, soy ${resultado.nombre}, quiero pagar mi servicio.`)}`}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp w-full justify-center mt-6"
            >
              📲 Quiero pagar mi servicio
            </a>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

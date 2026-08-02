import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactoPage() {
  const wa1 = 'https://wa.me/59171537257?text=' + encodeURIComponent('Hola, quiero más información.');
  const wa2 = 'https://wa.me/59177766262?text=' + encodeURIComponent('Hola, quiero más información.');

  return (
    <>
      <Header />
      <section className="section py-16">
        <h1 className="font-display text-3xl font-bold text-brand-800 mb-2 text-center">
          Contáctanos
        </h1>
        <p className="text-brand-500 text-center mb-12">
          Estamos para ayudarte. Escríbenos por WhatsApp o realiza tu pago con los datos de abajo.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-6">
            <h2 className="font-display text-xl font-semibold text-brand-700 mb-4">💬 WhatsApp</h2>
            <div className="space-y-3">
              <a href={wa1} target="_blank" rel="noreferrer" className="btn-whatsapp w-full justify-center">
                71537257
              </a>
              <a href={wa2} target="_blank" rel="noreferrer" className="btn-whatsapp w-full justify-center">
                77766262
              </a>
            </div>
          </div>

          <div className="card p-6">
            <h2 className="font-display text-xl font-semibold text-brand-700 mb-4">💳 Datos para pago</h2>
            <dl className="text-sm space-y-3">
              <div>
                <dt className="text-brand-500">Banco</dt>
                <dd className="font-semibold text-brand-800">BancoSol</dd>
              </div>
              <div>
                <dt className="text-brand-500">Cuenta</dt>
                <dd className="font-semibold text-brand-800">N° 507736-000-001 — Jaime Antonio Arriaza Prieto</dd>
              </div>
            </dl>
            <p className="text-xs text-brand-400 mt-4">
              Después de tu pago, envíanos el comprobante por WhatsApp para registrarlo en tu cuenta.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

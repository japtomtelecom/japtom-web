import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactoPage() {
  const wa1 = 'https://wa.me/59171537257?text=' + encodeURIComponent('Hola, quiero más información.');
  const wa2 = 'https://wa.me/59177766262?text=' + encodeURIComponent('Hola, quiero más información.');
  const waPago = 'https://wa.me/59171537257?text=' + encodeURIComponent('Hola, quiero los datos para hacer mi pago.');

  return (
    <>
      <Header />
      <section className="section py-16">
        <h1 className="font-display text-3xl font-bold text-brand-800 mb-2 text-center">
          Contáctanos
        </h1>
        <p className="text-brand-500 text-center mb-12">
          Estamos para ayudarte. Escríbenos por WhatsApp para más información o para recibir los
          datos de pago.
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
            <h2 className="font-display text-xl font-semibold text-brand-700 mb-4">💳 Pagos</h2>
            <p className="text-sm text-brand-500 mb-4">
              Aceptamos pagos por transferencia bancaria (BancoSol). Por seguridad, no publicamos
              el número de cuenta aquí — escríbenos por WhatsApp y te lo enviamos al instante.
            </p>
            <a href={waPago} target="_blank" rel="noreferrer" className="btn-whatsapp w-full justify-center">
              📲 Solicitar datos de pago
            </a>
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
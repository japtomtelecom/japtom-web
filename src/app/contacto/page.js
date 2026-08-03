'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useIdioma } from '@/lib/idioma';

const T = {
  es: {
    titulo: 'Contáctanos',
    subtitulo: 'Estamos para ayudarte. Escríbenos por WhatsApp o correo para más información o para recibir los datos de pago.',
    whatsapp: '💬 WhatsApp',
    correo: '✉️ Correo',
    telefono: '📞 Teléfono (EE. UU.)',
    oficina: '📍 Oficina (EE. UU.)',
    pagos: '💳 Pagos',
    pagosDesc: 'Aceptamos pagos por transferencia bancaria (BancoSol). Por seguridad, no publicamos el número de cuenta aquí — escríbenos por WhatsApp y te lo enviamos al instante.',
    solicitarPago: '📲 Solicitar datos de pago',
    despuesPago: 'Después de tu pago, envíanos el comprobante por WhatsApp para registrarlo en tu cuenta.',
    waTexto: 'Hola, quiero más información.',
    waPagoTexto: 'Hola, quiero los datos para hacer mi pago.',
  },
  en: {
    titulo: 'Contact us',
    subtitulo: "We're here to help. Message us on WhatsApp or by email for more information or to receive payment details.",
    whatsapp: '💬 WhatsApp',
    correo: '✉️ Email',
    telefono: '📞 Phone (USA)',
    oficina: '📍 Office (USA)',
    pagos: '💳 Payments',
    pagosDesc: 'We accept bank transfers (BancoSol). For security, we do not publish the account number here — message us on WhatsApp and we will send it instantly.',
    solicitarPago: '📲 Request payment details',
    despuesPago: 'After your payment, send us the receipt via WhatsApp to register it on your account.',
    waTexto: 'Hello, I would like more information.',
    waPagoTexto: 'Hello, I would like the payment details.',
  },
};

export default function ContactoPage() {
  const { lang } = useIdioma();
  const t = T[lang];

  const wa1 = 'https://wa.me/59171537257?text=' + encodeURIComponent(t.waTexto);
  const wa2 = 'https://wa.me/59177766262?text=' + encodeURIComponent(t.waTexto);
  const wa3 = 'https://wa.me/16893063870?text=' + encodeURIComponent(t.waTexto);
  const waPago = 'https://wa.me/59171537257?text=' + encodeURIComponent(t.waPagoTexto);

  return (
    <>
      <Header />
      <section className="section py-16">
        <h1 className="font-display text-3xl font-bold text-brand-800 mb-2 text-center">{t.titulo}</h1>
        <p className="text-brand-500 text-center mb-12">{t.subtitulo}</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-6">
            <h2 className="font-display text-xl font-semibold text-brand-700 mb-4">{t.whatsapp}</h2>
            <div className="space-y-3">
              <a href={wa1} target="_blank" rel="noreferrer" className="btn-whatsapp w-full justify-center">
                71537257
              </a>
              <a href={wa2} target="_blank" rel="noreferrer" className="btn-whatsapp w-full justify-center">
                77766262
              </a>
              <a href={wa3} target="_blank" rel="noreferrer" className="btn-whatsapp w-full justify-center">
                +1 (689) 306-3870 (EE. UU. / USA)
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-brand-100">
              <h2 className="font-display text-xl font-semibold text-brand-700 mb-3">{t.correo}</h2>
              <a href="mailto:gerencia@japtomtelecom.com" className="text-accent-500 font-semibold hover:underline">
                gerencia@japtomtelecom.com
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-brand-100">
              <h2 className="font-display text-xl font-semibold text-brand-700 mb-3">{t.oficina}</h2>
              <p className="text-brand-600">
                8751 Bella Notte
                <br />
                Orlando, FL 32837
              </p>
            </div>
          </div>

          <div className="card p-6">
            <h2 className="font-display text-xl font-semibold text-brand-700 mb-4">{t.pagos}</h2>
            <p className="text-sm text-brand-500 mb-4">{t.pagosDesc}</p>
            <a href={waPago} target="_blank" rel="noreferrer" className="btn-whatsapp w-full justify-center">
              {t.solicitarPago}
            </a>
            <p className="text-xs text-brand-400 mt-4">{t.despuesPago}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

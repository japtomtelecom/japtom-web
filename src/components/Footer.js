export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100 mt-16">
      <div className="section py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-display text-lg font-bold text-white mb-2">JapTom Telecom</div>
          <p className="text-brand-200">
            Internet por fibra óptica en El Alto y Tarija. Soluciones tecnológicas con la mejor
            velocidad.
          </p>
        </div>
        <div>
          <div className="font-semibold text-white mb-2">Enlaces</div>
          <ul className="space-y-1 text-brand-200">
            <li><a href="/servicios" className="hover:text-white">Servicios</a></li>
            <li><a href="/planes" className="hover:text-white">Otros servicios</a></li>
            <li><a href="/cobertura" className="hover:text-white">Cobertura</a></li>
            <li><a href="/consulta" className="hover:text-white">Consulta tu cuenta</a></li>
            <li><a href="/contacto" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white mb-2">Contacto</div>
          <p className="text-brand-200">WhatsApp: 71537257 · 77766262</p>
        </div>
      </div>
      <div className="text-center text-xs text-brand-300 py-4 border-t border-brand-700">
        © {new Date().getFullYear()} JapTom Telecom. Todos los derechos reservados.
      </div>
    </footer>
  );
}
'use client';

import { useEffect, useState } from 'react';

// Hook simple de idioma: guarda la elección en localStorage y recarga la
// página al cambiar, para que todo el contenido se traduzca de una vez.
export function useIdioma() {
  const [lang, setLangState] = useState('es');

  useEffect(() => {
    const guardado = typeof window !== 'undefined' ? localStorage.getItem('idioma') : null;
    if (guardado === 'en') setLangState('en');
  }, []);

  function cambiarIdioma(nuevo) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('idioma', nuevo);
      window.location.reload();
    }
  }

  return { lang, cambiarIdioma };
}

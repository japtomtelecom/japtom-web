import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

function normalizar(texto) {
  return (texto || '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export async function POST(request) {
  const { codigo, nombre } = await request.json();

  if (!codigo || !nombre) {
    return Response.json({ error: 'Ingresa tu ID de cliente y tu nombre completo.' }, { status: 400 });
  }

  const { data: cliente, error } = await supabaseAdmin
    .from('v_clientes_estado')
    .select('nombre, plan, precio, frecuencia, estado, cubierto_hasta, activo, ciudad')
    .eq('codigo', codigo.trim().toUpperCase())
    .single();

  if (error || !cliente) {
    return Response.json({ error: 'No se encontró ningún cliente con ese ID.' }, { status: 404 });
  }

  const nombreReal = normalizar(cliente.nombre);
  const nombreIngresado = normalizar(nombre);
  const coincide = nombreIngresado
    .split(' ')
    .filter(Boolean)
    .every((palabra) => nombreReal.includes(palabra));

  if (!coincide) {
    return Response.json(
      { error: 'El nombre no coincide con el registrado para ese ID de cliente.' },
      { status: 403 }
    );
  }

  return Response.json({
    ok: true,
    nombre: cliente.nombre,
    ciudad: cliente.ciudad,
    plan: cliente.plan,
    precio: cliente.precio,
    frecuencia: cliente.frecuencia,
    activo: cliente.activo,
    estado: cliente.estado,
    fecha_vencimiento: cliente.cubierto_hasta,
  });
}
export const WHATSAPP = '56977576836';
export const wa = (msg = 'Hola! Quiero agendar una hora en Lara Hair Club') =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
export const INSTAGRAM = 'https://www.instagram.com/larahairclub/';
export const DIRECCION = 'Av. Guillermo Ulriksen 2965, local 1, La Serena';
export const MAPS = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Lara Hair Club, Av. Guillermo Ulriksen 2965, La Serena');

export const precios = [
  { categoria: 'Rubios y color', items: [
    ['Balayage', 'desde 8 h', 175990],
    ['Babylights', 'desde 6 h', 175990],
    ['Balayage invertido', 'desde 2 h', 150000],
    ['Contorno', 'desde 6 h', 85990],
    ['Color global', 'desde 2 h', 85990],
    ['Retoque de raíz', 'desde 2 h', 42990],
    ['Baño de color', 'desde 1 h 30 min', 42990],
  ]},
  { categoria: 'Tratamientos', items: [
    ['Tratamiento K18', 'desde 1 h', 59990],
    ['Tratamiento Premiere', 'desde 1 h', 59990],
    ['Tratamiento Olaplex', 'desde 1 h', 55990],
    ['Tratamiento Kérastase', 'desde 1 h', 50990],
    ['Botox capilar', 'desde 2 h', 49990],
    ['Fusio Dose', 'desde 1 h', 39990],
    ['Tratamiento L\'Oréal', 'desde 1 h', 15990],
    ['Alisado', 'desde 3 h', 89990],
  ]},
  { categoria: 'Cortes y peinados', items: [
    ['Peinado', 'desde 2 h', 35990],
    ['Corte elaborado', '1 h', 25990],
    ['Corte de puntas', '45 min', 20990],
    ['Lavado y brushing', '1 h', 20990],
    ['Corte de chasquilla', '30 min', 12990],
  ]},
  { categoria: 'Evaluaciones', items: [
    ['Evaluación de tratamiento', '15 min', null],
    ['Prueba de mechón', '30 min', null],
  ]},
];
export const clp = (n) => n == null ? 'Consultar' : '$' + n.toLocaleString('es-CL');

// Agenda en línea (AgendaPro): todos los botones de "Agendar" llevan aquí
export const AGENDA = 'https://larahairclub.site.agendapro.com/cl/sucursal/354563';

// Enlace para dejar una reseña en Google
export const RESENA = 'https://g.page/r/CU4DLHEmwsq_EAI/review';

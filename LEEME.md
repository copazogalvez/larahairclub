# Lara Hair Club · sitio web

Proyecto en Astro. Para trabajar en tu computador:

    npm install
    npm run dev      # vista previa en http://localhost:4321
    npm run build    # genera la carpeta dist

Datos editables (WhatsApp, dirección, precios, enlace de AgendaPro y de reseñas): `src/data/sitio.js`.
Textos y secciones: `src/pages/index.astro`. Estilos: `src/styles/global.css`. Fotos: `public/img`.

## Publicar en Vercel
1. Sube esta carpeta a un repositorio nuevo de GitHub (sin `node_modules` ni `dist`).
2. En Vercel: Add New → Project → importa el repositorio. Detecta Astro solo; toca Deploy.
3. Dominio: Settings → Domains → agrega `larahairclub.com` y `www.larahairclub.com`.
   Donde esté administrado el dominio, crea los registros que Vercel indique
   (normalmente A `@` → 76.76.21.21 y CNAME `www` → cname.vercel-dns.com).

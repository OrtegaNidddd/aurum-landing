## AURUM Landing

Landing page para el SaaS de gestión de talleres de joyería.

### Requisitos
- Node.js 20+
- npm (o yarn/pnpm/bun)

### Scripts
- `npm run dev` – entorno local en http://localhost:3000
- `npm run build` – build de producción
- `npm start` – sirve el build
- `npm run lint` – linting

### Configuración rápida
1) Instalar deps: `npm install`
2) Ejecutar local: `npm run dev`
3) Editar contenido principal en `app/page.tsx` y componentes en `components/landing/`

### Dominio y SEO
- Dominio actual configurado en `app/layout.tsx`: `https://aurumapp.site` (ajusta si cambia).
- Metadatos y OG listos; agrega tu código de verificación de Google en `metadata.verification.google`.
- Sitemap y robots generados en runtime: `app/sitemap.ts`, `app/robots.ts`.
- Structured data JSON-LD en `lib/structured-data.ts` se inyecta en el layout.

### Íconos y assets
Coloca estos archivos en `public/` (algunos ya existen):
- `favicon.ico`
- `icon-192x192.png`
- `icon-512x512.png`
- `apple-touch-icon.png` (180x180) — recomendado para iOS
- `og-image.png` (1200x630) — imagen para compartir

### WhatsApp CTAs
Los botones "Solicitar Demo" y "Contactar" abren WhatsApp al +573208396909 con mensajes prellenados. Ajusta el número o texto en:
- `components/landing/header.tsx`
- `components/landing/hero-section.tsx`
- `components/landing/cta-section.tsx`
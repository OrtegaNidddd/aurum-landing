import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AURUM - Gestión de Talleres de Joyería',
    short_name: 'AURUM',
    description: 'Sistema SaaS para la gestión integral de talleres de joyería: pedidos, diseños, fabricaciones, entregas y control de pagos.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0E14',
    theme_color: '#D4AF37',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

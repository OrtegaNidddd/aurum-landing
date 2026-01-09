import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { organizationSchema, webPageSchema, breadcrumbSchema } from "@/lib/structured-data"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const siteUrl = "https://aurumapp.site"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AURUM - Gestión Profesional de Talleres de Joyería",
    template: "%s | AURUM",
  },
  description:
    "Sistema SaaS para la gestión integral de talleres de joyería: pedidos, diseños, fabricaciones, entregas, clientes y control de pagos. Control total, trazabilidad y eficiencia operativa.",
  keywords: [
    "gestión de joyería",
    "software para joyería",
    "taller de joyería",
    "ERP joyería",
    "gestión de pedidos joyería",
    "fabricación joyería",
    "SaaS joyería",
    "sistema gestión talleres",
    "trazabilidad joyería",
    "control producción joyería",
    "software taller joyero",
    "gestión orfebrería",
  ],
  authors: [{ name: "AURUM", url: siteUrl }],
  creator: "AURUM",
  publisher: "AURUM",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icon-192x192.png", // ideal: agregar apple-touch-icon.png (180x180)
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    title: "AURUM - Gestión Profesional de Talleres de Joyería",
    description:
      "Sistema SaaS para la gestión integral de talleres de joyería: pedidos, diseños, fabricaciones, entregas, clientes y control de pagos. Control total, trazabilidad y eficiencia.",
    siteName: "AURUM",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "AURUM - Sistema de Gestión para Talleres de Joyería",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AURUM - Gestión Profesional de Talleres de Joyería",
    description:
      "Sistema SaaS para la gestión integral de talleres de joyería. Control total, trazabilidad y eficiencia operativa.",
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@aurum",
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "tu-codigo-google-search-console", // Agregar código de verificación
    // yandex: "tu-codigo-yandex",
    // bing: "tu-codigo-bing",
  },
}

export const viewport: Viewport = {
  themeColor: "#D4AF37",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

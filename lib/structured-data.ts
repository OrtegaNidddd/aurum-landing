export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AURUM",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, PWA",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "50",
  },
  description:
    "Sistema SaaS para la gestión integral de talleres de joyería: pedidos, cotizaciones, abonos con facturas automáticas por email, diseños versionados, fabricaciones, entregas y control completo de clientes.",
  screenshot: "https://aurumapp.site/og-image.png",
  provider: {
    "@type": "Organization",
    name: "AURUM",
    url: "https://aurumapp.site",
    logo: "https://aurumapp.site/icon-512x512.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+57-320-839-6909",
      contactType: "Customer Service",
      availableLanguage: ["Spanish"],
    },
    sameAs: [
      // "https://facebook.com/aurum",
      // "https://instagram.com/aurum",
      // "https://linkedin.com/company/aurum",
    ],
  },
}

export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AURUM - Gestión Profesional de Talleres de Joyería",
  description:
    "Sistema SaaS para la gestión integral de talleres de joyería: pedidos, cotizaciones, abonos con facturas automáticas por email, diseños versionados, fabricaciones, entregas y control completo de clientes.",
  url: "https://aurumapp.site",
  inLanguage: "es-ES",
  publisher: {
    "@type": "Organization",
    name: "AURUM",
    logo: {
      "@type": "ImageObject",
      url: "https://aurumapp.site/icon-512x512.png",
    },
  },
}

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://aurumapp.site",
    },
  ],
}

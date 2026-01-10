import { Zap, Lock, Smartphone, Globe, FileJson, Activity, Server } from "lucide-react"

const techBenefits = [
  {
    icon: Zap,
    title: "Alto Rendimiento",
    description: "Backend Laravel 12 optimizado y frontend React 19/Vite para experiencia fluida.",
  },
  {
    icon: Lock,
    title: "Seguridad Empresarial",
    description: "Autenticación Sanctum, roles granulares y auditoría completa en cada cambio.",
  },
  {
    icon: Smartphone,
    title: "PWA Instalable",
    description: "Instala AURUM como aplicación en cualquier dispositivo móvil o escritorio.",
  },
  {
    icon: Globe,
    title: "Acceso Web",
    description: "Sin instalaciones. Accede desde cualquier navegador moderno.",
  },
  {
    icon: FileJson,
    title: "API Documentada",
    description: "Documentación OpenAPI/Swagger completa para integraciones personalizadas.",
  },
  {
    icon: Activity,
    title: "Monitoreo en Tiempo Real",
    description: "Dashboard con métricas actualizadas y exportación de reportes.",
  },
  {
    icon: Server,
    title: "Emails por HTTPS",
    description: "Envía facturas por Brevo API (puerto 443), ideal para VPS sin SMTP abierto.",
  },
]

const techStack = [
  { name: "Laravel 12", category: "Backend" },
  { name: "React 19 + Vite 7", category: "Frontend" },
  { name: "TailwindCSS 4", category: "Estilos" },
  { name: "Sanctum", category: "Auth" },
  { name: "MySQL 8", category: "Base de Datos" },
  { name: "Brevo API", category: "Emails" },
  { name: "PWA", category: "Mobile" },
]

export function TechnologySection() {
  return (
    <section id="tecnologia" className="py-20 lg:py-28" style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance" style={{ color: "var(--color-text-main)" }}>
            Tecnología <span style={{ color: "var(--aurum-gold)" }}>moderna</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--color-text-muted)" }}>
            Construido con las mejores herramientas para garantizar rendimiento, seguridad y escalabilidad.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {techBenefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border"
              style={{
                backgroundColor: "var(--color-surface-alt)",
                borderColor: "var(--color-border-soft)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "var(--color-accent-soft)" }}
              >
                <benefit.icon size={20} style={{ color: "var(--aurum-gold)" }} />
              </div>
              <h3 className="text-base font-semibold mb-2" style={{ color: "var(--color-text-main)" }}>
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div
          className="p-8 rounded-2xl border"
          style={{
            backgroundColor: "var(--color-sidebar-bg)",
            borderColor: "var(--color-border-soft)",
          }}
        >
          <h3 className="text-center text-lg font-semibold mb-6" style={{ color: "var(--color-text-main)" }}>
            Stack Tecnológico
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-lg border"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border-soft)",
                }}
              >
                <span className="text-sm font-medium" style={{ color: "var(--aurum-gold)" }}>
                  {tech.name}
                </span>
                <span className="text-xs ml-2" style={{ color: "var(--color-text-muted)" }}>
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

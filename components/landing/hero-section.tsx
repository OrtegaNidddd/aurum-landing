import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden"
      style={{ backgroundColor: "var(--color-sidebar-bg)" }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, var(--aurum-gold) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, var(--aurum-logo) 0%, transparent 50%)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8"
            style={{
              backgroundColor: "var(--color-accent-soft)",
              color: "var(--aurum-gold)",
            }}
          >
            <Sparkles size={16} />
            <span>Sistema de Gestión para Joyerías</span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6"
            style={{ color: "var(--color-text-main)" }}
          >
            Gestión <span style={{ color: "var(--aurum-gold)" }}>Profesional</span> de Talleres de Joyería
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10 text-balance"
            style={{ color: "var(--color-text-muted)" }}
          >
            Control de pedidos, cotizaciones, abonos y facturas automáticas por email. Flujo completo de diseño,
            fabricación, calidad y entrega con trazabilidad y auditoría.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center">
            <Button
              size="lg"
              className="text-base font-medium px-8 py-6 gap-2"
              style={{
                backgroundColor: "var(--aurum-gold)",
                color: "var(--color-on-primary)",
              }}
              asChild
            >
              <a href="https://wa.me/573208396909?text=Hola,%20desearia%20solicitar%20una%20demo%20de%20Aurum" target="_blank" rel="noopener noreferrer">
                Solicitar Demo
                <ArrowRight size={18} />
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t"
            style={{ borderColor: "var(--color-border-soft)" }}
          >
            {[
              { value: "5", label: "Estados del Pedido" },
              { value: "3", label: "Roles Operativos" },
              { value: "Auto", label: "Facturas por Email" },
              { value: "PWA", label: "Instalable en Móvil" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: "var(--aurum-gold)" }}>
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

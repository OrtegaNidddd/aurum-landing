import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--color-sidebar-bg)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative p-8 sm:p-12 lg:p-16 rounded-3xl overflow-hidden"
          style={{ backgroundColor: "var(--color-accent-soft)" }}
        >
          {/* Background decoration */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: "var(--aurum-gold)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl opacity-10"
            style={{ backgroundColor: "var(--aurum-logo)" }}
          />

          <div className="relative text-center max-w-2xl mx-auto">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4 text-balance"
              style={{ color: "var(--color-text-main)" }}
            >
              Transforma la gestión de <span style={{ color: "var(--aurum-gold)" }}>tu taller</span>
            </h2>
            <p className="text-lg mb-8" style={{ color: "var(--color-text-muted)" }}>
              Únete a los talleres de joyería que ya confían en AURUM para optimizar sus operaciones.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              <Button
                size="lg"
                variant="outline"
                className="text-base font-medium px-8 py-6 gap-2 bg-transparent"
                style={{
                  borderColor: "var(--color-border-strong)",
                  color: "var(--color-text-main)",
                  backgroundColor: "transparent",
                }}
                asChild
              >
                <a href="https://wa.me/573208396909?text=Hola%20desearia%20informacion%20sobre%20Aurum" target="_blank" rel="noopener noreferrer">
                  <Mail size={18} />
                  Contactar
                </a>
              </Button>
            </div>

            <p className="text-sm mt-6" style={{ color: "var(--color-text-muted)" }}>
              Demo personalizada sin compromiso • Soporte en español
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

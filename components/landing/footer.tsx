import { AurumLogo } from "./aurum-logo"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="py-12 border-t"
      style={{
        backgroundColor: "var(--color-sidebar-bg)",
        borderColor: "var(--color-border-soft)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <AurumLogo size={32} />
            <span className="text-lg font-semibold tracking-wide" style={{ color: "var(--aurum-gold)" }}>
              AURUM
            </span>
          </div>

          {/* Tagline */}
          <p className="text-center text-sm max-w-md" style={{ color: "var(--color-text-muted)" }}>
            Gestión profesional de talleres de joyería. Control, trazabilidad y eficiencia en cada pieza.
          </p>

          {/* Divider */}
          <div className="w-24 h-px" style={{ backgroundColor: "var(--color-border-soft)" }} />

          {/* Copyright */}
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            © {currentYear} AURUM. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

import { ClipboardList, Palette, Hammer, Truck, CreditCard, BarChart3, Users, Shield, Mail, FileText } from "lucide-react"

const features = [
  {
    icon: ClipboardList,
    title: "Pedidos y Clientes",
    description:
      "CRUD completo con búsqueda por nombre, cédula y email. Cada pedido arranca en estado 'Creado' con historial.",
  },
  {
    icon: FileText,
    title: "Cotizaciones e Inventario",
    description: "Crea cotizaciones con validaciones de flujo y controla materiales clave (oro, plata, piedras).",
  },
  {
    icon: Mail,
    title: "Facturas Automáticas",
    description:
      "Envío de PDF por email (Brevo API) al crear pedidos con cotización y al registrar abonos. Exporta PDF/Excel.",
  },
  {
    icon: CreditCard,
    title: "Abonos y Saldos",
    description:
      "Registra pagos parciales, calcula saldo en tiempo real y genera facturas informativas para cada abono.",
  },
  {
    icon: Palette,
    title: "Diseños Versionados",
    description:
      "Almacena archivos por pedido, versiona automáticamente y mantiene acceso público controlado desde storage.",
  },
  {
    icon: Hammer,
    title: "Fabricación Controlada",
    description:
      "Asigna maestros, gestiona estados 'En Progreso' y 'Completada' y mueve el pedido a 'Calidad' al finalizar.",
  },
  {
    icon: Truck,
    title: "Entregas con Auditoría",
    description: "Registra responsable y fecha; el pedido pasa a 'Entregado' solo si estaba en 'Calidad'.",
  },
  {
    icon: Shield,
    title: "Roles y Auditoría",
    description:
      "Roles Admin, Asesor y Maestro con abilities Sanctum. Bitácora de estados, cotizaciones, fabricaciones y entregas.",
  },
  {
    icon: BarChart3,
    title: "Dashboard y Reportes",
    description:
      "KPIs en tiempo real y exportes de dashboard en PDF/Excel. Monitoreo de pedidos, abonos y fabricación pendiente.",
  },
  {
    icon: Users,
    title: "PWA y Accesibilidad",
    description: "Aplicación web + PWA instalable, usable desde navegador o móvil con autenticación por tokens.",
  },
]

export function Features() {
  return (
    <section id="funcionalidades" className="py-20 lg:py-28" style={{ backgroundColor: "var(--color-sidebar-bg)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance" style={{ color: "var(--color-text-main)" }}>
            Todo lo que necesitas para <span style={{ color: "var(--aurum-gold)" }}>tu taller</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--color-text-muted)" }}>
            Funcionalidades diseñadas específicamente para la gestión de joyerías profesionales.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border-soft)",
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "var(--color-accent-soft)" }}
              >
                <feature.icon size={24} style={{ color: "var(--aurum-gold)" }} />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--color-text-main)" }}>
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

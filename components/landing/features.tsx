import { ClipboardList, Palette, Hammer, Truck, CreditCard, BarChart3, Users, Shield } from "lucide-react"

const features = [
  {
    icon: ClipboardList,
    title: "Gestión de Pedidos",
    description:
      "Control completo del ciclo de vida de cada pedido con estados claros y auditoría automática de cambios.",
  },
  {
    icon: Palette,
    title: "Diseños Versionados",
    description:
      "Almacena y versiona los diseños de cada pieza. Cada actualización genera una nueva versión con historial.",
  },
  {
    icon: Hammer,
    title: "Control de Fabricación",
    description: "Asigna maestros joyeros, rastrea el progreso y registra la fecha de finalización de cada pieza.",
  },
  {
    icon: Truck,
    title: "Registro de Entregas",
    description: "Documenta cada entrega con responsable y fecha. El pedido se marca automáticamente como entregado.",
  },
  {
    icon: CreditCard,
    title: "Abonos y Saldos",
    description:
      "Registra pagos parciales con método y notas. Calcula automáticamente el saldo pendiente de cada pedido.",
  },
  {
    icon: BarChart3,
    title: "Dashboard con KPIs",
    description:
      "Visualiza métricas clave: pedidos activos, ingresos, fabricaciones pendientes y exporta reportes en PDF o Excel.",
  },
  {
    icon: Users,
    title: "Multi-rol",
    description: "Tres roles definidos: Admin, Asesor y Maestro. Cada uno con permisos específicos.",
  },
  {
    icon: Shield,
    title: "Auditoría Completa",
    description:
      "Registro automático de cambios de estado, cotizaciones, fabricaciones y entregas con trazabilidad total.",
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

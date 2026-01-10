import { ArrowRight } from "lucide-react"

const workflowSteps = [
  {
    state: "Creado",
    title: "Pedido Creado",
    description:
      "El asesor registra cliente, descripción y cotización opcional. Se dispara factura PDF por email si hay cotización.",
    color: "var(--color-info)",
    bgColor: "var(--color-info-soft)",
  },
  {
    state: "Fabricación",
    title: "En Fabricación",
    description: "Se asigna un maestro joyero y se crea la orden de fabricación con fecha estimada.",
    color: "var(--color-warning)",
    bgColor: "var(--color-warning-soft)",
  },
  {
    state: "Calidad",
    title: "Control de Calidad",
    description: "La pieza terminada pasa a revisión antes de entrega; se audita cada cambio de estado.",
    color: "var(--aurum-gold)",
    bgColor: "var(--color-accent-soft)",
  },
  {
    state: "Entregado",
    title: "Entregado",
    description: "El pedido se registra como entregado con responsable y fecha; queda trazabilidad completa.",
    color: "var(--color-success)",
    bgColor: "var(--color-success-soft)",
  },
]

export function WorkflowSection() {
  return (
    <section id="flujo" className="py-20 lg:py-28" style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance" style={{ color: "var(--color-text-main)" }}>
            Flujo de trabajo <span style={{ color: "var(--aurum-gold)" }}>transparente</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--color-text-muted)" }}>
            Cada pedido sigue un ciclo claro con transiciones controladas y auditoría automática.
          </p>
        </div>

        {/* Desktop Flow */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between gap-4">
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex items-center flex-1">
                <div
                  className="flex-1 p-6 rounded-xl border"
                  style={{
                    backgroundColor: step.bgColor,
                    borderColor: "var(--color-border-soft)",
                  }}
                >
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                    style={{
                      backgroundColor: step.color,
                      color: "var(--color-sidebar-bg)",
                    }}
                  >
                    {step.state}
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--color-text-main)" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {step.description}
                  </p>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="px-2">
                    <ArrowRight size={24} style={{ color: "var(--color-border-strong)" }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Flow */}
        <div className="lg:hidden space-y-4">
          {workflowSteps.map((step, index) => (
            <div key={index} className="relative">
              <div
                className="p-6 rounded-xl border"
                style={{
                  backgroundColor: step.bgColor,
                  borderColor: "var(--color-border-soft)",
                }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      backgroundColor: step.color,
                      color: "var(--color-sidebar-bg)",
                    }}
                  >
                    {index + 1}
                  </div>
                  <div
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: step.color,
                      color: "var(--color-sidebar-bg)",
                    }}
                  >
                    {step.state}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--color-text-main)" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  {step.description}
                </p>
              </div>
              {index < workflowSteps.length - 1 && (
                <div
                  className="absolute left-10 -bottom-4 w-0.5 h-4"
                  style={{ backgroundColor: "var(--color-border-strong)" }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Cancellation note */}
        <div
          className="mt-8 p-4 rounded-lg border text-center"
          style={{
            backgroundColor: "var(--color-surface-alt)",
            borderColor: "var(--color-border-soft)",
          }}
        >
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            <span className="font-medium" style={{ color: "var(--color-text-main)" }}>
              Cancelación disponible y facturas automáticas:
            </span>{" "}
            Los pedidos pueden cancelarse desde &quot;Creado&quot; antes de iniciar fabricación. Cada cotización o abono genera
            factura informativa enviada por email al cliente.
          </p>
        </div>
      </div>
    </section>
  )
}

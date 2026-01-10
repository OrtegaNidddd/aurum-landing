import { AlertTriangle, CheckCircle2 } from "lucide-react"

const problems = [
  "Pedidos anotados en papel o Excel que se pierden",
  "Facturas manuales que no llegan al cliente a tiempo",
  "Sin visibilidad del estado real ni responsables",
  "Dificultad para calcular saldos y abonos",
  "Descoordinación entre asesores y maestros",
]

const solutions = [
  "Sistema centralizado con historial y auditoría completa",
  "Envío automático de facturas PDF por email al crear pedidos y registrar abonos",
  "Estados claros: Creado → Fabricación → Calidad → Entregado (o Cancelado)",
  "Cálculo automático de cotizaciones, abonos y saldo pendiente",
  "Roles definidos (Admin, Asesor, Maestro) con permisos específicos",
]

export function ProblemSolution() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance" style={{ color: "var(--color-text-main)" }}>
            Del caos al <span style={{ color: "var(--aurum-gold)" }}>control total</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--color-text-muted)" }}>
            Conocemos los desafíos de los talleres de joyería. AURUM nació para resolverlos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Problems */}
          <div className="p-8 rounded-2xl" style={{ backgroundColor: "var(--color-error-soft)" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg" style={{ backgroundColor: "var(--color-error)", opacity: 0.2 }}>
                <AlertTriangle size={24} style={{ color: "var(--color-error)" }} />
              </div>
              <h3 className="text-xl font-semibold" style={{ color: "var(--color-error)" }}>
                Sin AURUM
              </h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: "var(--color-error)" }}
                  />
                  <span style={{ color: "var(--color-text-main)" }}>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="p-8 rounded-2xl" style={{ backgroundColor: "var(--color-success-soft)" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg" style={{ backgroundColor: "var(--color-success)", opacity: 0.2 }}>
                <CheckCircle2 size={24} style={{ color: "var(--color-success)" }} />
              </div>
              <h3 className="text-xl font-semibold" style={{ color: "var(--color-success)" }}>
                Con AURUM
              </h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: "var(--color-success)" }} />
                  <span style={{ color: "var(--color-text-main)" }}>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

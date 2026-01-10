import { Crown, Briefcase, Wrench } from "lucide-react"

const roles = [
  {
    icon: Crown,
    name: "Admin",
    description: "Control total del sistema",
    permissions: [
      "Acceso completo a todos los módulos",
      "Gestión de usuarios, roles y tokens",
      "Reportes y exportaciones PDF/Excel",
      "Dashboard con KPIs globales",
      "Auditoría completa de operaciones",
    ],
    color: "var(--aurum-gold)",
  },
  {
    icon: Briefcase,
    name: "Asesor",
    description: "Gestión de ventas y clientes",
    permissions: [
      "Crear y gestionar pedidos propios",
      "Registrar clientes en el sistema",
      "Registrar cotizaciones y abonos (con facturas automáticas)",
      "Subir diseños versionados",
      "Crear órdenes de fabricación y entregas",
      "Registrar entregas",
    ],
    color: "var(--color-info)",
  },
  {
    icon: Wrench,
    name: "Maestro",
    description: "Producción y fabricación",
    permissions: [
      "Ver fabricaciones asignadas",
      "Actualizar estado de producción",
      "Registrar fecha de finalización",
      "Dashboard de trabajo pendiente",
    ],
    color: "var(--color-warning)",
  },
]

export function RolesSection() {
  return (
    <section id="roles" className="py-20 lg:py-28" style={{ backgroundColor: "var(--color-sidebar-bg)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance" style={{ color: "var(--color-text-main)" }}>
            Roles y <span style={{ color: "var(--aurum-gold)" }}>permisos</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--color-text-muted)" }}>
            Cada miembro de tu equipo tiene acceso exactamente a lo que necesita. Seguridad y control garantizados.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border flex flex-col"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border-soft)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${role.color}20` }}
                >
                  <role.icon size={20} style={{ color: role.color }} />
                </div>
                <div>
                  <h3 className="font-semibold" style={{ color: role.color }}>
                    {role.name}
                  </h3>
                  <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                    {role.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 flex-1">
                {role.permissions.map((permission, permIndex) => (
                  <li key={permIndex} className="flex items-start gap-2 text-sm">
                    <span
                      className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                      style={{ backgroundColor: role.color }}
                    />
                    <span style={{ color: "var(--color-text-muted)" }}>{permission}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-8" style={{ color: "var(--color-text-muted)" }}>
          Los clientes no se autentican; se registran por asesores o administradores para asociar pedidos y facturas.
        </p>
      </div>
    </section>
  )
}

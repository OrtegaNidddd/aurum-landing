"use client"

import { useState } from "react"
import { AurumLogo } from "./aurum-logo"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Flujo de Trabajo", href: "#flujo" },
  { label: "Roles", href: "#roles" },
  { label: "Tecnología", href: "#tecnologia" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: "var(--color-sidebar-bg)",
        borderColor: "var(--color-border-soft)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <AurumLogo size={36} />
            <span className="text-xl font-semibold tracking-wide" style={{ color: "var(--aurum-gold)" }}>
              AURUM
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: "var(--color-text-muted)" }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              className="text-sm font-medium"
              style={{
                backgroundColor: "var(--aurum-gold)",
                color: "var(--color-on-primary)",
              }}
              asChild
            >
              <a href="https://wa.me/573208396909?text=Hola,%20desearia%20solicitar%20una%20demo%20de%20Aurum" target="_blank" rel="noopener noreferrer">
                Solicitar Demo
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? (
              <X style={{ color: "var(--color-text-main)" }} size={24} />
            ) : (
              <Menu style={{ color: "var(--color-text-main)" }} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t" style={{ borderColor: "var(--color-border-soft)" }}>
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium py-2"
                  style={{ color: "var(--color-text-muted)" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t" style={{ borderColor: "var(--color-border-soft)" }}>
                <Button
                  className="w-full justify-center font-medium"
                  style={{
                    backgroundColor: "var(--aurum-gold)",
                    color: "var(--color-on-primary)",
                  }}
                  asChild
                >
                  <a href="https://wa.me/573208396909?text=Hola,%20desearia%20solicitar%20una%20demo%20de%20Aurum" target="_blank" rel="noopener noreferrer">
                    Solicitar Demo
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

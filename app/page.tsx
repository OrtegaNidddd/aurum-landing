import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { ProblemSolution } from "@/components/landing/problem-solution"
import { Features } from "@/components/landing/features"
import { WorkflowSection } from "@/components/landing/workflow-section"
import { RolesSection } from "@/components/landing/roles-section"
import { TechnologySection } from "@/components/landing/technology-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--color-sidebar-bg)" }}>
      <Header />
      <HeroSection />
      <ProblemSolution />
      <Features />
      <WorkflowSection />
      <RolesSection />
      <TechnologySection />
      <CTASection />
      <Footer />
    </main>
  )
}

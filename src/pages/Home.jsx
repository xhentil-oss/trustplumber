import { useEffect } from 'react'
import { business } from '@/config/business.js'
import Hero from '@/components/sections/Hero.jsx'
import TrustStrip from '@/components/sections/TrustStrip.jsx'
import SocialProof from '@/components/sections/SocialProof.jsx'
import ServiceGrid from '@/components/sections/ServiceGrid.jsx'
import ProblemSection from '@/components/sections/ProblemSection.jsx'
import WhyChooseUs from '@/components/sections/WhyChooseUs.jsx'
import CoverageGrid from '@/components/sections/CoverageGrid.jsx'
import ProcessSteps from '@/components/sections/ProcessSteps.jsx'
import CaseStudyCards from '@/components/sections/CaseStudyCards.jsx'
import BlogCards from '@/components/sections/BlogCards.jsx'
import FAQAccordion from '@/components/sections/FAQAccordion.jsx'
import FinalCTABand from '@/components/sections/FinalCTABand.jsx'

/**
 * Home — the authority hub.
 *
 * Section order is intentional and matches the Phase 2 conversion
 * funnel: Hero -> Trust -> Social proof -> Services -> Problems
 * -> Why us -> Coverage -> Process -> Cases -> Blog -> FAQ -> CTA.
 */
export default function Home() {
  useEffect(() => {
    document.title = `${business.name} | Licensed Plumbers in Toronto & the GTA`
    setMeta('description', `Licensed plumbing services across ${business.primaryRegionLong}. 24/7 emergency dispatch, written workmanship, same-day service.`)
  }, [])

  return (
    <>
      <Hero />
      <TrustStrip />
      <SocialProof />
      <ServiceGrid />
      <ProblemSection />
      <WhyChooseUs />
      <CoverageGrid />
      <ProcessSteps />
      <CaseStudyCards />
      <BlogCards />
      <FAQAccordion />
      <FinalCTABand />
    </>
  )
}

function setMeta(name, content) {
  if (typeof document === 'undefined') return
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

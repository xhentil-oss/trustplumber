import { useEffect, lazy, Suspense } from 'react'
import { business } from '@/config/business.js'
import { homeFaqs } from '@/data/faqs.js'
import Hero from '@/components/sections/Hero.jsx'
import LiveAvailability from '@/components/sections/LiveAvailability.jsx'
import TrustStrip from '@/components/sections/TrustStrip.jsx'
import ServiceGrid from '@/components/sections/ServiceGrid.jsx'
import ProblemSection from '@/components/sections/ProblemSection.jsx'
import SocialProof from '@/components/sections/SocialProof.jsx'
import WhyChooseUs from '@/components/sections/WhyChooseUs.jsx'
import PricingTransparency from '@/components/sections/PricingTransparency.jsx'
import ProcessSteps from '@/components/sections/ProcessSteps.jsx'
import CoverageGrid from '@/components/sections/CoverageGrid.jsx'
import FinalCTABand from '@/components/sections/FinalCTABand.jsx'

// Below-the-fold sections — lazy-loaded to keep the homepage TTI tight.
const RecentWork = lazy(() => import('@/components/sections/RecentWork.jsx'))
const CasePortfolio = lazy(() => import('@/components/sections/CasePortfolio.jsx'))
const FAQAccordion = lazy(() => import('@/components/sections/FAQAccordion.jsx'))
const BlogCards = lazy(() => import('@/components/sections/BlogCards.jsx'))

/**
 * Home — the authority hub.
 *
 * Optimized conversion funnel:
 *   Hero → LiveAvailability (why now) → TrustStrip (credentials) →
 *   ServiceGrid (what) → ProblemSection (relevance) → SocialProof →
 *   WhyChooseUs (differentiators) → PricingTransparency (objection) →
 *   ProcessSteps (how) → CoverageGrid (where) → CaseStudyCards (proof) →
 *   FAQAccordion (3 top objections) → BlogCards (authority) → FinalCTABand.
 */
export default function Home() {
  useEffect(() => {
    document.title = `${business.name} | Licensed Plumbers in Toronto & the GTA`
    setMeta('description', `Licensed plumbing services across ${business.primaryRegionLong}. 24/7 emergency dispatch, written workmanship, same-day service.`)
  }, [])

  return (
    <>
      <Hero />
      <LiveAvailability />
      <TrustStrip />
      <ServiceGrid />
      <ProblemSection />
      <SocialProof />
      <WhyChooseUs />
      <Suspense fallback={null}>
        <RecentWork />
      </Suspense>
      <PricingTransparency />
      <ProcessSteps />
      <CoverageGrid />
      <Suspense fallback={null}>
        <CasePortfolio />
        <FAQAccordion items={homeFaqs.slice(0, 3)} />
        <BlogCards />
      </Suspense>
      <FinalCTABand
        heading="Still deciding? Call the dispatcher."
        body="90 seconds to know what it costs. Real human — no chat-bot, no voicemail tree."
      />
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

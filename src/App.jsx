import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import { hasPlaceholderData } from './config/business.js'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import JsonLd, { localBusinessSchema } from './components/seo/JsonLd.jsx'

/* ───── Code-split everything except the homepage ──────────────── */
const Services = lazy(() => import('./pages/Services.jsx'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.jsx'))
const Locations = lazy(() => import('./pages/Locations.jsx'))
const LocationDetail = lazy(() => import('./pages/LocationDetail.jsx'))
const ServiceInLocation = lazy(() => import('./pages/ServiceInLocation.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const RequestService = lazy(() => import('./pages/RequestService.jsx'))
const ThankYou = lazy(() => import('./pages/ThankYou.jsx'))
const Reviews = lazy(() => import('./pages/Reviews.jsx'))
const Offers = lazy(() => import('./pages/Offers.jsx'))
const Financing = lazy(() => import('./pages/Financing.jsx'))
const Commercial = lazy(() => import('./pages/Commercial.jsx'))
const EmergencyPlumbing = lazy(() => import('./pages/EmergencyPlumbing.jsx'))
const Blog = lazy(() => import('./pages/Blog.jsx'))
const BlogCategory = lazy(() => import('./pages/BlogCategory.jsx'))
const BlogPost = lazy(() => import('./pages/BlogPost.jsx'))
const Privacy = lazy(() => import('./pages/legal/Privacy.jsx'))
const Terms = lazy(() => import('./pages/legal/Terms.jsx'))
const Accessibility = lazy(() => import('./pages/legal/Accessibility.jsx'))

/* ───── Suspense fallback ─────────────────────────────────────── */
function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" aria-busy="true" aria-live="polite">
      <div className="flex flex-col items-center gap-3 text-text-muted">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-accent-blue" aria-hidden="true" />
        <p className="text-body-sm">Loading&hellip;</p>
      </div>
    </div>
  )
}

// Scroll restoration — every navigation starts at top of page
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  // Dev-only warning when the business config still has placeholder data.
  useEffect(() => {
    if (import.meta.env.DEV && hasPlaceholderData()) {
      console.warn(
        '%c[Trust Plumber] Business config contains placeholder data.',
        'color: #DC2626; font-weight: bold;',
        '\nReview /src/config/business.js before deploying to production.',
      )
    }
  }, [])

  return (
    <>
      <ScrollToTop />
      {/* Site-wide LocalBusiness schema */}
      <JsonLd data={localBusinessSchema()} />

      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* ─── PRIMARY ROUTES ──────────────────────────────────── */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/request-service" element={<RequestService />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/emergency-plumbing" element={<EmergencyPlumbing />} />

            {/* ─── SERVICES ────────────────────────────────────────── */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/:service" element={<ServiceDetail />} />

            {/* ─── LOCATIONS ───────────────────────────────────────── */}
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:city" element={<LocationDetail />} />
            <Route path="/locations/:city/:service" element={<ServiceInLocation />} />

            {/* ─── BLOG ────────────────────────────────────────────── */}
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/category/:slug" element={<BlogCategory />} />
            <Route path="/blogs/:slug" element={<BlogPost />} />

            {/* ─── LEGAL & UTILITY ─────────────────────────────────── */}
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/thank-you" element={<ThankYou />} />

            {/* ─── 404 ─────────────────────────────────────────────── */}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  )
}

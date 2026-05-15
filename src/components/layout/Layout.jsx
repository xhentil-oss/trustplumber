import Header from './Header.jsx'
import Footer from './Footer.jsx'
import MobileStickyCTA from './MobileStickyCTA.jsx'

/**
 * Layout — global chrome wrapper used by every route.
 * Skip link + header + page slot + footer + mobile sticky CTA.
 */
export default function Layout({ children }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only-focusable absolute left-4 top-4 z-[60] rounded-btn bg-primary px-4 py-2 text-text-inverse"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <MobileStickyCTA />
    </>
  )
}

import { business } from '@/config/business.js'
import LegalLayout from './LegalLayout.jsx'

export default function Terms() {
  return (
    <LegalLayout crumb="Terms of Service" title="Terms of Service" lastUpdated="January 2026">
      <p>
        These Terms of Service govern your use of the {business.name} website and the plumbing
        services we provide. By using our site or hiring us, you agree to these terms.
      </p>

      <h2>1. About us</h2>
      <p>
        {business.legalName} is a licensed plumbing company operating in {business.primaryRegionLong}.
        Our office is located at {business.address.formatted}.
      </p>

      <h2>2. Quotes and estimates</h2>
      <p>
        All quotes are written and provided before work begins. A quote is valid for 30 days
        unless otherwise noted. If conditions on-site differ materially from what was described,
        we will provide a revised quote in writing before continuing.
      </p>

      <h2>3. Scheduling and cancellation</h2>
      <ul>
        <li>Non-emergency appointments may be rescheduled or cancelled at no charge with at least 24 hours&rsquo; notice.</li>
        <li>Emergency dispatches that are cancelled after a technician has been dispatched may incur a trip fee, quoted on the phone before dispatch.</li>
      </ul>

      <h2>4. Payment</h2>
      <p>
        Payment is due on completion of work unless other terms have been agreed in writing.
        We accept major credit cards, debit, and e-transfer. Past-due balances may accrue interest
        at the rate permitted under applicable law.
      </p>

      <h2>5. Workmanship guarantee</h2>
      <p>
        We stand behind our workmanship. If something we installed or repaired fails due to our
        workmanship within the guarantee period stated on your invoice, we will return and make
        it right at no labour charge. Parts are covered by the manufacturer&rsquo;s warranty.
      </p>

      <h2>6. Limitations</h2>
      <p>
        We are not responsible for pre-existing conditions in your plumbing system that are not
        reasonably discoverable before work begins, or for damage caused by factors outside our
        control (such as municipal water issues or third-party work performed after ours).
      </p>

      <h2>7. Permits and code compliance</h2>
      <p>
        Where required, we pull permits in our name and complete work to applicable Ontario
        building and plumbing code. Inspection paperwork is provided on completion.
      </p>

      <h2>8. Use of the website</h2>
      <p>
        Content on this site is provided for general information only and does not constitute a
        binding offer. Pricing, availability, and service descriptions are subject to change.
        You may not copy, scrape, or republish content from this site without written permission.
      </p>

      <h2>9. Governing law</h2>
      <p>
        These Terms are governed by the laws of the Province of {business.province} and the
        federal laws of Canada applicable therein.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about these Terms? Contact us at {business.address.formatted} or by email at{' '}
        <a href={`mailto:${business.email.primary}`}>{business.email.primary}</a>.
      </p>
    </LegalLayout>
  )
}

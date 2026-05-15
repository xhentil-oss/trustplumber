import { business } from '@/config/business.js'
import LegalLayout from './LegalLayout.jsx'

export default function Privacy() {
  return (
    <LegalLayout crumb="Privacy Policy" title="Privacy Policy" lastUpdated="January 2026">
      <p>
        {business.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects your privacy.
        This Privacy Policy explains how we collect, use, and protect personal information when
        you visit our website or request our services in {business.primaryRegionLong}.
      </p>

      <h2>1. Information we collect</h2>
      <p>We collect the following categories of personal information:</p>
      <ul>
        <li><strong>Contact information</strong> &mdash; name, phone number, email address, and service address you provide when requesting a quote or booking.</li>
        <li><strong>Service details</strong> &mdash; the nature of the plumbing issue, photos you choose to share, and notes from our technicians.</li>
        <li><strong>Payment information</strong> &mdash; processed by a PCI-compliant third-party processor; we do not store full card numbers.</li>
        <li><strong>Website analytics</strong> &mdash; non-identifying usage data (pages visited, device type, referrer) to improve the site.</li>
      </ul>

      <h2>2. How we use information</h2>
      <p>We use the information you provide to:</p>
      <ul>
        <li>Respond to quote requests and schedule service.</li>
        <li>Provide written estimates, invoices, and warranty records.</li>
        <li>Communicate about your job and any follow-up service.</li>
        <li>Comply with legal, tax, and regulatory obligations.</li>
      </ul>
      <p>We do not sell your personal information. We do not share it with marketers.</p>

      <h2>3. Cookies and analytics</h2>
      <p>
        Our website uses cookies for basic functionality and aggregate analytics. You can disable
        cookies in your browser; some features (like saved forms) may not work as expected.
      </p>

      <h2>4. Data retention</h2>
      <p>
        We keep service records (quotes, invoices, warranty documents) for as long as required by
        Canadian tax and consumer-protection law &mdash; typically seven years.
      </p>

      <h2>5. Your rights under Canadian law</h2>
      <p>
        Under PIPEDA and applicable provincial laws, you have the right to access, correct, and
        in some cases request deletion of your personal information held by us. To exercise these
        rights, contact us at <a href={`mailto:${business.email.primary}`}>{business.email.primary}</a>.
      </p>

      <h2>6. Security</h2>
      <p>
        We use reasonable administrative, technical, and physical safeguards to protect personal
        information. No system is perfectly secure, but we take this responsibility seriously.
      </p>

      <h2>7. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The &ldquo;last updated&rdquo; date
        at the top of the page indicates when changes were made.
      </p>

      <h2>8. Contact</h2>
      <p>
        Questions about this Privacy Policy? Contact us at {business.address.formatted}, by phone,
        or by email at <a href={`mailto:${business.email.primary}`}>{business.email.primary}</a>.
      </p>
    </LegalLayout>
  )
}

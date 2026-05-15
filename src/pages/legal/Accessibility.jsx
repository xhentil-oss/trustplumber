import { business } from '@/config/business.js'
import LegalLayout from './LegalLayout.jsx'

export default function Accessibility() {
  return (
    <LegalLayout crumb="Accessibility" title="Accessibility Statement" lastUpdated="January 2026">
      <p>
        {business.name} is committed to making our website and services accessible to everyone,
        including people with disabilities. We aim to meet WCAG 2.1 Level AA standards and to
        comply with the Accessibility for Ontarians with Disabilities Act (AODA).
      </p>

      <h2>1. What we&rsquo;re doing</h2>
      <ul>
        <li>Designing the site for keyboard navigation and assistive technology.</li>
        <li>Providing text alternatives for non-text content.</li>
        <li>Maintaining sufficient colour contrast and readable text sizing.</li>
        <li>Using semantic HTML and ARIA only where needed for clarity.</li>
        <li>Testing the site with screen readers and keyboard-only navigation.</li>
      </ul>

      <h2>2. Service accommodations</h2>
      <p>
        We are happy to accommodate accessibility needs during service calls. Examples include:
      </p>
      <ul>
        <li>Calling ahead so you can prepare your home.</li>
        <li>Providing written quotes in larger type on request.</li>
        <li>Communicating by email or text instead of phone when preferred.</li>
        <li>Working with caregivers or interpreters present.</li>
      </ul>

      <h2>3. Feedback</h2>
      <p>
        We welcome feedback on the accessibility of our website and services. If you encounter
        a barrier or have a suggestion, please contact us:
      </p>
      <ul>
        <li>By email: <a href={`mailto:${business.email.primary}`}>{business.email.primary}</a></li>
        <li>By phone: {business.phone.display}</li>
        <li>By mail: {business.address.formatted}</li>
      </ul>
      <p>
        We aim to respond to accessibility feedback within five business days.
      </p>

      <h2>4. Ongoing improvement</h2>
      <p>
        Accessibility is not a one-time project. We will continue to review and improve the site,
        and to train our team on accessible service delivery.
      </p>
    </LegalLayout>
  )
}

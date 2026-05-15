import Container from '@/components/layout/Container.jsx'
import Accordion from '@/components/ui/Accordion.jsx'
import homeFaqs from '@/data/faqs.js'

/**
 * FAQAccordion — homepage FAQ. Six objection-handling questions.
 *
 * Pass a custom `items` array to reuse on service / location pages.
 */
export default function FAQAccordion({
  eyebrow = 'Frequently asked',
  heading = 'Answers to the questions we hear most.',
  intro = 'If yours isn\u2019t here, call us \u2014 we answer in plain English.',
  items = homeFaqs,
}) {
  return (
    <section className="section bg-background" aria-labelledby="faq-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <p className="eyebrow">{eyebrow}</p>
            <h2 id="faq-heading" className="mt-3 text-h1 text-text-primary">{heading}</h2>
            <p className="mt-4 text-body-lg text-text-secondary">{intro}</p>
          </div>
          <div className="lg:col-span-8">
            <Accordion items={items.map(({ q, a }) => ({ q, a }))} defaultOpen={0} />
          </div>
        </div>
      </Container>
    </section>
  )
}

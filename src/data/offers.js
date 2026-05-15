/**
 * Promotional offers shown on /offers.
 *
 * Rule: never invent offers. Each entry must be a real, approved promo with
 * verifiable terms. If the marketing team has not signed off, set `active: false`
 * and the UI will hide the card.
 *
 * `expiresOn` is an ISO date (YYYY-MM-DD). Past-dated offers auto-hide.
 */
export const offers = [
  {
    id: 'offer-new-customer',
    title: 'New customer welcome',
    discount: '$25 off',
    body: 'First-time customers get $25 off any service over $200. One discount per household.',
    terms: 'Cannot combine with other offers. Valid on labour, not on parts. Must mention this offer at booking.',
    expiresOn: null,
    active: true,
    cta: { to: '/request-service', label: 'Request service' },
  },
  {
    id: 'offer-senior',
    title: 'Seniors\u2019 discount',
    discount: '10% off labour',
    body: 'A standing 10% off labour for customers 65 and over. ID may be requested on-site.',
    terms: 'Applies to labour only. Cannot stack with the new-customer welcome.',
    expiresOn: null,
    active: true,
    cta: { to: '/request-service', label: 'Request service' },
  },
  {
    id: 'offer-drain-camera',
    title: 'Drain camera with hydro-jetting',
    discount: 'Camera inspection included',
    body: 'Book a hydro-jetting service and we\u2019ll include the before/after camera inspection at no extra charge.',
    terms: 'On qualifying residential drain lines. We\u2019ll confirm scope on the call.',
    expiresOn: null,
    active: true,
    cta: { to: '/services/drain-cleaning', label: 'See drain services' },
  },
]

export function getActiveOffers() {
  const today = new Date().toISOString().slice(0, 10)
  return offers.filter((o) => o.active && (!o.expiresOn || o.expiresOn >= today))
}

export default offers

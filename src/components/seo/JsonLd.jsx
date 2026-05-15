import { business } from '@/config/business.js'

/**
 * JsonLd — renders a structured-data <script> tag.
 * React 19+ allows script tags in JSX, but we use dangerouslySetInnerHTML
 * to keep React 18 happy and to avoid JSX-encoding pitfalls.
 */
export default function JsonLd({ data }) {
  if (!data) return null
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

/* ───── Generators ─────────────────────────────────────────────── */

export function localBusinessSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    '@id': `${business.url}/#business`,
    name: business.name,
    legalName: business.legalName,
    url: business.url,
    telephone: business.phone.display,
    email: business.email.primary,
    image: `${business.url}${business.branding.ogImage}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.province,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.address.latitude,
      longitude: business.address.longitude,
    },
    areaServed: business.primaryRegionLong,
    openingHoursSpecification: business.hours.isAlwaysOpen
      ? [{
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        }]
      : undefined,
  }

  // Aggregate rating (only if real data exists)
  const g = business.trustSignals?.google
  if (g?.rating && g?.reviewCount) {
    data.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: g.rating,
      reviewCount: g.reviewCount,
    }
  }

  // Social profiles
  const sameAs = Object.values(business.social || {}).filter(Boolean)
  if (sameAs.length) data.sameAs = sameAs

  return data
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.label,
      item: it.to ? `${business.url}${it.to}` : undefined,
    })),
  }
}

export function serviceSchema({ name, description, slug }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name,
    description,
    url: `${business.url}/services/${slug}`,
    provider: { '@id': `${business.url}/#business` },
    areaServed: business.primaryRegionLong,
  }
}

export function articleSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: { '@type': 'Organization', name: post.author || business.name },
    publisher: {
      '@type': 'Organization',
      name: business.name,
      logo: { '@type': 'ImageObject', url: `${business.url}${business.branding.logoLight}` },
    },
    mainEntityOfPage: `${business.url}/blogs/${post.slug}`,
  }
}

export function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  }
}

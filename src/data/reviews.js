/**
 * Sample testimonials. Replace with real, verifiable reviews before
 * launch. Every entry must be a real customer — first name + city/
 * neighbourhood + service performed + date.
 *
 * `verified` indicates we have the original source on file (Google,
 * HomeStars, signed release for direct testimonials).
 */
export const reviews = [
  {
    id: 'rev-001',
    quote:
      "Pipe burst behind our kitchen wall at 3 a.m. on a Tuesday in February. The dispatcher answered on the second ring, the plumber was here in under an hour, water off in five minutes. Quoted the repair in daylight, exactly what he said the night before.",
    name: 'Sarah',
    location: 'Riverdale, Toronto',
    service: 'emergency-plumbing',
    rating: 5,
    date: '2026-02-14',
    source: 'direct',
    verified: false,
  },
  {
    id: 'rev-002',
    quote:
      "Slow kitchen drain that two other plumbers had snaked twice. They brought a camera, found grease build-up in cast iron, hydro-jetted it, and showed me the before/after on a tablet. Hasn't backed up since.",
    name: 'Daniel',
    location: 'Port Credit, Mississauga',
    service: 'drain-cleaning',
    rating: 5,
    date: '2026-03-02',
    source: 'google',
    verified: false,
  },
  {
    id: 'rev-003',
    quote:
      "Sump pump failed during the April rain. They had a replacement on the truck, installed it the same afternoon, and walked me through how to test it twice a year. Quiet, tidy, and the price matched the quote.",
    name: 'Priya',
    location: 'Aurora Heights, Aurora',
    service: 'sump-pump',
    rating: 5,
    date: '2026-04-18',
    source: 'homestars',
    verified: false,
  },
]

export function getReviewsForService(slug, limit = 3) {
  return reviews.filter((r) => r.service === slug).slice(0, limit)
}

export function getReviewsForLocation(city, limit = 3) {
  return reviews
    .filter((r) => r.location.toLowerCase().includes(city.toLowerCase()))
    .slice(0, limit)
}

export default reviews

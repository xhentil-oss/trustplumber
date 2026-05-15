/**
 * Full blog catalogue.
 *
 * Each post body is an array of typed blocks so the renderer stays simple
 * and we don't need an MDX pipeline. Block types: 'p', 'h2', 'h3', 'ul', 'ol',
 * 'callout', 'quote'.
 *
 * Categories are derived from the unique category values below.
 *
 * Rule: never invent statistics, prices, or local references that we
 * can't back up. When in doubt, frame as "typically" or "in our experience".
 */

export const categories = [
  { slug: 'emergency-plumbing', name: 'Emergency Plumbing', description: 'What to do in the first ten minutes when something goes wrong.' },
  { slug: 'buying-guides', name: 'Buying Guides', description: 'Honest comparisons before you spend on a major plumbing upgrade.' },
  { slug: 'seasonal-maintenance', name: 'Seasonal Maintenance', description: 'Ten-minute checks that catch the failures most homeowners miss.' },
]

export const blogPosts = [
  {
    slug: 'how-to-shut-off-the-main-water-valve',
    category: 'Emergency Plumbing',
    categorySlug: 'emergency-plumbing',
    title: 'How to shut off the main water valve in a Toronto home',
    excerpt:
      'Where the valve usually lives, how to turn it without breaking it, and what to do in the two minutes after.',
    readMinutes: 4,
    publishedAt: '2026-03-12',
    updatedAt: '2026-03-12',
    author: 'Trust Plumber',
    tags: ['emergency', 'burst pipe', 'water shut-off'],
    body: [
      { type: 'p', text: 'When a pipe lets go, every minute matters. Knowing where your main water shut-off valve is \u2014 and being confident enough to actually turn it \u2014 is the single most important plumbing skill a homeowner has. Here is the short version, written for a typical Toronto home.' },
      { type: 'h2', text: 'Where the main shut-off usually lives' },
      { type: 'p', text: 'In most GTA homes, the main shut-off is on the wall where the municipal water line enters the basement. Look on the side of the house closest to the street, near floor level. You will see a copper pipe coming through the foundation, a water meter, and a valve on either side of the meter.' },
      { type: 'ul', items: [
        'Detached and semi-detached homes: front basement wall, near where utilities enter.',
        'Condos and apartments: usually a shut-off in the unit itself \u2014 ask the property manager where.',
        'Older homes: occasionally hidden behind a finished wall or in a utility cupboard.',
      ] },
      { type: 'h2', text: 'How to turn it (without breaking it)' },
      { type: 'p', text: 'There are two common valve types: a gate valve (round handle, like a hose tap) and a ball valve (lever handle). Ball valves are quick: turn the lever 90 degrees so it points across the pipe. Gate valves need several full turns clockwise to close.' },
      { type: 'callout', text: 'If the valve is stiff, do not force it with a wrench. An old gate valve can snap at the stem and turn a controllable problem into a flood. Call us and we will talk you through it.' },
      { type: 'h2', text: 'The first two minutes after' },
      { type: 'ol', items: [
        'Open a tap on the lowest floor to drain remaining pressure.',
        'Switch off the water heater (gas or electrical) so it does not run dry.',
        'Take a photo of the damage for your insurer.',
        'Call a licensed plumber. We answer 24/7.',
      ] },
      { type: 'p', text: 'If you cannot find your valve, call your municipality \u2014 they can shut water at the property line as a last resort, but it is slower than doing it yourself. Knowing where your valve is, before you need it, is half the job.' },
    ],
  },
  {
    slug: 'tank-vs-tankless-water-heater-gta',
    category: 'Buying Guides',
    categorySlug: 'buying-guides',
    title: 'Tank vs tankless water heater in a GTA home',
    excerpt:
      'The honest cost difference over ten years, where tankless makes sense, and where a properly sized tank still wins.',
    readMinutes: 7,
    publishedAt: '2026-04-02',
    updatedAt: '2026-04-02',
    author: 'Trust Plumber',
    tags: ['water heater', 'tankless', 'buying guide'],
    body: [
      { type: 'p', text: 'Every few weeks someone calls and asks the same question: my old tank is on its last legs, should I switch to tankless? The honest answer is "it depends" \u2014 and the dependencies are not what most marketing pages tell you.' },
      { type: 'h2', text: 'The basic difference' },
      { type: 'p', text: 'A tank water heater stores 40\u201360 gallons of hot water and keeps it hot, ready to use. A tankless unit heats water on demand as it flows through, so there is no standing tank. Both can run on natural gas or electricity; gas is more common in GTA homes.' },
      { type: 'h2', text: 'Where tankless makes sense' },
      { type: 'ul', items: [
        'You routinely run out of hot water (large family, back-to-back showers).',
        'You have the gas line capacity and a suitable venting path.',
        'You plan to stay in the home long enough to recover the higher install cost.',
        'You want to free up the floor space the tank occupies.',
      ] },
      { type: 'h2', text: 'Where a tank still wins' },
      { type: 'ul', items: [
        'Smaller households with predictable hot-water demand.',
        'Homes where upgrading the gas line or venting would add significant cost.',
        'Budget-conscious replacements \u2014 a quality tank typically costs less to install.',
      ] },
      { type: 'callout', text: 'We never recommend a tankless install where the existing gas line cannot support it. Undersized gas supply is the single most common reason a "tankless upgrade" underperforms in the GTA.' },
      { type: 'h2', text: 'The ten-year picture' },
      { type: 'p', text: 'Tankless units generally last longer than tanks (15\u201320 years vs 8\u201312). Operating costs are typically lower because there is no standby heat loss. But the install cost is meaningfully higher, especially when venting and gas-line upgrades are needed. Over ten years, the two options often land closer together than the sticker price suggests.' },
      { type: 'h2', text: 'What we recommend' },
      { type: 'p', text: 'Get a written quote for both options on your actual home, with the actual gas-line and venting scope spelled out. If the numbers are close, pick the one that matches your hot-water habits. If the tankless quote balloons because of upgrades, a properly sized power-vent tank is usually the smarter buy.' },
    ],
  },
  {
    slug: 'spring-sump-pump-checklist',
    category: 'Seasonal Maintenance',
    categorySlug: 'seasonal-maintenance',
    title: 'Spring sump-pump checklist for Ontario homeowners',
    excerpt:
      'A ten-minute test every March that catches the failures that flood basements in April.',
    readMinutes: 5,
    publishedAt: '2026-04-22',
    updatedAt: '2026-04-22',
    author: 'Trust Plumber',
    tags: ['sump pump', 'maintenance', 'spring'],
    body: [
      { type: 'p', text: 'Most sump pump failures are not surprises. The pump was already weak or already clogged before the heavy April rain hit \u2014 the rain just exposed it. Ten minutes in early spring catches almost all of them.' },
      { type: 'h2', text: 'The five-step test' },
      { type: 'ol', items: [
        'Listen: lift the lid and confirm the pump is plugged in. Bonus points if it is on its own GFCI circuit.',
        'Look: shine a flashlight into the pit. If you see silt, debris, or roots, the pit needs cleaning.',
        'Pour: slowly pour a bucket of water into the pit until the float rises. The pump should switch on within a few seconds.',
        'Watch: confirm water leaves through the discharge pipe and that the check valve closes (you will hear a small clunk).',
        'Walk: trace the discharge outside. It should daylight well away from the foundation, not into a window well or against the wall.',
      ] },
      { type: 'callout', text: 'If your pump did not switch on in step three, do not run it dry. Unplug it, call us, and we will diagnose whether it is the float, the motor, or the impeller.' },
      { type: 'h2', text: 'Backup considerations' },
      { type: 'p', text: 'A primary pump that fails during a storm is one problem. A power outage during a storm is another. If your basement is finished, a battery backup pump or a water-powered backup is worth the cost \u2014 most failures we are called to during storms are power-related, not pump-related.' },
      { type: 'h2', text: 'When to replace, not repair' },
      { type: 'p', text: 'Most residential sump pumps last seven to ten years. If yours is past that, runs more than a few times an hour during normal weather, or makes new noises, plan the replacement before the next big rain. Same-day swaps are usually possible \u2014 we keep common units on the truck.' },
    ],
  },
]

export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug) || null
}

export function getPostsByCategory(slug) {
  return blogPosts.filter((p) => p.categorySlug === slug)
}

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug) || null
}

export function getRelatedPosts(slug, limit = 2) {
  const current = getPostBySlug(slug)
  if (!current) return []
  return blogPosts
    .filter((p) => p.slug !== slug && p.categorySlug === current.categorySlug)
    .slice(0, limit)
}

export default blogPosts

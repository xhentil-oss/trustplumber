/**
 * ═══════════════════════════════════════════════════════════════════
 * SERVICES CONFIGURATION
 * ═══════════════════════════════════════════════════════════════════
 *
 * Each service has:
 *  - slug:       URL path segment (kebab-case)
 *  - name:       Display name
 *  - shortName:  Used in tight UI spaces
 *  - icon:       lucide-react icon name (imported in components)
 *  - tagline:    One-line description for cards
 *  - category:   For grouping ('residential', 'commercial', 'emergency')
 *  - isEmergency: Shows red emergency styling
 *  - isFeatured: Appears on homepage service grid
 *  - intent:     SEO intent ('high' = top priority for service+location pages)
 *
 * To add a new service: append to this array, then ensure CMS data
 * (full content blocks, FAQs, etc.) is added in /src/data/services/.
 */

export const services = [
  {
    slug: 'emergency-plumbing',
    name: 'Emergency Plumbing',
    shortName: 'Emergency',
    icon: 'Siren',
    tagline: '24/7 dispatch across the GTA for burst pipes, sewer backups, and active leaks.',
    category: 'emergency',
    isEmergency: true,
    isFeatured: true,
    intent: 'high',
  },
  {
    slug: 'drain-cleaning',
    name: 'Drain Cleaning',
    shortName: 'Drains',
    icon: 'Droplets',
    tagline: 'Same-day clearance for blocked, slow, or backing-up drains.',
    category: 'residential',
    isEmergency: false,
    isFeatured: true,
    intent: 'high',
  },
  {
    slug: 'sump-pump',
    name: 'Sump Pump Replacement',
    shortName: 'Sump Pumps',
    icon: 'Waves',
    tagline: 'Protect your basement from flooding with a properly sized and installed pump.',
    category: 'residential',
    isEmergency: false,
    isFeatured: true,
    intent: 'medium',
  },
  {
    slug: 'water-heater-repair',
    name: 'Water Heater Repair',
    shortName: 'Water Heater',
    icon: 'Flame',
    tagline: 'Repair or replace tank and tankless water heaters — same-day where possible.',
    category: 'residential',
    isEmergency: false,
    isFeatured: true,
    intent: 'high',
  },
  {
    slug: 'toilet-installation-repair',
    name: 'Toilet Installation & Repair',
    shortName: 'Toilets',
    icon: 'Wrench',
    tagline: 'Running, leaking, or clogged toilets — repaired or replaced with care.',
    category: 'residential',
    isEmergency: false,
    isFeatured: true,
    intent: 'medium',
  },
  {
    slug: 'faucet-repair-installation',
    name: 'Faucet Repair & Installation',
    shortName: 'Faucets',
    icon: 'Droplet',
    tagline: 'Dripping, leaking, or upgrading — kitchen and bath faucet work.',
    category: 'residential',
    isEmergency: false,
    isFeatured: false,
    intent: 'medium',
  },
  {
    slug: 'backwater-valve-installation',
    name: 'Backwater Valve Installation',
    shortName: 'Backwater Valves',
    icon: 'ShieldCheck',
    tagline: 'Protect your basement from sewer surcharge during heavy rainfall.',
    category: 'residential',
    isEmergency: false,
    isFeatured: true,
    intent: 'medium',
  },
  {
    slug: 'main-water-line-replacement',
    name: 'Main Water Line Replacement',
    shortName: 'Main Water Line',
    icon: 'GitBranch',
    tagline: 'Replace aging or failing main water service lines, including lead line replacement.',
    category: 'residential',
    isEmergency: false,
    isFeatured: false,
    intent: 'medium',
  },
  {
    slug: 'drain-camera-inspection',
    name: 'Drain Camera Inspection',
    shortName: 'Camera Inspection',
    icon: 'Camera',
    tagline: 'See what is going on inside your drain or sewer line before quoting a repair.',
    category: 'residential',
    isEmergency: false,
    isFeatured: false,
    intent: 'medium',
  },
  {
    slug: 'garbage-disposal',
    name: 'Garbage Disposal Installation & Repair',
    shortName: 'Garbage Disposal',
    icon: 'Cog',
    tagline: 'Install, repair, or replace under-sink garbage disposal units.',
    category: 'residential',
    isEmergency: false,
    isFeatured: false,
    intent: 'low',
  },
  {
    slug: 'shower-tub-installation',
    name: 'Shower & Tub Installation',
    shortName: 'Shower & Tub',
    icon: 'Bath',
    tagline: 'Bathroom renovations and replacements done to code.',
    category: 'residential',
    isEmergency: false,
    isFeatured: false,
    intent: 'medium',
  },
  {
    slug: 'home-winterization',
    name: 'Home Winterization Services',
    shortName: 'Winterization',
    icon: 'Snowflake',
    tagline: 'Prepare your plumbing for Canadian winter — pipe insulation and shut-down for seasonal homes.',
    category: 'residential',
    isEmergency: false,
    isFeatured: false,
    intent: 'low',
  },
  {
    slug: 'residential-plumbing',
    name: 'Residential Plumbing',
    shortName: 'Residential',
    icon: 'Home',
    tagline: 'Full-service plumbing for homeowners across the GTA.',
    category: 'residential',
    isEmergency: false,
    isFeatured: true,
    intent: 'high',
  },
  {
    slug: 'commercial-plumbing',
    name: 'Commercial Plumbing',
    shortName: 'Commercial',
    icon: 'Building2',
    tagline: 'Plumbing services for offices, restaurants, retail, and industrial properties.',
    category: 'commercial',
    isEmergency: false,
    isFeatured: true,
    intent: 'high',
  },
]

// ─── HELPERS ─────────────────────────────────────────────────────────

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug)
}

export function getFeaturedServices() {
  return services.filter((s) => s.isFeatured)
}

export function getEmergencyServices() {
  return services.filter((s) => s.isEmergency)
}

export function getServicesByCategory(category) {
  return services.filter((s) => s.category === category)
}

export function getHighIntentServices() {
  return services.filter((s) => s.intent === 'high')
}

export default services

/**
 * ═══════════════════════════════════════════════════════════════════
 * LOCATIONS CONFIGURATION
 * ═══════════════════════════════════════════════════════════════════
 *
 * Each city has:
 *  - slug:           URL path segment
 *  - name:           Display name
 *  - province:       Province code (ON)
 *  - region:         Sub-region for grouping ('Toronto', 'York', 'Halton', etc.)
 *  - isPrimary:      Featured on homepage city grid
 *  - tier:           1 = major city (Toronto, Mississauga), 2 = mid, 3 = smaller
 *  - latitude/longitude: For map markers and schema
 *  - neighborhoods:  Real neighbourhoods served (only list verified ones)
 *  - nearbyCities:   Slugs of nearby cities for internal linking
 *
 * For each city + service combo, content lives in /src/data/service-location/
 * The matrix of available combinations is computed at build time.
 */

export const locations = [
  {
    slug: 'toronto',
    name: 'Toronto',
    province: 'ON',
    region: 'Toronto',
    isPrimary: true,
    tier: 1,
    latitude: 43.6532,
    longitude: -79.3832,
    neighborhoods: [
      'Downtown', 'The Annex', 'Cabbagetown', 'Riverdale', 'Leslieville',
      'The Beaches', 'Danforth', 'The Junction', 'High Park', 'Bloor West Village',
      'Roncesvalles', 'Parkdale', 'Yorkville', 'Forest Hill', 'Rosedale',
    ],
    nearbyCities: ['north-york', 'scarborough', 'etobicoke', 'mississauga', 'thornhill'],
  },
  {
    slug: 'north-york',
    name: 'North York',
    province: 'ON',
    region: 'Toronto',
    isPrimary: true,
    tier: 1,
    latitude: 43.7615,
    longitude: -79.4111,
    neighborhoods: [
      'Willowdale', 'Don Mills', 'North York Centre', 'Lawrence Park', 'Bayview Village',
      'Hoggs Hollow', 'York Mills', 'Bathurst Manor',
    ],
    nearbyCities: ['toronto', 'thornhill', 'richmond-hill', 'vaughan'],
  },
  {
    slug: 'scarborough',
    name: 'Scarborough',
    province: 'ON',
    region: 'Toronto',
    isPrimary: true,
    tier: 1,
    latitude: 43.7764,
    longitude: -79.2318,
    neighborhoods: [
      'Agincourt', 'Birch Cliff', 'Cliffside', 'Guildwood', 'Highland Creek',
      'Malvern', 'Rouge', 'Wexford',
    ],
    nearbyCities: ['toronto', 'pickering', 'north-york'],
  },
  {
    slug: 'etobicoke',
    name: 'Etobicoke',
    province: 'ON',
    region: 'Toronto',
    isPrimary: true,
    tier: 1,
    latitude: 43.6435,
    longitude: -79.5656,
    neighborhoods: [
      'Etobicoke Centre', 'The Kingsway', 'Mimico', 'New Toronto', 'Long Branch',
      'Islington-City Centre West', 'Rexdale',
    ],
    nearbyCities: ['toronto', 'mississauga', 'oakville'],
  },
  {
    slug: 'mississauga',
    name: 'Mississauga',
    province: 'ON',
    region: 'Peel',
    isPrimary: true,
    tier: 1,
    latitude: 43.5890,
    longitude: -79.6441,
    neighborhoods: [
      'Port Credit', 'Streetsville', 'Cooksville', 'Erin Mills', 'Meadowvale',
      'Lorne Park', 'Clarkson', 'Square One', 'Mississauga City Centre',
    ],
    nearbyCities: ['etobicoke', 'oakville', 'milton', 'toronto'],
  },
  {
    slug: 'oakville',
    name: 'Oakville',
    province: 'ON',
    region: 'Halton',
    isPrimary: true,
    tier: 2,
    latitude: 43.4675,
    longitude: -79.6877,
    neighborhoods: [
      'Old Oakville', 'Bronte', 'Glen Abbey', 'River Oaks', 'West Oak Trails',
      'Joshua Creek', 'Iroquois Ridge',
    ],
    nearbyCities: ['mississauga', 'burlington', 'milton'],
  },
  {
    slug: 'burlington',
    name: 'Burlington',
    province: 'ON',
    region: 'Halton',
    isPrimary: true,
    tier: 2,
    latitude: 43.3255,
    longitude: -79.7990,
    neighborhoods: [
      'Aldershot', 'Downtown Burlington', 'Headon Forest', 'Millcroft',
      'Roseland', 'Tyandaga', 'Alton Village',
    ],
    nearbyCities: ['oakville', 'hamilton', 'milton'],
  },
  {
    slug: 'hamilton',
    name: 'Hamilton',
    province: 'ON',
    region: 'Hamilton',
    isPrimary: true,
    tier: 1,
    latitude: 43.2557,
    longitude: -79.8711,
    neighborhoods: [
      'Downtown Hamilton', 'Ancaster', 'Dundas', 'Stoney Creek', 'Westdale',
      'Durand', 'Kirkendall',
    ],
    nearbyCities: ['burlington', 'st-catharines'],
  },
  {
    slug: 'milton',
    name: 'Milton',
    province: 'ON',
    region: 'Halton',
    isPrimary: true,
    tier: 2,
    latitude: 43.5183,
    longitude: -79.8774,
    neighborhoods: [
      'Old Milton', 'Beaty', 'Bronte Meadows', 'Coates', 'Dempsey',
      'Harrison', 'Scott', 'Willmott',
    ],
    nearbyCities: ['mississauga', 'oakville', 'burlington'],
  },
  {
    slug: 'aurora',
    name: 'Aurora',
    province: 'ON',
    region: 'York',
    isPrimary: true,
    tier: 2,
    latitude: 44.0065,
    longitude: -79.4504,
    neighborhoods: [
      'Aurora Village', 'Bayview Northeast', 'Aurora Estates', 'Hills of St. Andrew',
      'Aurora Heights', 'Regency Acres', 'Aurora Highlands',
    ],
    nearbyCities: ['richmond-hill', 'thornhill'],
  },
  {
    slug: 'richmond-hill',
    name: 'Richmond Hill',
    province: 'ON',
    region: 'York',
    isPrimary: true,
    tier: 2,
    latitude: 43.8828,
    longitude: -79.4403,
    neighborhoods: [
      'Bayview Hill', 'Mill Pond', 'Oak Ridges', 'Jefferson', 'Crosby',
      'Richvale', 'Devonsleigh',
    ],
    nearbyCities: ['aurora', 'thornhill', 'vaughan', 'north-york'],
  },
  {
    slug: 'thornhill',
    name: 'Thornhill',
    province: 'ON',
    region: 'York',
    isPrimary: true,
    tier: 2,
    latitude: 43.8175,
    longitude: -79.4242,
    neighborhoods: [
      'Old Thornhill', 'German Mills', 'Thornhill Woods', 'Royal Orchard',
      'Brownridge', 'Beverley Glen',
    ],
    nearbyCities: ['north-york', 'richmond-hill', 'vaughan'],
  },
  {
    slug: 'woodbridge',
    name: 'Woodbridge',
    province: 'ON',
    region: 'York',
    isPrimary: false,
    tier: 3,
    latitude: 43.7758,
    longitude: -79.6005,
    neighborhoods: [
      'Old Woodbridge', 'Sonoma Heights', 'West Woodbridge', 'Vellore Village',
      'East Woodbridge',
    ],
    nearbyCities: ['vaughan', 'caledon', 'etobicoke'],
  },
  {
    slug: 'caledon',
    name: 'Caledon',
    province: 'ON',
    region: 'Peel',
    isPrimary: false,
    tier: 3,
    latitude: 43.8554,
    longitude: -79.8711,
    neighborhoods: [
      'Bolton', 'Caledon East', 'Mayfield West', 'Valleywood', 'Inglewood',
    ],
    nearbyCities: ['woodbridge', 'georgetown'],
  },
  {
    slug: 'georgetown',
    name: 'Georgetown',
    province: 'ON',
    region: 'Halton',
    isPrimary: false,
    tier: 3,
    latitude: 43.6486,
    longitude: -79.9249,
    neighborhoods: [
      'Downtown Georgetown', 'Georgetown South', 'Glen Williams', 'Park District',
    ],
    nearbyCities: ['milton', 'caledon'],
  },
  {
    slug: 'cambridge',
    name: 'Cambridge',
    province: 'ON',
    region: 'Waterloo',
    isPrimary: false,
    tier: 3,
    latitude: 43.3616,
    longitude: -80.3144,
    neighborhoods: [
      'Galt', 'Hespeler', 'Preston', 'East Galt',
    ],
    nearbyCities: ['kitchener', 'guelph'],
  },
  {
    slug: 'kitchener',
    name: 'Kitchener',
    province: 'ON',
    region: 'Waterloo',
    isPrimary: false,
    tier: 2,
    latitude: 43.4516,
    longitude: -80.4925,
    neighborhoods: [
      'Downtown Kitchener', 'Forest Hill', 'Doon', 'Stanley Park', 'Bridgeport',
    ],
    nearbyCities: ['cambridge', 'guelph'],
  },
  {
    slug: 'guelph',
    name: 'Guelph',
    province: 'ON',
    region: 'Wellington',
    isPrimary: false,
    tier: 2,
    latitude: 43.5448,
    longitude: -80.2482,
    neighborhoods: [
      'Downtown Guelph', 'Old University', 'Kortright Hills', 'Westminster Woods',
    ],
    nearbyCities: ['cambridge', 'kitchener'],
  },
  {
    slug: 'pickering',
    name: 'Pickering',
    province: 'ON',
    region: 'Durham',
    isPrimary: false,
    tier: 2,
    latitude: 43.8384,
    longitude: -79.0868,
    neighborhoods: [
      'Bay Ridges', 'West Shore', 'Liverpool', 'Brock Ridge', 'Amberlea',
    ],
    nearbyCities: ['scarborough'],
  },
  {
    slug: 'st-catharines',
    name: 'St. Catharines',
    province: 'ON',
    region: 'Niagara',
    isPrimary: false,
    tier: 2,
    latitude: 43.1594,
    longitude: -79.2469,
    neighborhoods: [
      'Downtown St. Catharines', 'Port Dalhousie', 'Western Hill', 'Glenridge',
    ],
    nearbyCities: ['hamilton'],
  },
]

// ─── HELPERS ─────────────────────────────────────────────────────────

export function getLocationBySlug(slug) {
  return locations.find((l) => l.slug === slug)
}

export function getPrimaryLocations() {
  return locations.filter((l) => l.isPrimary)
}

export function getLocationsByRegion(region) {
  return locations.filter((l) => l.region === region)
}

export function getNearbyLocations(slug, limit = 4) {
  const location = getLocationBySlug(slug)
  if (!location) return []
  return location.nearbyCities
    .map((s) => getLocationBySlug(s))
    .filter(Boolean)
    .slice(0, limit)
}

export function getAllRegions() {
  const regions = new Set(locations.map((l) => l.region))
  return Array.from(regions)
}

export default locations

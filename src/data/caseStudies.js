/**
 * Case studies shown on the homepage. Real jobs only. Until photo
 * releases are in place, `image` stays null and the card renders without
 * a hero image.
 */
export const caseStudies = [
  {
    id: 'cs-001',
    type: 'emergency',
    typeLabel: 'Emergency',
    title: 'Burst supply line at 3 a.m. in a Riverdale semi',
    city: 'Toronto',
    service: 'emergency-plumbing',
    summary:
      'Frozen copper supply behind a kitchen wall let go overnight. Stabilized the leak, dried the cavity, replaced the failed section with PEX after daylight quote.',
    image: null,
  },
  {
    id: 'cs-002',
    type: 'commercial',
    typeLabel: 'Commercial',
    title: 'Restaurant kitchen drain rebuild in Port Credit',
    city: 'Mississauga',
    service: 'commercial-plumbing',
    summary:
      'Cast-iron kitchen line corroded internally after twenty years of grease. Replaced with PVC, added a grease interceptor, scheduled quarterly jetting.',
    image: null,
  },
  {
    id: 'cs-003',
    type: 'major-repair',
    typeLabel: 'Major repair',
    title: 'Backwater valve retrofit in basement-flood zone',
    city: 'Toronto',
    service: 'backwater-valve-installation',
    summary:
      'Pre-war east-end home in a combined-sewer surcharge zone. Trenched, installed a Mainline backwater valve, helped the homeowner apply for the City of Toronto subsidy.',
    image: null,
  },
]

export default caseStudies

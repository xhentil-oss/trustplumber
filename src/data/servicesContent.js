/**
 * Per-service long-form content for /services/:service pages.
 *
 * Keyed by service slug. Each entry can include:
 *  - intro:     one-paragraph lead under the hero
 *  - features:  short bullets shown in the hero
 *  - included:  detailed "what's covered" list
 *  - signs:     symptoms that mean "call now"
 *  - faqs:      service-specific Q&A array of { q, a }
 *
 * Falls back to sensible defaults via getServiceContent() so pages
 * always render even before specific content is written.
 */

const content = {
  'emergency-plumbing': {
    intro:
      'Burst pipe, sewer backup, no hot water in winter \u2014 these don\u2019t wait until Monday. Our dispatcher answers 24/7 and a licensed plumber is on the way, fast.',
    features: [
      '24/7 dispatch, real human on the line',
      'Fully stocked vans for first-visit repair',
      'Same-day arrival across the GTA',
      'Written quote before any major work',
    ],
    included: [
      'On-site diagnosis and containment of the immediate hazard',
      'Honest, written quote before we begin the repair',
      'Temporary fix where a permanent repair needs parts ordered',
      'Coordination with your insurer for water-damage claims',
      'Cleanup of the work area before we leave',
    ],
    signs: [
      'Water actively leaking and you can\u2019t shut it off',
      'Sewage backing up into a tub, floor drain, or basement',
      'No hot water in winter and a vulnerable household',
      'Frozen or burst pipe',
      'Strong sewer-gas smell that won\u2019t clear',
    ],
    faqs: [
      {
        q: 'How fast can you actually be here?',
        a: 'Most GTA emergency calls receive a dispatched plumber within 60\u201390 minutes. We\u2019ll give you an honest ETA when you call \u2014 not a guess.',
      },
      {
        q: 'Do you charge extra for nights or weekends?',
        a: 'After-hours calls have a transparent dispatch surcharge that we tell you on the phone. There are no surprise add-ons once we arrive.',
      },
      {
        q: 'What should I do before you get here?',
        a: 'If safe to do so, shut off the main water valve, turn off the breaker to any flooded area, and clear a path to the work site. Our dispatcher will walk you through it.',
      },
    ],
  },
  'drain-cleaning': {
    intro:
      'Slow tubs, gurgling toilets, and basement floor drains that back up are not maintenance issues \u2014 they\u2019re early warnings. We clear blockages and tell you whether the line itself needs attention.',
    features: [
      'Same-day clearance for residential drains',
      'Power augers and hydro-jetting where appropriate',
      'Camera inspection available on request',
      'Workmanship written on the invoice',
    ],
    included: [
      'Diagnosis of the affected fixture or main line',
      'Mechanical clearance with the right equipment for the line',
      'Water-flow test after clearance to confirm the fix',
      'Honest recommendation on whether a camera scope is warranted',
      'Written workmanship on the cleared section',
    ],
    signs: [
      'Multiple fixtures backing up at the same time',
      'Gurgling toilet when the washing machine drains',
      'Recurring slow drain after off-the-shelf chemical use',
      'Sewer odour near a floor drain',
      'Water around the basement floor drain after heavy rain',
    ],
  },
  'sump-pump': {
    intro:
      'Your sump pump is the difference between a dry basement and an insurance claim. We size, install, and replace pumps so they actually run when you need them.',
    features: [
      'Properly sized pump for your basin and load',
      'Battery-backup options for power outages',
      'Discharge line freeze-protection',
      'Tested under load before we leave',
    ],
    included: [
      'Inspection of existing basin, float, and discharge line',
      'Pump sizing based on basin volume and infiltration rate',
      'Removal and disposal of the old pump',
      'New pump installation with a check valve and union',
      'Test cycle under load to confirm operation',
    ],
    signs: [
      'Pump cycling constantly or not at all',
      'Visible rust, debris, or seized impeller',
      'Pump older than 7\u201310 years',
      'Recent basement seepage during heavy rain',
      'Discharge line that freezes in winter',
    ],
  },
  'water-heater-repair': {
    intro:
      'Cold showers, rusty water, or a tank making banging noises \u2014 we repair tank and tankless units, and replace honestly when repair stops making sense.',
    features: [
      'Tank and tankless service',
      'Same-day repair where possible',
      'Honest repair-vs-replace recommendation',
      'Code-compliant venting and gas work',
    ],
    included: [
      'Full diagnostic of the unit and supply lines',
      'Anode rod, thermostat, element, or burner service as needed',
      'Sediment flush for tank units',
      'Tankless descaling where appropriate',
      'Written estimate if replacement is the smarter call',
    ],
    signs: [
      'Lukewarm or no hot water',
      'Rusty or discoloured hot water',
      'Banging or popping sounds from the tank',
      'Water around the base of the tank',
      'Pilot light won\u2019t stay lit',
    ],
  },
  'backwater-valve-installation': {
    intro:
      'A backwater valve protects your basement when the city sewer surcharges during heavy rain. In many GTA municipalities, installation qualifies for a rebate.',
    features: [
      'Code-compliant installation with permit',
      'Rebate paperwork support where eligible',
      'Clean concrete cut and finish',
      'Annual maintenance reminders',
    ],
    included: [
      'Locating the building drain via camera scope',
      'Permit pull and municipal coordination',
      'Concrete cut, valve installation, and clean concrete patch',
      'Maintenance access cover for future inspections',
      'Documentation for the rebate application',
    ],
    signs: [
      'Past basement flooding during heavy rain',
      'Older home in a low-lying GTA neighbourhood',
      'Municipal subsidy program available in your area',
      'Finished basement or high-value contents below grade',
    ],
  },
}

const defaults = {
  intro:
    'We handle this work daily across the GTA \u2014 done to code, on a fair quote, with workmanship written on the invoice.',
  features: [
    'Licensed and insured plumbers',
    'Honest, written quotes',
    'Workmanship guaranteed',
    'Same-day service when available',
  ],
  included: [
    'On-site diagnosis with the homeowner present',
    'Written quote before work starts',
    'Code-compliant repair or installation',
    'Clean work area at the end of the visit',
    'Documentation on the final invoice',
  ],
  signs: [],
  faqs: [],
}

export function getServiceContent(slug) {
  const c = content[slug] || {}
  return {
    intro: c.intro || defaults.intro,
    features: c.features || defaults.features,
    included: c.included || defaults.included,
    signs: c.signs || defaults.signs,
    faqs: c.faqs || defaults.faqs,
  }
}

export default content

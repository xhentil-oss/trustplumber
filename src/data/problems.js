/**
 * "Problems we solve" — symptoms, framed in user language.
 * Each problem maps to a service we offer, which becomes the
 * "How we fix it →" link.
 */
export const problems = [
  {
    icon: 'Droplets',
    title: 'Burst or leaking pipe',
    body: 'Water visible on a wall, floor, or ceiling. Shut off the main and call.',
    service: 'emergency-plumbing',
  },
  {
    icon: 'ArrowDownToLine',
    title: 'Sewer backing up',
    body: 'Water coming up at a floor drain or basement toilet — stop running water in the house.',
    service: 'emergency-plumbing',
  },
  {
    icon: 'Flame',
    title: 'No hot water',
    body: 'Tank not firing, pilot won\u2019t stay lit, or tankless throwing an error code.',
    service: 'water-heater-repair',
  },
  {
    icon: 'CircleSlash',
    title: 'Drain won\u2019t clear',
    body: 'Plunger and store-bought cleaner haven\u2019t fixed it — usually a deeper blockage.',
    service: 'drain-cleaning',
  },
  {
    icon: 'Toilet',
    title: 'Toilet won\u2019t stop running',
    body: 'Wastes water, raises bills. Usually a flapper or fill valve, occasionally the supply.',
    service: 'toilet-installation-repair',
  },
  {
    icon: 'Gauge',
    title: 'Low water pressure',
    body: 'Could be a single fixture, the supply line, or the pressure regulator. Diagnosis first.',
    service: 'main-water-line-replacement',
  },
  {
    icon: 'Snowflake',
    title: 'Frozen pipe',
    body: 'No water at one tap in winter, or a visible frost line. Call before it bursts.',
    service: 'emergency-plumbing',
  },
  {
    icon: 'Waves',
    title: 'Sump pump failed',
    body: 'Pit full, pump silent, or basement already wet — replace before the next storm.',
    service: 'sump-pump',
  },
]

export default problems

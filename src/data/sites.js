// Real sample site data extracted from the team's kepler.gl map export.
// [lng, lat, siteId, microplastics per liter]
const raw = [
  [-111.881717, 44.38967, 'kecam', 6],
  [-111.893376, 44.38966, 'ksaw', 8],
  [-111.866187, 44.389615, 'kspr', 8],
  [-112.076319, 44.351515, 'kratl', 4],
  [-112.020731, 44.464978, 'ksccg', 3],
  [-111.899376, 44.389666, 'klwcam', 6],
  [-112.007048, 44.468285, 'kuwcam', 7],
  [-112.143818, 44.349958, 'klow3', 6],
  [-112.095983, 44.392329, 'kup3', 2],
  [-111.893329, 44.288967, 'krr', 4],
  [-111.879357, 44.389657, 'kchg', 9],
  [-111.891425, 44.393197, 'kswell', 6],
  [-112.040756, 44.38586, 'kucor', 5],
  [-112.1802085, 44.3553907, 'spencer', 3],
  [-111.779306, 43.927333, 'Parkersalem', 8],
  [-111.9049722, 43.82513889, 'Beaverd', 6],
  [-111.7679722, 43.835, 'Albert', 8],
  [-111.8381111, 43.82488889, 'X-Wing', 7],
]

export const CONTROL = 2

export const sites = raw.map(([lng, lat, id, count]) => ({
  id,
  lng,
  lat,
  count,
  county: lat >= 44.1 ? 'Clark' : 'Madison',
}))

export function severity(count) {
  if (count <= 2) return 'low'
  if (count <= 4) return 'moderate'
  if (count <= 6) return 'high'
  return 'severe'
}

// Single-hue sequential ramp (validated: node scripts/validate_palette.js --ordinal)
export const severityColor = {
  low: '#86b6ef',
  moderate: '#3987e5',
  high: '#1c5cab',
  severe: '#0d366b',
}

export const severityLabel = {
  low: '1–2 / L',
  moderate: '3–4 / L',
  high: '5–6 / L',
  severe: '7+ / L',
}

export const bottleLog = [
  { name: 'Megan Fox 2009', mL: 1000, count: 8, pinkFibers: 1 },
  { name: 'Nap Dynamite', mL: 1000, count: 4, pinkFibers: 0 },
  { name: 'Ginga Ninja', mL: 1000, count: 6, pinkFibers: 1 },
  { name: 'Wilson', mL: 1080, count: 8, pinkFibers: 3 },
  { name: 'GG Lucielle', mL: 1560, count: 7, pinkFibers: 2 },
  { name: 'Red Feather', mL: 1575, count: 4, pinkFibers: 0 },
  { name: 'Hoffmans Fatty', mL: 1550, count: 4, pinkFibers: 0 },
  { name: 'Shawn White', mL: 1570, count: 3, pinkFibers: 1 },
  { name: 'Control', mL: 1000, count: 3, pinkFibers: 0 },
]

export const team = ['Ryan Sargeant', 'Lydia Kessie', 'Cheyenne Gwynn', 'Kiersten Jensen']

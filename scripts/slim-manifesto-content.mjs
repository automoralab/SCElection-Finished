import fs from 'node:fs'

const src = fs.readFileSync('src/content.js', 'utf8')
const start = src.indexOf('  /**\n   * Full manifesto')
const startAlt = src.indexOf('  manifestoPages: [')
const markerStart = start >= 0 ? start : (() => {
  // include preceding comment block if present
  const idx = startAlt
  const before = src.lastIndexOf('  /**', idx)
  return before >= 0 && idx - before < 400 ? before : idx
})()
const end = src.indexOf('  contact:')
if (markerStart < 0 || end < 0) throw new Error(`markers not found ${markerStart} ${end}`)

const pages = [
  ['Cover', 'Manifesto cover — Vote Steve Crowther'],
  ['Dear Constituent', 'Manifesto page 2 — Dear Constituent letter'],
  ['About Me', 'Manifesto page 3 — About Me and why standing again'],
  ['National Priorities / Infrastructure', 'Manifesto page 4 — National priorities and infrastructure'],
  ['Ballasalla / Castletown / Jobs', 'Manifesto page 5 — Ballasalla, Castletown and jobs'],
  ['Homes / School / Retail', 'Manifesto page 6 — Affordable homes, school and retail'],
  ['Economy', 'Manifesto page 7 — Economy'],
  ['Tax & Pensions / Environment', 'Manifesto page 8 — Tax, pensions and environment'],
  ['Airport / Law & Order', 'Manifesto page 9 — Airport and law and order'],
  ['Education', 'Manifesto page 10 — Education'],
  ['Digital Divide', 'Manifesto page 11 — Digital divide'],
  ['Health & Wellbeing', 'Manifesto page 12 — Health and wellbeing'],
  ['Tourism / Agriculture', 'Manifesto page 13 — Tourism and agriculture'],
  ['Agriculture / Governance', 'Manifesto page 14 — Agriculture and governance'],
  ['Why Vote Steve', 'Manifesto page 15 — Why vote Steve Crowther'],
  ['Back cover / Contact', 'Manifesto page 16 — Contact and imprint'],
]

const lines = [
  '  /**',
  '   * Flipbook pages — high-res renders of the printed PDF (public/manifesto-pages).',
  '   * Re-generate with: node scripts/render-manifesto-pages.mjs',
  '   */',
  '  manifestoPages: [',
]

pages.forEach(([tocLabel, alt], i) => {
  const n = String(i + 1).padStart(2, '0')
  lines.push('    {')
  lines.push(`      id: 'p${n}',`)
  lines.push(`      pdfPage: ${i + 1},`)
  lines.push(`      tocLabel: ${JSON.stringify(tocLabel)},`)
  lines.push(`      image: '/manifesto-pages/page-${n}.png',`)
  lines.push(`      alt: ${JSON.stringify(alt)},`)
  lines.push('    },')
})

lines.push('  ],')
lines.push('')
lines.push('')

const out = src.slice(0, markerStart) + lines.join('\n') + src.slice(end)
fs.writeFileSync('src/content.js', out)
console.log('Replaced manifestoPages; file length', out.length)

import { promises as fs } from 'node:fs'
import path from 'node:path'
import { pdf } from 'pdf-to-img'

const src = path.resolve('../Assets/3190_Steve_Crowther_Manifesto_2026_V4WEBv2.pdf')
const outDir = path.resolve('public/manifesto-pages')
await fs.mkdir(outDir, { recursive: true })

// scale 2.5 ≈ 1488×2105 for A4; bump if needed for ≥1600 long edge
const document = await pdf(src, { scale: 2.7 })
let i = 1
for await (const image of document) {
  const name = `page-${String(i).padStart(2, '0')}.png`
  await fs.writeFile(path.join(outDir, name), image)
  console.log('Wrote', name, image.length, 'bytes')
  i++
}
console.log('Done, pages:', i - 1)

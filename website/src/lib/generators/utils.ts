import fs from 'fs'
import { kebabCase } from 'lodash-es'
import path from 'path'
export async function readSVG(name: string) {
  const svg = await import(
    '@theme-toggles/core/assets/svgs/' + kebabCase(name) + '.svg'
  )

  return fs.readFileSync(
    path.join(process.cwd(), svg.default.src.replace('_next', '.next')),
    'utf8'
  )
}

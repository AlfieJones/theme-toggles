import fs from 'fs'
import { kebabCase } from 'lodash-es'
export function readSVG(name: string) {
  const svg = require.resolve(
    '@theme-toggles/core/assets/svgs/' + kebabCase(name) + '.svg'
  )
  return fs.readFileSync(svg, 'utf8')
}

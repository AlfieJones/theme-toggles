import { Heading } from '@/components/Heading'
import { Toggle } from '@/components/ToggleUtils'
import * as toggles from '@theme-toggles/react'
import {
  argbFromHex,
  blueFromArgb,
  greenFromArgb,
  redFromArgb,
  themeFromSourceColor,
} from '@material/material-color-utilities'

const getRGB = (argb: number) =>
  `${redFromArgb(argb)} ${greenFromArgb(argb)} ${blueFromArgb(argb)}`

export function Toggles() {
  return (
    <div className="mx-auto">
      <Heading id="toggles">Toggles</Heading>
      <div className="mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 min-[400px]:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4">
        {Object.keys(toggles).map((name) => {
          const theme = themeFromSourceColor(
            argbFromHex(
              '#000000'.replace(/0/g, function () {
                return ((Math.random() * 16)).toString(16)
              })
            )
          )

          return (
            <Toggle
              key={name}
              toggle={name}
              colorLight={getRGB(theme.schemes.light.primary)}
              colorDark={getRGB(theme.palettes.primary.tone(80))}
            />
          )
        })}
      </div>
    </div>
  )
}

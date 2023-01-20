'use client'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { GridPattern } from '@/components/GridPattern'
import * as toggles from '@theme-toggles/react'
import Link from 'next/link'
import { useState, useId } from 'react'
import { kebabCase } from 'lodash-es'
import { Button } from '@/components'

function TogglePattern({ mouseX, mouseY, ...gridProps }) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 transition duration-300 opacity-0 rounded-2xl bg-gradient-to-r from-zinc-400/25 to-zinc-300/25 group-hover:opacity-100 dark:from-black/25 dark:to-zinc-700/50"
        style={style}
      />
      <motion.div
        className="absolute inset-0 transition duration-300 opacity-0 rounded-2xl mix-blend-overlay group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
          {...gridProps}
        />
      </motion.div>
    </div>
  )
}

export function Toggle({ toggle, colorDark, colorLight }: any) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const [toggled, setToggle] = useState(false)
  const id = useId()
  const Toggle = toggles[toggle]

  return (
    <div
      key={toggle}
      onMouseMove={onMouseMove}
      style={{ '--bg-dark': colorDark, '--bg-light': colorLight } as any}
      className="relative flex transition-shadow group rounded-2xl hover:shadow-md hover:shadow-zinc-900/5 dark:hover:shadow-black/5"
    >
      <span className="absolute inset-0 rounded-2xl bg-custom-light/5 dark:bg-custom-dark/5" />

      <TogglePattern mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative w-full px-6 pt-6 pb-2 rounded-2xl">
        <Toggle
          className="relative z-10 block w-24 h-24 mx-auto text-custom-dark dark:text-custom-dark"
          idPrefix={id}
          toggled={toggled}
          onToggle={setToggle}
        />
        <h3 className="z-0 mt-4 text-sm text-xl font-semibold leading-7 text-zinc-900 dark:text-zinc-100">
          <Link href={`/toggle/${kebabCase(toggle)}`}>
            <span className="absolute inset-0 rounded-2xl" />
            {toggle}
          </Link>
        </h3>
        <Button
          div
          className="pointer-events-none text-custom-light dark:text-custom-dark"
          variant="text"
          arrow="right"
        >
          See the code
        </Button>
      </div>
    </div>
  )
}

function getColorDark() {
  return (
    'hsl(' +
    360 * Math.random() +
    ',' +
    (25 + 30 * Math.random()) +
    '%,' +
    (85 + 2 * Math.random()) +
    '%)'
  )
}

function getColor() {
  return (
    'hsl(' +
    360 * Math.random() +
    ',' +
    (25 + 30 * Math.random()) +
    '%,' +
    (85 + 2 * Math.random()) +
    '%)'
  )
}

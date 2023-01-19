'use client'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion'
import { GridPattern } from '@/components/GridPattern'
import * as toggles from '@theme-toggles/react'
import Link from 'next/link'
import { Heading } from './Heading'
import { useState, useId } from 'react'
import { Button } from './Button'

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
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
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

function Toggle({ toggle }) {
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
      className="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
    >
      <TogglePattern mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative z-0 w-full rounded-2xl px-6 pt-6 pb-2">
        <Toggle
          className="z-10 mx-auto block h-24 w-24"
          idPrefix={id}
          toggled={toggled}
          onToggle={setToggle}
        />
        <h3 className="-z-10 mt-4 text-xl text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
          <Link href={'/about'}>
            <span className="absolute inset-0 rounded-2xl -z-10" />
            {toggle}
          </Link>
        </h3>
        <Button className='pointer-events-none text-base' variant='text' arrow="right">
          See the code
        </Button>
      </div>
    </div>
  )
}

export function Toggles() {
  return (
    <div className="my-16 mx-auto">
      <Heading level={2} id="resources">
        Resources
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 min-[400px]:grid-cols-2 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-3 xl:grid-cols-4">
        {Object.keys(toggles).map((name) => (
          <Toggle key={name} toggle={name} />
        ))}
      </div>
    </div>
  )
}

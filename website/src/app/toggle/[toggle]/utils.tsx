'use client'

import { CodeGroup, Pre, Code } from '@/components'
import * as toggles from '@theme-toggles/react'
import { createContext, useState } from 'react'
import { createStore } from 'zustand'
import { camelCase, upperFirst } from 'lodash-es'
export { Pre, Code, CodeGroup } from '@/components'
import * as Slider from '@radix-ui/react-slider'
import { Switch } from '@headlessui/react'
import clsx from 'clsx'

interface ToggleStore {
  duration: number
  reversed: boolean
  color: string
}
const ToggleStore = createStore<ToggleStore>()

const ToggleContext = createContext(ToggleStore)

export function ToggleContextWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ToggleContext.Provider value={ToggleStore}>
      {children}
    </ToggleContext.Provider>
  )
}

interface Code {
  code: string
  highlighted: string
}

export function ToggleConfiguration({
  toggle,
  btn,
  div,
  checkbox,
}: {
  toggle: string
  btn: Code
  div: Code
  checkbox: Code
}) {
  const [toggled, onToggle] = useState(false)

  const Toggle = toggles[upperFirst(camelCase(toggle))]

  const [duration, setDuration] = useState(500)
  const [reversed, setReversed] = useState(false)
  const [color, setColor] = useState('#6366f1')

  return (
    <div className="z-0 flex flex-col">
      <div className="relative flex gap-16 px-8 pt-8 pb-10 mt-4 -mb-10 bg-white border-t grow rounded-t-2xl border-x border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
        <div className="flex items-center justify-center w-full pr-16">
          <Toggle
            idPrefix="preview"
            style={{ color }}
            reversed={reversed}
            duration={duration}
            className="text-[10rem]"
            toggled={toggled}
            onToggle={onToggle}
          />
        </div>

        <div className="flex flex-col w-full max-w-sm py-4 space-y-4 align-end grow">
          <Switch.Group className="flex justify-between w-full" as="div">
            <Switch.Label className="block text-sm text-zinc-800 dark:text-zinc-200">
              Reverse
            </Switch.Label>

            <Switch
              checked={reversed}
              onChange={setReversed}
              className={clsx(
                reversed ? 'bg-indigo-500' : 'bg-zinc-200 dark:bg-zinc-600',
                'relative inline-flex h-6 w-11 items-center rounded-full'
              )}
            >
              <span className="sr-only">Reverse toggle</span>
              <span
                className={clsx(
                  'inline-block  transform rounded-full bg-white transition-all',
                  reversed ? 'h-4 w-4 translate-x-6' : 'h-3 w-3 translate-x-1'
                )}
              />
            </Switch>
          </Switch.Group>
          <div className="flex justify-between grow">
            <label
              htmlFor="colorInput"
              className="block text-sm text-zinc-800 dark:text-zinc-200 "
            >
              Color
            </label>
            <input
              onChange={(e) => setColor(e.target.value)}
              defaultValue={color}
              id="colorInput"
              type="color"
              className="bg-transparent border-none cursor-pointer"
            />
          </div>
          <div>
            <div className="flex justify-between">
              <label
                htmlFor="duration-slider"
                className="block text-sm text-zinc-800 dark:text-zinc-200"
              >
                Duration
              </label>
              <p className="text-zinc-600 dark:text-zinc-400">{duration}ms</p>
            </div>
            <Slider.Root
              className="relative flex items-center w-full h-5 select-none touch-action-none"
              defaultValue={[500]}
              max={2000}
              onValueChange={(value) => setDuration(value[0])}
              step={50}
              id="duration-slider"
            >
              <Slider.Track className="relative h-1 rounded-full cursor-pointer grow bg-zinc-300 dark:bg-zinc-600">
                <Slider.Range className="absolute h-full bg-indigo-500 rounded-full" />
              </Slider.Track>
              <Slider.Thumb className="block w-5 h-5 bg-indigo-500 rounded-full shadow-md cursor-grab focus:outline-none focus:ring focus:ring-indigo-400" />
            </Slider.Root>
          </div>
        </div>
      </div>

      <div className='z-10'>
        <CodeGroup title="HTML" tag="css" className="scrollbar max-h-[40rem] !text-zinc-900 dark:!text-zinc-100">
          <Pre
            code={btn.code}
            label={`import @theme-toggles/core/dist/base/${toggle}.css`}
            title="button"
            language="html"
          >
            <Code>{btn.highlighted}</Code>
          </Pre>
          <Pre
            code={div.code}
            label={`import @theme-toggles/core/dist/base/${toggle}.css`}
            title="div"
            language="html"
          >
            <Code>{div.highlighted}</Code>
          </Pre>
          <Pre
            code={checkbox.code}
            label={`import @theme-toggles/core/dist/checkbox/${toggle}.css`}
            title="checkbox"
            language="html"
          >
            <Code>{checkbox.highlighted}</Code>
          </Pre>
        </CodeGroup>
      </div>
    </div>
  )
}

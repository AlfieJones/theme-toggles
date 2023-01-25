import { HTMLButton, HTMLCheckbox } from '@/lib/generators/html'
import { ToggleContextWrapper, ToggleConfiguration } from './utils'
import hljs from 'highlight.js'
import { kebabCase } from 'lodash-es'
import * as toggles from '@theme-toggles/react'

export const dynamicParams = false

export async function generateStaticParams() {
  const toggleNames = Object.keys(toggles)

  return toggleNames.map((toggle) => ({
    toggle: kebabCase(toggle),
  }))
}

export default async function Toggle({
  params,
}: {
  params: { toggle: string }
}) {
  const btn = await HTMLButton(params.toggle)
  const btnCode = hljs.highlight(btn, {
    language: 'html',
  })
  const div = await HTMLButton(params.toggle)
  const divCode = hljs.highlight(div, {
    language: 'html',
  })
  const checkbox = await HTMLCheckbox(params.toggle)
  const checkboxCode = hljs.highlight(checkbox, {
    language: 'html',
  })
  return (
    <ToggleContextWrapper>
      <div className="">
        <ToggleConfiguration
          toggle={params.toggle}
          btn={{ code: btn, highlighted: btnCode.value }}
          div={{ code: div, highlighted: divCode.value }}
          checkbox={{ code: checkbox, highlighted: checkboxCode.value }}
        />
      </div>
    </ToggleContextWrapper>
  )
}

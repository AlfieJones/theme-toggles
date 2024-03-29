'use client'
import {
  Children,
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { create } from 'zustand'
import { motion } from 'framer-motion'
import { Tag } from '@/components/Tag'

const languageNames = {
  js: 'JavaScript',
  ts: 'TypeScript',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  php: 'PHP',
  python: 'Python',
  ruby: 'Ruby',
  go: 'Go',
}

function getPanelTitle({ title, language }) {
  return title ?? languageNames[language] ?? 'Code'
}

function ClipboardIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        strokeWidth="0"
        d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"
      />
      <path
        fill="none"
        strokeLinejoin="round"
        d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"
      />
    </svg>
  )
}

function CopyButton({ code }) {
  let [copyCount, setCopyCount] = useState(0)
  let copied = copyCount > 0

  useEffect(() => {
    if (copyCount > 0) {
      let timeout = setTimeout(() => setCopyCount(0), 1000)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [copyCount])

  return (
    <button
      type="button"
      className={clsx(
        'group/button absolute top-3.5 right-4 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100',
        copied
          ? 'bg-indigo-400/10 ring-1 ring-inset ring-indigo-400/20'
          : 'bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5'
      )}
      onClick={() => {
        window.navigator.clipboard.writeText(code).then(() => {
          setCopyCount((count) => count + 1)
        })
      }}
    >
      <span
        aria-hidden={copied}
        className={clsx(
          'pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300',
          copied && '-translate-y-1.5 opacity-0'
        )}
      >
        <ClipboardIcon className="w-5 h-5 transition-colors fill-zinc-500/20 stroke-zinc-500 group-hover/button:stroke-zinc-400" />
        Copy
      </span>
      <span
        aria-hidden={!copied}
        className={clsx(
          'pointer-events-none absolute inset-0 flex items-center justify-center text-indigo-400 transition duration-300',
          !copied && 'translate-y-1.5 opacity-0'
        )}
      >
        Copied!
      </span>
    </button>
  )
}

function CodePanelHeader({ tag, label }) {
  if (!tag && !label) {
    return null
  }

  return (
    <div className="flex h-9 items-center gap-2 border-y border-t-transparent border-b-white/7.5 bg-zinc-200 px-4 dark:border-b-white/5 dark:bg-white/5">
      {tag && (
        <div className="flex dark">
          <Tag variant="small">{tag}</Tag>
        </div>
      )}
      {tag && label && (
        <span className="h-0.5 w-0.5 rounded-full bg-zinc-500" />
      )}
      {label && (
        <span className="font-mono text-xs text-zinc-700 dark:text-zinc-400">{label}</span>
      )}
    </div>
  )
}

interface CodePanelProps {
  tag?: string
  label?: string
  code?: string
  className?: string
  children: JSX.Element
}

function CodePanel({ tag, label, code, children, className }: CodePanelProps) {
  let child = Children.only(children)

  return (
    <div className="group dark:bg-white/2.5">
      <CodePanelHeader
        tag={child.props.tag ?? tag}
        label={child.props.label ?? label}
      />
      <div className="relative">
        <pre
          className={clsx('overflow-x-auto p-4 text-xs text-white', className)}
        >
          {children}
        </pre>
        <CopyButton code={child.props.code ?? code} />
      </div>
    </div>
  )
}

interface CodeGroupProps {
  title?: string
  children: JSX.Element | JSX.Element[]
}

function CodeGroupHeader({ title, children }: CodeGroupProps) {
  let hasTabs = Children.count(children) > 1

  const id = useId()

  if (!title && !hasTabs) {
    return null
  }

  return (
    <div className="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-700 px-4 dark:border-zinc-800 dark:bg-transparent">
      {title && (
        <h3 className="pt-3 mr-auto text-xs font-semibold text-white">
          {title}
        </h3>
      )}
      {hasTabs && (
        <Tab.List className="flex gap-4 -mb-px text-xs font-medium">
          {Children.map(children, (child) => (
            <Tab
              className={({ selected }) =>
                clsx(
                  'relative py-3 transition focus:[&:not(:focus-visible)]:outline-none',
                  selected
                    ? 'border-indigo-500 text-indigo-400'
                    : 'border-transparent text-white hover:text-zinc-200 dark:text-zinc-400 dark:hover:text-zinc-300'
                )
              }
            >
              {({ selected }) => (
                <>
                  {getPanelTitle(child.props)}
                  {selected && (
                    <motion.span
                      layoutId={id}
                      className="absolute inset-x-0 bottom-0 w-full h-px bg-indigo-500"
                    />
                  )}
                </>
              )}
            </Tab>
          ))}
        </Tab.List>
      )}
    </div>
  )
}

function CodeGroupPanels({ children, ...props }) {
  let hasTabs = Children.count(children) > 1

  if (hasTabs) {
    return (
      <Tab.Panels>
        {Children.map(children, (child) => (
          <Tab.Panel>
            <CodePanel
              tag={child.props.tag || props.tag}
              label={child.props.label || props.label}
              className={child.props.className || props.label}
              {...props}
            >
              {child}
            </CodePanel>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    )
  }

  return <CodePanel {...props}>{children}</CodePanel>
}

function usePreventLayoutShift() {
  let positionRef = useRef<HTMLElement>()
  let rafRef = useRef<number>()

  useEffect(() => {
    return () => {
      window.cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return {
    positionRef,
    preventLayoutShift(callback) {
      let initialTop = positionRef.current.getBoundingClientRect().top

      callback()

      rafRef.current = window.requestAnimationFrame(() => {
        let newTop = positionRef.current.getBoundingClientRect().top
        window.scrollBy(0, newTop - initialTop)
      })
    },
  }
}

interface LanguageStore {
  preferredLanguages: string[]
  addPreferredLanguage: (language: string) => void
}

const usePreferredLanguageStore = create<LanguageStore>((set) => ({
  preferredLanguages: [],
  addPreferredLanguage: (language) =>
    set((state) => ({
      preferredLanguages: [
        ...state.preferredLanguages.filter(
          (preferredLanguage) => preferredLanguage !== language
        ),
        language,
      ],
    })),
}))

function useTabGroupProps(availableLanguages) {
  let { preferredLanguages, addPreferredLanguage } = usePreferredLanguageStore()
  let [selectedIndex, setSelectedIndex] = useState(0)
  let activeLanguage = [...availableLanguages].sort(
    (a, z) => preferredLanguages.indexOf(z) - preferredLanguages.indexOf(a)
  )[0]
  let languageIndex = availableLanguages.indexOf(activeLanguage)
  let newSelectedIndex = languageIndex === -1 ? selectedIndex : languageIndex
  if (newSelectedIndex !== selectedIndex) {
    setSelectedIndex(newSelectedIndex)
  }

  let { positionRef, preventLayoutShift } = usePreventLayoutShift()

  return {
    as: 'div',
    ref: positionRef,
    selectedIndex,
    onChange: (newSelectedIndex) => {
      preventLayoutShift(() =>
        addPreferredLanguage(availableLanguages[newSelectedIndex])
      )
    },
  }
}

const CodeGroupContext = createContext(false)

interface CodeGroupProps {
  title?: string
  children: JSX.Element | JSX.Element[]
  onChange?: (index: number) => void
  [x: string]: any
}

export function CodeGroup({
  children,
  title,
  onChange,
  ...props
}: CodeGroupProps) {
  let languages = Children.map(children, (child) => getPanelTitle(child.props))
  let tabGroupProps = useTabGroupProps(languages)
  let hasTabs = Children.count(children) > 1
  let Container: any = hasTabs ? Tab.Group : 'div'
  let containerProps = hasTabs ? tabGroupProps : {}

  return (
    <CodeGroupContext.Provider value={true}>
      <Container
        onChange={onChange}
        {...containerProps}
        className="not-prose my-6 overflow-hidden rounded-2xl bg-zinc-100 shadow-md dark:bg-white/[0.01] dark:ring-1 dark:ring-white/10"
      >
        <CodeGroupHeader title={title}>{children}</CodeGroupHeader>
        <CodeGroupPanels {...props}>{children}</CodeGroupPanels>
      </Container>
    </CodeGroupContext.Provider>
  )
}

export function Code({ children, ...props }) {
  let isGrouped = useContext(CodeGroupContext)

  if (isGrouped) {
    return <code {...props} dangerouslySetInnerHTML={{ __html: children }} />
  }

  return <code {...props}>{children}</code>
}

export function Pre({ children, ...props }) {
  let isGrouped = useContext(CodeGroupContext)

  if (isGrouped) {
    return children
  }

  return <CodeGroup {...props}>{children}</CodeGroup>
}

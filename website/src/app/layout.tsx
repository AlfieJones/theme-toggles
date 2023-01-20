'use client'

import { MDXProvider } from '@mdx-js/react'
import '@theme-toggles/core/dist/all/bundle.min.css'
import * as mdxComponents from '@/components/mdx'
import 'highlight.js/styles/github-dark.css'
import '@/styles/tailwind.css'
import { Header } from '@/components/Header'
import { Logo } from '@/components/logo'
import { Navigation } from '@/components/Navigation'
import { SectionProvider } from '@/components/SectionProvider'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Footer } from './Footer'

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const sections = []
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
      </head>
      <body className="antialiased bg-white dark:bg-zinc-900">
        <MDXProvider components={mdxComponents as any}>
          <SectionProvider sections={sections}>
            <div className="lg:ml-72 xl:ml-80">
              <motion.header
                layoutScroll
                className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
              >
                <div className="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pt-4 lg:pb-8 lg:dark:border-white/10 xl:w-80">
                  <div className="hidden lg:flex">
                    <Link href="/" aria-label="Home">
                      <Logo />
                    </Link>
                  </div>
                  <Header />
                  <Navigation className="hidden lg:mt-10 lg:block" />
                </div>
              </motion.header>
              <div className="relative px-4 sm:px-6 lg:px-8">
                <main className="py-16 mx-auto max-w-7xl">{children}</main>
                <Footer />
              </div>
            </div>
          </SectionProvider>
        </MDXProvider>
      </body>
    </html>
  )
}

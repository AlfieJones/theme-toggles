'use client'
import * as toggles from '@theme-toggles/react'
import { useMemo } from 'react'

const keys = Object.keys(toggles)

export function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('disable-transition')
    window.setTimeout(() => {
      document.documentElement.classList.remove('disable-transition')
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode) {
      document.documentElement.style.colorScheme = 'dark'
    } else {
      document.documentElement.style.colorScheme = 'light'
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  const Toggle = useMemo(
    () => toggles[keys[Math.round(Math.random() * keys.length - 1)]],
    []
  )

  return (
    <Toggle
      idPrefix="nav"
      onToggle={toggleMode}
      className="w-6 h-6 text-zinc-900 hover:text-zinc-900/90 dark:text-white dark:hover:text-white/90"
    />
  )
}

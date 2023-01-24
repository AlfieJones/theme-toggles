import '@theme-toggles/core/dist/all/bundle.min.css'
import '@/styles/github-dark.css'
import '@/styles/github-light.css'
import '@/styles/tailwind.css'
import { SectionProvider } from '@/components/SectionProvider'
import { Footer } from './Footer'
import { MotionHeader } from './motionHeader'

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
      document.documentElement.style.colorScheme = 'dark'

    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.style.colorScheme = 'light'
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
        <SectionProvider sections={sections}>
          <div className="lg:ml-72 xl:ml-80">
            <MotionHeader />
            <div className="relative px-4 sm:px-6 lg:px-8">
              <main className="py-16 mx-auto max-w-7xl">{children}</main>
              <Footer />
            </div>
          </div>
        </SectionProvider>
      </body>
    </html>
  )
}

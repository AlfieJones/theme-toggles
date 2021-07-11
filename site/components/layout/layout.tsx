import React, { FC, Fragment } from "react"
import Link from "next/link"
import clsx from "clsx"
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { LayoutProps } from "./layout.props"
import { useRouter } from "next/dist/client/router"
import useTheme from "next-theme"

const navigation = [
  { name: "Toggles", href: "/" },
  { name: "Documentation", href: "/documentation" },
]

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  const router = useRouter()
  const { toggle } = useTheme()

  return (
    <div className="relative overflow-hidden dark:bg-dark-900 min-h-screen">
      <div className="relative pt-6 pb-16 xs:pb-24">
        <Popover>
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-6">
                <nav
                  className="relative flex items-center justify-between h-8 xs:justify-center"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-1 xs:absolute xs:inset-y-0 xs:left-0">
                    <div className="flex items-center justify-between w-full xs:w-auto h-8">
                      <svg
                        onClick={toggle}
                        xmlns="http://www.w3.org/2000/svg"
                        className="inner-moon w-8 h-8 text-gray-700 dark:text-gray-300"
                        width="472.39"
                        height="472.39"
                        fill="currentColor"
                        viewBox="0 0 472.39 472.39"
                      >
                        <g className="toggle-outer">
                          <path d="M403.21,167V69.18H305.38L236.2,0,167,69.18H69.18V167L0,236.2l69.18,69.18v97.83H167l69.18,69.18,69.18-69.18h97.83V305.38l69.18-69.18Zm-167,198.17a129,129,0,1,1,129-129A129,129,0,0,1,236.2,365.19Z" />
                        </g>
                        <g className="toggle-inner">
                          <circle cx="236.2" cy="236.2" r="103.78" />
                        </g>
                      </svg>
                      <div className="-mr-2 flex items-center xs:hidden">
                        <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-300 dark:hover:text-gray-200 hover:text-gray-500 dark:hover:bg-dark-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden xs:flex xs:space-x-10">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className={clsx(
                            "font-medium  hover:text-gray-900 dark:hover:text-white transition-colors",
                            router.pathname === item.href
                              ? "text-gray-900 dark:text-white"
                              : "text-gray-500 dark:text-gray-300"
                          )}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                  <div className="hidden xs:absolute xs:flex xs:items-center xs:justify-end xs:inset-y-0 xs:right-0">
                    <a
                      href="https://github.com/alfiejones/theme-toggles"
                      className="text-gray-400 dark:text-gray-300 dark:hover:text-gray-100 hover:text-gray-500 transition-colors"
                    >
                      <span className="sr-only">Theme toggles on GitHub</span>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </nav>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right xs:hidden"
                >
                  <div className="rounded-lg shadow-md dark:bg-dark-800 ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <a
                        href="https://github.com/alfiejones/theme-toggles"
                        className="text-gray-400 dark:text-gray-300 dark:hover:text-gray-100 hover:text-gray-500 transition-colors"
                      >
                        <span className="sr-only">Theme toggles on GitHub</span>
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                          ></path>
                        </svg>
                      </a>
                      <div className="-mr-2">
                        <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={clsx(
                            "block px-3 py-2 rounded-md text-base font-medium hover:text-gray-900 hover:bg-gray-50",
                            router.pathname === item.href
                              ? "text-gray-900"
                              : "text-gray-500"
                          )}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <main className="mt-12 mx-auto max-w-7xl px-4 sm:mt-24">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout

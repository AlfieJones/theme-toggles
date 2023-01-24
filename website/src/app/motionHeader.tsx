'use client'

import { Header } from '@/components/Header'
import { Logo } from '@/components/logo'
import { Navigation } from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function MotionHeader() {
  return (
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
  )
}

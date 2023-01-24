import { Docs } from '@/components/Docs'
import { Heading } from '@/components/Heading'
import { HeroPattern } from '@/components/HeroPattern'
import { Toggles } from './Toggles'

export default function Index() {
  return (
    <div className="mx-auto max-w-7xl">
      <HeroPattern />
      <div className="py-12 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-700 dark:text-white md:text-5xl">
          <span className="block pb-1 text-transparent bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text sm:pb-2 md:pb-3">
            Implementing theme toggles
          </span>
          <span className="block">was never easier</span>
        </h1>
        <p className="max-w-md mx-auto mt-5 text-base text-gray-500 dark:text-gray-200 sm:text-lg md:mt-7 md:max-w-3xl md:text-lg">
          Theme toggles is a collection of awesome, easy to use, animated
          toggles; designed for switching between light and dark modes.
          It&apos;s a modular library which aims to provide ample customization
          where needed. Works great utility CSS frameworks such as Tailwindcss.
        </p>
      </div>
      <Toggles />
      <Docs />
    </div>
  )
}

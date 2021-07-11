import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-700 dark:text-white sm:text-5xl md:text-6xl">
        <span className="bg-gradient-to-r text-transparent bg-clip-text from-blue-600 to-[#3eadcf] block pb-1 sm:pb-2 md:pb-3">
          Implementing theme toggles
        </span>
        <span className="block">was never easier</span>
      </h1>
      <p className="mt-5 max-w-md mx-auto text-base text-gray-500 dark:text-gray-200 sm:text-lg md:mt-7 md:text-xl md:max-w-3xl">
        Theme toggles is a collection of awesome easy to use, animated toggles;
        designed for switching between light and dark modes. It&apos;s a highly
        customisable and modular library which aims to provide an unopinionated
        design. Even works great with Tailwind CSS.
      </p>
    </div>
  )
}

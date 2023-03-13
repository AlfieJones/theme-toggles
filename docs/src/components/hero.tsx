export default function Hero() {
  return (
    <div className="mt-24 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-neutral-700 dark:text-white md:text-5xl lg:text-7xl">
        <span className="bg-gradient-to-r text-transparent bg-clip-text from-blue-600 to-[#3eadcf] block pb-1 sm:pb-2 md:pb-3">
          Implementing theme toggles
        </span>
        <span className="block">was never easier</span>
      </h1>
      <p className="max-w-md max-w-3xl mx-auto mt-5 text-md text-neutral-500 dark:text-neutral-300 md:text-lg md:mt-7">
        Theme toggles is a collection of awesome, easy to use, animated toggles;
        designed for switching between light and dark modes. It's a modular
        library which aims to provide ample customization where needed. Works
        great utility CSS frameworks such as Tailwindcss.
      </p>
    </div>
  );
}

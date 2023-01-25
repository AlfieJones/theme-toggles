import Button from '@/components/Button2'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/docs/html',
    name: 'HTML',
    description:
      'Framework agnostic guide to adding Theme Toggles to your site',
  },
  {
    href: '/docs/react',
    name: 'React',
    description: 'React React React React',
  },
  {
    href: '/docs/svelte',
    name: 'Svelte',
    description: 'Svelte Svelte SvelteSvelteSvelte Svelte',
  },
  {
    href: '/docs/vue',
    name: 'Vue',
    description: 'Vue vue vue vue vue',
  },
]

export function Docs() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides">
        Framework documentation
      </Heading>
      <div className="grid grid-cols-1 gap-8 pt-10 mt-4 border-t not-prose auto-rows-max border-zinc-900/5 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {guides.map((guide) => (
          <div key={guide.href} className="flex flex-col h-full">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 mb-auto text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

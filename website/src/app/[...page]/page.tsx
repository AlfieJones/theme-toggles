import path from 'path'
import { promises as fs } from 'fs'
import { MDXRemote } from 'next-mdx-remote/rsc'
import * as mdxComponents from '@/components/mdx'
// import rehypeHighlight from 'rehype-highlight'
import { visit } from 'unist-util-visit'
import { mdxAnnotations } from 'mdx-annotations'
import hljs from 'highlight.js'

export const dynamicParams = false

function rehypeShiki() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'pre' && node.children[0]?.tagName === 'code') {
        let codeNode = node.children[0]
        let textNode = codeNode.children[0]

        node.properties.code = textNode.value
        const language = node.properties.annotation
          .replaceAll(' ', '')
          .match(/(language:'\w*')/g)

        if (language) {
          textNode.value = hljs.highlight(node.properties.code, {
            language: language[0]
              .replaceAll("'", '')
              .replaceAll('language:', ''),
          }).value
        } else {
          textNode.value = hljs.highlightAuto(node.properties.code).value
        }
      }
    })
  }
}

// recursively read all files in a directory
async function readDir(dir: string) {
  const dirents = await fs.readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = path.resolve(dir, dirent.name)
      return dirent.isDirectory() ? readDir(res) : res
    })
  )
  return Array.prototype.concat(...files)
}

export async function generateStaticParams() {
  const files = await readDir(path.join(process.cwd(), '..', 'content'))
  return files.map((file) => ({
    page: file
      .replace(path.join(process.cwd(), '..', 'content'), '')
      .replace('.mdx', '')
      .split(path.sep)
      .slice(1),
  }))
}

async function getPageContent(route: string[]) {
  const pageContent = await fs.readFile(
    path.join(process.cwd(), '..', 'content', ...route).concat('.mdx'),
    'utf8'
  )
  return pageContent
}

export default async function Page({ params }: { params: { page: string[] } }) {
  const data = await getPageContent(params.page)
  return (
    <article className="pt-6 prose dark:prose-invert">
      {/** @ts-ignore */}
      <MDXRemote
        options={{
          mdxOptions: {
            remarkPlugins: [mdxAnnotations.remark],
            rehypePlugins: [mdxAnnotations.rehype, rehypeShiki],
            recmaPlugins: [mdxAnnotations.recma],
          },
        }}
        source={data}
        components={{ ...mdxComponents } as any}
      />
    </article>
  )
}

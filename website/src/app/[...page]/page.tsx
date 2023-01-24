import path from 'path'
import { promises as fs } from 'fs'
import { MDXRemote } from 'next-mdx-remote/rsc'
import * as mdxComponents from '@/components/mdx'
// import rehypeHighlight from 'rehype-highlight'
import { visit } from 'unist-util-visit'
import { mdxAnnotations } from 'mdx-annotations'
import hljs from 'highlight.js'

let highlighter

function rehypeShiki() {
  return async (tree) => {
    highlighter = highlighter ?? (await hljs)

    visit(tree, 'element', (node) => {
      if (node.tagName === 'pre' && node.children[0]?.tagName === 'code') {
        let codeNode = node.children[0]
        let textNode = codeNode.children[0]

        node.properties.code = textNode.value

        if (node.properties.annotation.language) {
          textNode.value = hljs.highlight(node.properties.code, {
            language: node.properties.annotation.language,
          }).value
        } else {
          textNode.value = hljs.highlightAuto(node.properties.code).value
        }

        console.log(node)

        // if (node.properties.language) {
        //   let tokens = highlighter.codeToThemedTokens(
        //     textNode.value,
        //     node.properties.language
        //   )

        //   textNode.value = shiki.renderToHtml(tokens, {
        //     elements: {
        //       pre: ({ children }) => children,
        //       code: ({ children }) => children,
        //       line: ({ children }) => `<span>${children}</span>`,
        //     },
        //   })
        // }
      }
    })
  }
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
    <article className="prose dark:prose-invert">
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

import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import { getDocs } from "@/lib";
import path from "path";

hljs.registerLanguage("typescript", typescript);

interface DocsProps {
  params: { pageName: string[] };
}

const components = {
  em: (props: any) => <i {...props} />,
};

export async function generateStaticParams() {
  const docs = await getDocs(path.join(__dirname, "../../../../../../../docs"));

  return docs.map((doc) => ({
    pageName: doc,
  }));
}

export default async function Docs({ params }: DocsProps) {
  console.log(params);

  const code = String(
    await compile("# hi", { outputFormat: "function-body", development: false })
  );

  const html = hljs.highlight(
    `
    function test() { 
      const hi = 'hello'; 
      return (<h1>{hi}</h1>)
    }
    `,
    {
      language: "typescript",
    }
  ).value;

  console.log(html);

  const { default: Content } = await run(code, runtime);

  // return (
  //   <pre>
  //     <code
  //       className="language-typescript"
  //       dangerouslySetInnerHTML={{
  //         __html: html,
  //       }}
  //     ></code>
  //   </pre>
  // );

  return <Content components={components} />;

  // return <div className={inter.className}></div>;
}

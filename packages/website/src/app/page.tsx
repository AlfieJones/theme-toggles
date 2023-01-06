import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

const components = {
  em: (props: any) => <i {...props} />,
};

export default async function Home() {
  const code = String(
    await compile("# hi", { outputFormat: "function-body", development: false })
  );

  const { default: Content } = await run(code, runtime);

  return "hi";

  // return <div className={inter.className}></div>;
}

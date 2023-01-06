import "highlight.js/styles/github.css";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="prose dark:prose-dark">{children}</div>;
}

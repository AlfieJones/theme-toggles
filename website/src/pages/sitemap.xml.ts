import { TOGGLE_SLUGS } from "../components/Toggle";

export const prerender = true;

const site = "https://toggles.dev";

export function GET() {
  const urls = [
    { path: "/", priority: "1.0" },
    ...TOGGLE_SLUGS.map((slug) => ({
      path: `/toggles/${slug}`,
      priority: "0.8",
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ path, priority }) => `  <url>
    <loc>${site}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}

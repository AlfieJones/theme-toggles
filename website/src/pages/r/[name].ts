import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = ({ params, redirect }) => {
  if (!params.name) {
    return new Response(null, { status: 404 });
  }

  return redirect(`/r/${encodeURIComponent(params.name)}.json`, 308);
};

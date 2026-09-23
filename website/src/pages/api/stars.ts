import type { APIRoute } from "astro";
import { getStars } from "../../lib/github";

export const GET: APIRoute = async ({ cache }) => {
  const stars = await getStars();
  if (stars === null) {
    return Response.json(
      { error: "GitHub stars unavailable" },
      { status: 503 },
    );
  }

  cache.set({ maxAge: 60, swr: 3600 });
  return Response.json({ stars });
};

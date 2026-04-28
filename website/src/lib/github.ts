export async function getStars(): Promise<number | null> {
  try {
    const headers: HeadersInit = { Accept: "application/vnd.github+json" };
    const token = process.env.GITHUB_TOKEN;
    if (token) headers["Authorization"] = `Bearer ${token}`;
    const res = await fetch(
      "https://api.github.com/repos/alfiejones/theme-toggles",
      { headers },
    );
    const data = await res.json();
    return data.stargazers_count ?? null;
  } catch {
    return null;
  }
}

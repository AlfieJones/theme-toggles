export async function getStars(): Promise<number | null> {
  try {
    const res = await fetch("https://api.github.com/repos/alfiejones/theme-toggles");
    const data = await res.json();
    return data.stargazers_count ?? null;
  } catch {
    return null;
  }
}

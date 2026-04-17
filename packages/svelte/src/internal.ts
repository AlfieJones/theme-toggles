let nextId = 0;

export function createToggleId(slug: string): string {
  nextId += 1;
  return `${slug}-${nextId}`;
}

declare module "bun:test" {
  export function describe(name: string, fn: () => void): void;
  export function it(name: string, fn: () => void | Promise<void>): void;
  export function expect(value: unknown): {
    toBe(expected: unknown): void;
    toEqual(expected: unknown): void;
    toContain(expected: unknown): void;
    toBeDefined(): void;
    toHaveLength(length: number): void;
    not: {
      toBe(expected: unknown): void;
    };
  };
}

interface ImportMeta {
  dir: string;
  resolve(specifier: string): string;
}

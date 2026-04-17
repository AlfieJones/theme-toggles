declare module "node:path" {
  const path: {
    dirname(pathname: string): string;
    join(...parts: string[]): string;
  };

  export default path;
}

declare module "node:url" {
  export function fileURLToPath(url: string | URL): string;
}

declare module "node:fs/promises" {
  export function mkdir(
    path: string,
    options?: { recursive?: boolean },
  ): Promise<string | undefined>;
  export function readFile(
    path: string,
    encoding: BufferEncoding,
  ): Promise<string>;
  export function writeFile(path: string, data: string): Promise<void>;
}

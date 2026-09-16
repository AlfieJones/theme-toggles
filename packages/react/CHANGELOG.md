# @theme-toggles/react

## 5.0.3

### Patch Changes

- ad8e0b5: Move shadcn to development dependencies so it is not installed by package consumers, and add React as a development dependency for local tooling while retaining it as a peer dependency for consumers.

## 5.0.2

### Patch Changes

- bef4a3d: Namespace generated Tailwind cascade layers to prevent conflicts with consumer styles.

## 5.0.1

### Patch Changes

- 510faa4: Publish compiled JavaScript and TypeScript declarations instead of raw TypeScript sources so the package works with Next.js Turbopack. Mark React components as client components for App Router compatibility.

## 5.0.0

### Major Changes

- 3ae8f80: New update toggles, new install methods, Tailwind CSS support, and shadcn/ui support
- 10c115a: Improved designs, tailwindcss support, copy and paste install and shadcn support

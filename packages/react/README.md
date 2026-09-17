# @theme-toggles/react

Animated theme toggles for React.

## Install

```bash
npm install @theme-toggles/react
```

## Use

```tsx
import { useState } from "react";
import { Classic } from "@theme-toggles/react";
import "@theme-toggles/react/styles/classic.css";

export function ThemeToggle() {
  const [toggled, setToggled] = useState(false);

  // Optionally omit `toggled` if your app uses `.dark` on its root to switch themes.
  return (
    <Classic toggled={toggled} onClick={() => setToggled((value) => !value)} />
  );
}
```

## shadcn/ui

Install an individual toggle with the shadcn CLI:

```bash
npx shadcn@latest add @toggles/classic
```

Browse the [full collection of toggles](https://toggles.dev).

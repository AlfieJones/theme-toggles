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

  // Omit `toggled` if your app root uses `.dark`.
  return (
    <Classic toggled={toggled} onClick={() => setToggled((value) => !value)} />
  );
}
```

## shadcn/ui

Install an individual toggle with the shadcn CLI:

```bash
npx shadcn@latest add https://toggles.dev/r/classic
```

Browse the [full collection of toggles](https://toggles.dev).

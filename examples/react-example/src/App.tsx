import { useState } from "react";
import {
  Around,
  Classic,
  DarkInner,
  DarkSide,
  Eclipse,
  Expand,
  HalfSun,
  Horizon,
  InnerMoon,
  Lightbulb,
  Simple,
  Within,
} from "@theme-toggles/react";
import "@theme-toggles/react/styles.css";
import "./index.css";

const TOGGLES = [
  { name: "Classic", Component: Classic },
  { name: "Around", Component: Around },
  { name: "DarkInner", Component: DarkInner },
  { name: "DarkSide", Component: DarkSide },
  { name: "Eclipse", Component: Eclipse },
  { name: "Expand", Component: Expand },
  { name: "HalfSun", Component: HalfSun },
  { name: "Horizon", Component: Horizon },
  { name: "InnerMoon", Component: InnerMoon },
  { name: "Lightbulb", Component: Lightbulb },
  { name: "Simple", Component: Simple },
  { name: "Within", Component: Within },
] as const;

function ToggleCard({ name, Component }: (typeof TOGGLES)[number]) {
  const [dark, setDark] = useState(false);

  return (
    <div className={`card${dark ? " dark" : ""}`}>
      <Component onClick={() => setDark((d) => !d)} />
      <span>{name}</span>
    </div>
  );
}

function App() {
  return (
    <main>
      <h1>Theme Toggles</h1>
      <div className="grid">
        {TOGGLES.map((toggle) => (
          <ToggleCard key={toggle.name} {...toggle} />
        ))}
      </div>
    </main>
  );
}

export default App;

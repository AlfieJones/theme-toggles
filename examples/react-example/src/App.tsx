import { useState } from "react";
import {
  Around,
  Classic,
  DarkInner,
  DarkSide,
  Eclipse,
  Expand,
  Folded,
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
  { name: "Folded", Component: Folded },
  { name: "HalfSun", Component: HalfSun },
  { name: "Horizon", Component: Horizon },
  { name: "InnerMoon", Component: InnerMoon },
  { name: "Lightbulb", Component: Lightbulb },
  { name: "Simple", Component: Simple },
  { name: "Within", Component: Within },
] as const;

const SIZES = [16, 24, 32, 48, 64, 96, 128];

function ToggleCard({ name, Component }: (typeof TOGGLES)[number]) {
  const [dark, setDark] = useState(false);

  return (
    <div className={`card${dark ? " dark" : ""}`}>
      <Component onClick={() => setDark((d) => !d)} />
      <span>{name}</span>
    </div>
  );
}

function SizeRow({ name, Component }: (typeof TOGGLES)[number]) {
  const [dark, setDark] = useState(false);

  return (
    <div className="size-row">
      <span className="size-row-name">{name}</span>
      <div className="size-row-toggles">
        {SIZES.map((size) => (
          <div key={size} className="size-cell">
            <Component
              style={{ fontSize: size }}
              className={dark ? "dark" : "light"}
              onClick={() => setDark((d) => !d)}
            />
            <span className="size-label">{size}px</span>
          </div>
        ))}
      </div>
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
      <h2>Sizes</h2>
      <div className="sizes-section">
        {TOGGLES.map((toggle) => (
          <SizeRow key={toggle.name} {...toggle} />
        ))}
      </div>
    </main>
  );
}

export default App;

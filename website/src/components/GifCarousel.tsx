import { useState, useEffect, useRef, useCallback } from "react";
import {
  Around,
  Classic,
  DarkInner,
  DarkSide,
  Eclipse,
  Expand,
  Spin,
  HalfSun,
  Horizon,
  InnerMoon,
  Lightbulb,
  LightSwitch,
  Simple,
  Within,
} from "@theme-toggles/react";

const TOGGLE_SLUGS = [
  "classic",
  "around",
  "dark-inner",
  "dark-side",
  "eclipse",
  "expand",
  "spin",
  "half-sun",
  "horizon",
  "inner-moon",
  "lightbulb",
  "light-switch",
  "simple",
  "within",
] as const;

const TOGGLES: Record<string, React.ComponentType<any>> = {
  around: Around,
  classic: Classic,
  "dark-inner": DarkInner,
  "dark-side": DarkSide,
  eclipse: Eclipse,
  expand: Expand,
  spin: Spin,
  "half-sun": HalfSun,
  horizon: Horizon,
  "inner-moon": InnerMoon,
  lightbulb: Lightbulb,
  "light-switch": LightSwitch,
  simple: Simple,
  within: Within,
};

const STATION_SCALE: Record<number, number> = {
  [-2]: 0.2,
  [-1]: 0.4,
  [0]: 0.6,
  [1]: 0.85,
  [2]: 1.3,
  [3]: 0.85,
  [4]: 0.6,
  [5]: 0.4,
  [6]: 0.2,
};

const STATION_OPACITY: Record<number, number> = {
  [-2]: 0,
  [-1]: 0,
  [0]: 0.5,
  [1]: 0.8,
  [2]: 1,
  [3]: 0.8,
  [4]: 0.5,
  [5]: 0,
  [6]: 0,
};

const STATION_GAP_EM = 0.18;

function getStationDistance(from: number, to: number) {
  const fromScale = STATION_SCALE[from] ?? STATION_SCALE[6];
  const toScale = STATION_SCALE[to] ?? STATION_SCALE[6];
  const averageToggleSize = (fromScale + toScale) / 2;
  const scaledGap = STATION_GAP_EM * Math.min(fromScale, toScale);

  return averageToggleSize + scaledGap;
}

const STATION_OFFSET: Record<number, number> = {
  [2]: 0,
};

for (let station = 3; station <= 6; station += 1) {
  STATION_OFFSET[station] =
    STATION_OFFSET[station - 1] + getStationDistance(station - 1, station);
}

for (let station = 1; station >= -2; station -= 1) {
  STATION_OFFSET[station] =
    STATION_OFFSET[station + 1] - getStationDistance(station, station + 1);
}

const STATION_CONFIG: Record<
  number,
  { offset: number; scale: number; opacity: number }
> = Object.fromEntries(
  Object.keys(STATION_SCALE).map((station) => {
    const stationNumber = Number(station);

    return [
      stationNumber,
      {
        offset: STATION_OFFSET[stationNumber],
        scale: STATION_SCALE[stationNumber],
        opacity: STATION_OPACITY[stationNumber],
      },
    ];
  }),
);

const SHIFT_DURATION = 600;
const TOGGLE_DURATION = 500;
const PAUSE_AFTER_TOGGLE = 400;
const PAUSE_AFTER_SHIFT = 400;

type CarouselItem = {
  id: number;
  slug: string;
  station: number;
  toggled: boolean;
};

function CarouselToggle({
  slug,
  station,
  toggled,
}: {
  slug: string;
  station: number;
  toggled: boolean;
}) {
  const Component = TOGGLES[slug];
  if (!Component) return null;

  const config = STATION_CONFIG[station] ?? STATION_CONFIG[6];

  return (
    <div
      className="absolute left-1/2 top-1/2 pointer-events-none"
      style={{
        fontSize: "clamp(48px, 12vw, 80px)",
        transform: `translate(calc(-50% + ${config.offset}em), -50%)`,
        opacity: config.opacity,
        transition: `transform ${SHIFT_DURATION}ms cubic-bezier(0.16, 1, 0.3, 1), opacity ${SHIFT_DURATION}ms ease`,
      }}
    >
      <div
        style={{
          transform: `scale(${config.scale})`,
          transition: `transform ${SHIFT_DURATION}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        }}
      >
        <Component className={toggled ? "dark" : "light"} />
      </div>
    </div>
  );
}

export function GifCarousel() {
  const idCounterRef = useRef(6);
  const slugIndexRef = useRef(4);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const [items, setItems] = useState<CarouselItem[]>(() => [
    { id: 0, slug: TOGGLE_SLUGS[12], station: 0, toggled: false },
    { id: 1, slug: TOGGLE_SLUGS[13], station: 1, toggled: false },
    { id: 2, slug: TOGGLE_SLUGS[0], station: 2, toggled: false },
    { id: 3, slug: TOGGLE_SLUGS[1], station: 3, toggled: false },
    { id: 4, slug: TOGGLE_SLUGS[2], station: 4, toggled: false },
    { id: 5, slug: TOGGLE_SLUGS[3], station: 5, toggled: false },
  ]);

  const clearAllTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  const schedule = useCallback((fn: () => void, delay: number) => {
    const t = setTimeout(fn, delay);
    timeoutsRef.current.push(t);
    return t;
  }, []);

  const runCycle = useCallback(() => {
    clearAllTimeouts();

    // Phase 1: Toggle center item
    setItems((prev) => {
      const center = prev.find((i) => i.station === 2);
      if (!center) return prev;

      return prev.map((i) =>
        i.id === center.id ? { ...i, toggled: true } : i,
      );
    });

    // Phase 2: Shift everything left
    schedule(() => {
      setItems((prev) => {
        const shifted = prev.map((item) => ({
          ...item,
          station: item.station - 1,
        }));

        const nextSlug =
          TOGGLE_SLUGS[slugIndexRef.current % TOGGLE_SLUGS.length];
        slugIndexRef.current += 1;

        return [
          ...shifted,
          {
            id: idCounterRef.current++,
            slug: nextSlug,
            station: 5,
            toggled: false,
          },
        ];
      });

      // Phase 3: Remove exited items and schedule next cycle
      schedule(() => {
        setItems((prev) => prev.filter((item) => item.station >= 0));
        schedule(runCycle, PAUSE_AFTER_SHIFT);
      }, SHIFT_DURATION);
    }, TOGGLE_DURATION + PAUSE_AFTER_TOGGLE);
  }, [clearAllTimeouts, schedule]);

  useEffect(() => {
    const t = setTimeout(runCycle, 1200);
    timeoutsRef.current.push(t);
    return () => clearAllTimeouts();
  }, [runCycle, clearAllTimeouts]);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {items.map((item) => (
        <CarouselToggle
          key={item.id}
          slug={item.slug}
          station={item.station}
          toggled={item.toggled}
        />
      ))}
    </div>
  );
}

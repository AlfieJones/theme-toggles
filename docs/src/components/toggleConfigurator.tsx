import * as toggles from "@theme-toggles/react";
import { useState } from "react";
import { camelCase, upperFirst } from "lodash-es";
import { Switch } from "@headlessui/react";
import * as Slider from "@radix-ui/react-slider";
import clsx from "clsx";

export function ToggleConfiguration({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  const [toggled, onToggle] = useState(false);

  const Toggle = toggles[upperFirst(camelCase(name))];

  const [duration, setDuration] = useState(500);
  const [reversed, setReversed] = useState(false);

  console.log(name);

  return (
    <div className="z-0 flex flex-col mt-12">
      <div
        className={clsx(
          "relative flex gap-16 px-8 pt-8 pb-5 mt-4 grow rounded-t-2xl dark:nx-bg-primary-300/10 nx-text-gray-700 dark:nx-text-gray-200 nx-bg-primary-700/5 z-10 relative"
        )}
      >
        <span className="absolute inset-0 dark:nx-bg-primary-300/10 nx-bg-primary-700/5 rounded-t-2xl -z-10" />
        <div className="flex items-center justify-center w-full pr-16">
          <Toggle
            idPrefix="preview"
            reversed={reversed}
            duration={duration}
            className="text-[10rem]"
            toggled={toggled}
            onToggle={onToggle}
          />
        </div>

        <div className="flex flex-col w-full max-w-sm py-4 space-y-4 align-end grow">
          <Switch.Group className="flex justify-between w-full" as="div">
            <Switch.Label className="block text-sm">
              Reverse
            </Switch.Label>

            <Switch
              checked={reversed}
              onChange={setReversed}
              className={clsx(
                reversed ? "bg-blue-500" : "bg-neutral-200 dark:bg-neutral-600",
                "relative inline-flex h-6 w-11 items-center rounded-full"
              )}
            >
              <span className="sr-only">Reverse toggle</span>
              <span
                className={clsx(
                  "inline-block  transform rounded-full bg-white transition-all",
                  reversed ? "h-4 w-4 translate-x-6" : "h-3.5 w-3.5 translate-x-1"
                )}
              />
            </Switch>
          </Switch.Group>
          <div>
            <div className="flex justify-between">
              <label htmlFor="duration-slider" className="block text-sm">
                Duration
              </label>
              <p className="">{duration}ms</p>
            </div>
            <Slider.Root
              className="relative flex items-center w-full h-5 select-none touch-action-none"
              defaultValue={[500]}
              max={2000}
              onValueChange={(value) => setDuration(value[0])}
              step={50}
              id="duration-slider"
            >
              <Slider.Track className="relative h-1 rounded-full cursor-pointer bg-neutral-200 dark:bg-neutral-600 grow">
                <Slider.Range className="absolute h-full bg-blue-500 rounded-full" />
              </Slider.Track>
              <Slider.Thumb className="block w-5 h-5 bg-blue-500 rounded-full shadow-md cursor-grab focus:outline-none focus:ring focus:ring-blue-400" />
            </Slider.Root>
          </div>
        </div>
      </div>

      <div className="z-10 config">{children}</div>
    </div>
  );
}

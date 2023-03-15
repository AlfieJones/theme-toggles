import * as Toggles from "@theme-toggles/react";
import { useId, useState } from "react";
import ToggleMeta from "../../toggles.config.mjs";
import clsx from "clsx";
import Link from "next/link";

function Toggle({ name }: { name: string }) {
  const ToggleComponent = Toggles[name];

  const [toggled, setToggled] = useState(false);

  const id = useId();

  const displayName = ToggleMeta[name]?.displayName;

  return (
    <div className="rounded w-full max-w-[17rem] overflow-hidden shadow hover:shadow-lg transition">
      <ToggleComponent
        className={clsx(
          "relative z-10 block h-full mx-auto dark:text-gray-900 text-w-800 !outline-none p-6 h-52 w-full",
          ToggleMeta[name]?.classesGrid
        )}
        idPrefix={id}
        toggled={toggled}
        onToggle={setToggled}
        svgProps={{
          height: "100%",
          width: "100%",
        }}
      />
      <div className="p-4 bg-white rounded-b dark:bg-neutral-800/75 ">
        <h3 className="block pb-2 text-xl font-semibold text-neutral-700 dark:text-neutral-50">
          {displayName}
        </h3>
        <Link
          href={`/docs/toggle/${ToggleMeta[name].name}`}
          className="font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
        >
          See the code
        </Link>
      </div>
    </div>
  );
}

export default function ToggleList() {
  console.log(ToggleMeta);
  return (
    <div className="px-4 mx-auto my-28 max-w-7xl">
      <h2 className="mb-12 text-4xl font-semibold text-center text-neutral-700 sm:text-left dark:text-neutral-50">
        Our toggle collection
      </h2>
      <ul
        role="list"
        className="grid grid-cols-1 gap-8 min-[400px]:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4"
      >
        {Object.keys(ToggleMeta).map((name) => (
          <li key={name} className="flex flex-col items-center">
            <Toggle name={name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

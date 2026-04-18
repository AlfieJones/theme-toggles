import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import clsx from "clsx";

export const CardSpotlight = ({
  children,
  radius = 350,
  colors = [
    [59, 130, 246],
    [139, 92, 246],
  ],
  className,
  ...props
}: {
  radius?: number;
  colors?: number[][];
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [r1, g1, b1] = colors[0];
  const [r2, g2, b2] = colors[1] ?? colors[0];
  const hoverBg = `linear-gradient(135deg, rgb(${r1},${g1},${b1}), rgb(${r2},${g2},${b2}))`;

  return (
    <div
      className={clsx("group/spotlight relative", className)}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute z-0 inset-0 opacity-0 transition duration-300 group-hover/spotlight:opacity-40"
        style={{
          background: hoverBg,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
};

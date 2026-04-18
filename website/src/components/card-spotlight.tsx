import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { CanvasRevealEffect } from "./canvas-reveal-effect";
import clsx from "clsx";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "transparent",
  colors = [
    [59, 130, 246],
    [139, 92, 246],
  ],
  className,
  ...props
}: {
  radius?: number;
  color?: string;
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

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  return (
    <div
      className={clsx("group/spotlight relative", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        <CanvasRevealEffect
          animationSpeed={5}
          flickerFrequency={500.0}
          containerClassName={`bg-transparent absolute inset-0 pointer-events-none transition-opacity duration-300 ${isHovering ? "opacity-70" : "opacity-0"}`}
          colors={colors}
          dotSize={3}
          showGradient={false}
        />
      </motion.div>
      {children}
    </div>
  );
};

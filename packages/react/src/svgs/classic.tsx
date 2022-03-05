import React, { CSSProperties, FC } from "react";
import { SVGProps } from ".";
import render from "../render";



const Classic: FC<SVGProps> = ({
    toggled,
    duration,
    reversed
}) => {


    const delay = duration / 5;

    const svgStyles: CSSProperties = {
        transitionProperty: `opacity, transform`,
        transitionTimingFunction: "cubic-bezier(0, 0, .15, 1.25)",
        transitionDuration: `${duration}ms`,
        transformOrigin: "center",
        transitionDelay: `${delay}ms`,
    }

    const cutoutStyles: CSSProperties = {
        transitionDelay: toggled ? `${delay}ms` : "0ms",
        transform: toggled ? "translate(-7px, 10px)" : "none",
    }

    const cutoutStylesReversed: CSSProperties = {
        ...cutoutStyles,
        transform: toggled ? "translate(7px, 10px)" : "none",
    }

    const rayStyles: CSSProperties = {
        transform: toggled? "scale(0.5) rotate(45deg)" : "none",
        opacity: toggled? "0" : "",
        transitionDelay: "0ms",
    }

    return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      strokeLinecap="round"
      style={svgStyles}
      fill="currentColor"
      viewBox="0 0 32 32"
    >
      <mask id="classic_mask" color="#000">
        <rect width={32} height={32} fill="#fff" />
        <circle cx={reversed? 2 : 30} cy={2} r={8} style={reversed? cutoutStylesReversed : cutoutStyles} />
      </mask>
      <mask id="sun_rays_mask" color="#000">
        <rect width="32" height="32" fill="#fff" />
        <circle cx="16" cy="16" r="9.34" />
      </mask>
      <circle
        mask="url(#classic_mask)"
        fill="currentColor"
        cx={16}
        cy={16}
        r={9.34}
      />
      <g mask="url(#sun_rays_mask)">
        <line style={rayStyles} stroke="currentColor" x1={16} y1={5.5} x2={16} y2={1.5} />
        <line style={rayStyles} stroke="currentColor" x1={16} y1={30.5} x2={16} y2={26.5} />
        <line style={rayStyles} stroke="currentColor" x1={1.5} y1={16} x2={5.5} y2={16} />
        <line style={rayStyles} stroke="currentColor" x1={26.5} y1={16} x2={30.5} y2={16} />
        <line style={rayStyles} stroke="currentColor" x1={23.4} y1={8.6} x2={26.2} y2={5.8} />
        <line style={rayStyles} stroke="currentColor" x1={5.7} y1={26.3} x2={8.6} y2={23.4} />
        <line style={rayStyles} stroke="currentColor" x1={5.8} y1={5.8} x2={8.6} y2={8.6} />
        <line style={rayStyles} stroke="currentColor" x1={23.4} y1={23.4} x2={26.3} y2={26.3} />
      </g>
    </svg>
  )
}

export default render(Classic);
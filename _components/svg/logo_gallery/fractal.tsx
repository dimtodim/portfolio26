import React from "react";

interface FractalProps extends React.SVGProps<SVGSVGElement> {
  fillColor?: string;
  bgColor?: string;
}

export default function Fractal({
  fillColor,
  bgColor,
  className,
  ...props
}: FractalProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 960 960"
      fill={fillColor || "currentColor"}
      className={className}
      {...props}
    >
      <rect
        id="bg"
        fill={bgColor || "var(--bg-light)"}
        width="960"
        height="960"
      />

      <g id="fractal" fill="var(--text)">
        <polygon points="486.44 434.04 579.25 341.22 486.44 341.22 393.62 341.22 300.81 434.04 300.81 526.85 300.81 619.67 393.62 526.85 393.62 553.37 486.44 460.56 393.62 460.56 393.62 434.04 486.44 434.04" />
        <polygon points="473.18 526.85 380.37 619.67 473.18 619.67 565.99 619.67 658.81 526.85 658.81 434.04 658.81 341.22 565.99 434.04 565.99 407.52 473.18 500.33 565.99 500.33 565.99 526.85 473.18 526.85" />
      </g>
    </svg>
  );
}

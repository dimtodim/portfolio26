import React from "react";

interface LogoGridCrveniSvgProps extends React.SVGProps<SVGSVGElement> {
  gridColor?: string;
  logoColor?: string;
  strokeWidth?: number;
}

export default function LogoGridCrveniSvg({
  gridColor = "var(--color-red-500)",
  logoColor = "var(--color-amber-500)",
  strokeWidth = 1,
  ...props
}: LogoGridCrveniSvgProps) {
  return (
    <svg
      id="logo_horizontal"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 529 289"
      {...props}
    >
      <g fill={logoColor}>
        <path d="M264.5,24.5c-39.26,0-74.11,18.85-96,47.99V24.5H24.5v24h47.99c-29.14,21.89-47.99,56.74-47.99,96h24c0-53.02,42.98-96,96-96v96h24c0-53.02,42.98-96,96-96v96h24c0-8.29,1.05-16.33,3.02-24h92.98v24h24V24.5h-144ZM288.5,72.49v-23.99h23.99c-9.08,6.82-17.17,14.91-23.99,23.99ZM384.5,96.5h-83.15c16.6-28.69,47.62-48,83.15-48h0v48Z" />
      </g>
      <g stroke={gridColor} strokeWidth={strokeWidth}>
        <circle cx="144.5" cy="144.5" r="120" fill="none" />
        <circle cx="144.5" cy="144.5" r="96" fill="none" />
        <circle cx="264.5" cy="144.5" r="120" fill="none" />
        <circle cx="264.5" cy="144.5" r="96" fill="none" />
        <circle cx="384.5" cy="144.5" r="120" fill="none" />
        <circle cx="384.5" cy="144.5" r="96" fill="none" />
        <rect
          x="336.5"
          y="72.5"
          width="120"
          height="24"
          transform="translate(481 -312) rotate(90)"
          fill="none"
        />
        <line x1="144.5" y1=".5" x2="144.5" y2="288.49" />
        <line x1="168.5" y1=".5" x2="168.5" y2="288.49" />
        <line x1="264.5" y1=".5" x2="264.5" y2="288.49" />
        <line x1="288.5" y1=".5" x2="288.5" y2="288.5" />
        <line x1="384.5" y1=".5" x2="384.5" y2="288.5" />
        <line x1="408.5" y1=".5" x2="408.5" y2="288.5" />
        <rect x="24.5" y="24.5" width="480" height="240" fill="none" />
        <rect x="24.5" y="96.5" width="384" height="24" fill="none" />
        <rect x="24.5" y="72.5" width="384" height="24" fill="none" />
        <rect x="24.5" y="48.5" width="384" height="24" fill="none" />
        <line x1="24.5" y1="144.5" x2="408.5" y2="144.5" />
        <rect x=".5" y=".5" width="24" height="24" fill="none" />
        <rect x="504.5" y=".5" width="24" height="24" fill="none" />
        <rect x="504.5" y="264.5" width="24" height="24" fill="none" />
        <rect x=".5" y="264.5" width="24" height="24" fill="none" />
        <rect x=".5" y=".5" width="528" height="288" fill="none" />
      </g>
    </svg>
  );
}

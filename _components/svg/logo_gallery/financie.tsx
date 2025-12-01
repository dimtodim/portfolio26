import React from "react";

interface FinanacieProps extends React.SVGProps<SVGSVGElement> {
  fillColor?: string;
  bgColor?: string;
}

export default function Finanacie({
  fillColor,
  bgColor,
  className,
  ...props
}: FinanacieProps) {
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

      <g id="finansije" fill="var(--c-1)">
        <path d="M668.85,480c1.65,0,3.16-.93,3.89-2.41l30.47-60.94c1.45-2.89-.66-6.3-3.89-6.3h-80.02l-34.83,69.65h84.37Z" />
        <path d="M603.09,616.89l30.47-60.94c1.45-2.89-.66-6.3-3.89-6.3h-80.02l-31.68,63.35c-1.45,2.89.66,6.3,3.89,6.3h77.33c1.65,0,3.16-.93,3.89-2.41Z" />
        <path d="M650.98,347c1.45-2.89-.66-6.3-3.89-6.3h-194.86c-3.24,0-5.34,3.41-3.89,6.3l31.68,63.35h139.3l31.68-63.35Z" />
        <path d="M452.22,480c-3.24,0-5.34-3.41-3.89-6.3l31.68-63.35h-66.96c-1.65,0-3.16.93-3.89,2.41l-32.42,64.84c-.74,1.47-2.24,2.41-3.89,2.41h-81.68c-1.65,0-3.16.93-3.89,2.41l-30.47,60.94c-1.45,2.89.66,6.3,3.89,6.3h72.98c3.24,0,5.34,3.41,3.89,6.3l-28.53,57.05c-1.45,2.89.66,6.3,3.89,6.3h59.92c1.65,0,3.16-.93,3.89-2.41l32.42-64.84c.74-1.47,2.24-2.41,3.89-2.41h136.61l34.83-69.65h-132.26Z" />
      </g>
    </svg>
  );
}

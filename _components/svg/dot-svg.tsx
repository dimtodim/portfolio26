import React from "react";

interface DotSvgProps extends React.SVGProps<SVGSVGElement> {
  fillColor?: string;
}

export default function DotSvg({
  fillColor,
  className,
  ...props
}: DotSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 72 72"
      fill={fillColor || "currentColor"}
      className={className}
      {...props}
    >
      <polygon points="72 24 48 24 48 0 24 0 24 24 0 24 0 48 24 48 24 72 48 72 48 48 72 48 72 24" />
    </svg>
  );
}

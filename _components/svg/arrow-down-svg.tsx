import React from "react";

interface ArrowDownSvgProps extends React.SVGProps<SVGSVGElement> {
  primaryColor?: string;
}

export default function ArrowDownSvg({
  primaryColor,
  ...props
}: ArrowDownSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 72 72"
      fill={primaryColor || "currentColor"}
      {...props}
    >
      <polygon points="45 18 45 38.64 24.36 18 18 24.36 38.64 45 18 45 18 54 54 54 54 18 45 18" />
      <path d="M63,0H9L0,9v54l9,9h54l9-9V9L63,0ZM9,63V9h54v54H9Z" />
    </svg>
  );
}

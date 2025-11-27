import React from "react";

interface LogoNavSvgProps extends React.SVGProps<SVGSVGElement> {
  fillColor?: string;
}

export default function LogoNavSvg({
  fillColor,
  className,
  ...props
}: LogoNavSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 80"
      fill={fillColor || "currentColor"}
      className={className}
      {...props}
    >
      <path d="M240,80h16V0h-96c-26.17,0-49.4,12.57-64,32V0H0v16h32C12.57,30.6,0,53.83,0,80h16c0-35.35,28.65-64,64-64v64h16c0-35.35,28.65-64,64-64h0v64h16c0-5.52.7-10.89,2.02-16h61.98v16ZM176,16h16c-6.06,4.55-11.45,9.94-16,16v-16ZM184.56,48c11.07-19.13,31.75-32,55.44-32h0v32h-55.44Z" />
    </svg>
  );
}

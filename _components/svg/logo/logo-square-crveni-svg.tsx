import React from "react";

interface LogoSquareCrveniSvgProps extends React.SVGProps<SVGSVGElement> {
  logoColor?: string;
}

export default function LogoSquareCrveniSvg({
  logoColor = "var(--color-amber-600)",

  ...props
}: LogoSquareCrveniSvgProps) {
  return (
    <svg
      id="logo_square"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 192 192"
      {...props}
    >
      <path
        fill={logoColor}
        d="M19.2,120h9.6c0-21.21,17.19-38.4,38.4-38.4v38.4h9.6c0-21.21,17.19-38.4,38.4-38.4v38.4h9.6c0-3.31.42-6.53,1.21-9.6h37.19v9.6h9.6v-48h-57.6c-15.7,0-29.64,7.54-38.4,19.2v-19.2H19.2v9.6h19.2c-11.66,8.76-19.2,22.7-19.2,38.4ZM163.2,81.6h0v19.2h-33.26c6.64-11.48,19.05-19.2,33.26-19.2ZM124.8,81.6h9.6c-3.63,2.73-6.87,5.96-9.6,9.6v-9.6Z"
      />
      <path fill={logoColor} d="M0,0v192h192V0H0ZM184,184H8V8h176v176Z" />
    </svg>
  );
}

import React from "react";

interface LogoTitleSvgProps extends React.SVGProps<SVGSVGElement> {
  fillColor?: string;
}

export default function LogoTitleSvg({
  fillColor,
  ...props
}: LogoTitleSvgProps) {
  return (
    <svg
      id="logo_title"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 120"
      fill={fillColor || "currentColor"}
      {...props}
    >
      <path d="M224,0h-72v24h14.4c-9,10-14.4,22.5-14.4,36,0,33.1,32.2,60,72,60s72-26.9,72-60S263.8,0,224,0ZM224,96c-26.5,0-48-16.1-48-36s21.5-36,48-36,48,16.1,48,36-21.5,36-48,36Z" />
      <path d="M528,0h-72v24h14.4c-9,10-14.4,22.5-14.4,36,0,33.1,32.2,60,72,60s72-26.9,72-60S567.8,0,528,0ZM528,96c-26.5,0-48-16.1-48-36s21.5-36,48-36,48,16.1,48,36-21.5,36-48,36Z" />
      <polygon points="120 88 120 96 24 96 24 0 0 0 0 120 144 120 144 88 120 88" />
      <path d="M376,24h72V0h-72c-39.8,0-72,26.9-72,60s32.2,60,72,60h72V48h-72v32h24v-8h24v24h-48c-26.5,0-48-16.1-48-36s21.5-36,48-36Z" />
    </svg>
  );
}

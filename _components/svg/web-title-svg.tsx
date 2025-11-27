import React from "react";

interface WebTitleSvgProps extends React.SVGProps<SVGSVGElement> {
  fillColor?: string;
}

export default function WebTitleSvg({
  fillColor = "var(--color-sky-50)",
  ...props
}: WebTitleSvgProps) {
  return (
    <svg
      className="web_title"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 592 120"
      fill={fillColor || "currentColor"}
      {...props}
    >
      <path d="M576,36c0-19.88-16.12-36-36-36h-108v120h108c19.88,0,36-16.12,36-36h0c0-9.22-3.47-17.63-9.17-24,5.7-6.37,9.17-14.78,9.17-24h0ZM540,96h-84v-24h84c6.63,0,12,5.37,12,12s-5.37,12-12,12ZM540,48h-84v-24h84c6.63,0,12,5.37,12,12s-5.37,12-12,12Z" />
      <polygon points="424 24 424 0 280 0 280 120 424 120 424 96 304 96 304 72 416 72 416 48 304 48 304 24 424 24" />
      <path d="M261.6,24h10.4V0h-32v5.04c-2.53,49.08-41.88,88.43-90.96,90.96h-5.04V0h-24v5.04c-2.62,50.75-44.6,91.09-96,91.09V0H0v120h24c39.26,0,74.11-18.85,96-47.99v47.99h152v-24h-55.99c23.04-17.31,39.65-42.72,45.59-72Z" />
    </svg>
  );
}

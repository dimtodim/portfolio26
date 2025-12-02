import React from "react";

interface PrintTitleSvgProps extends React.SVGProps<SVGSVGElement> {
  fillColor?: string;
}

export default function PrintTitleSvg({
  fillColor,
  ...props
}: PrintTitleSvgProps) {
  return (
    <svg
      className="print_title"
      data-name="print title"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 592 120"
      fill={fillColor || "currentColor"}
      {...props}
    >
      <rect x="304" width="24" height="120" />
      <path d="M144,36C144,16.12,127.88,0,108,0H0v120h24v-48h84c19.88,0,36-16.12,36-36h0ZM108,48H24v-24h84c6.63,0,12,5.37,12,12s-5.37,12-12,12Z" />
      <path d="M440,56.13h16v39.67c-49.35-4.07-88.13-45.4-88.13-95.8h-31.87v120h24v-60.1c20.73,35.92,59.54,60.1,104,60.1l16,.13V32.13h-40v24Z" />
      <polygon points="440 .13 440 24.13 504 24.13 504 120.13 528 120.13 528 24.13 592 24.13 592 .13 440 .13" />
      <path d="M296,36.13h0c0-19.88-16.12-36-36-36h-108v96H48v24h128v-48h24c0,26.51,21.49,48,48,48h48v-40h-24v16h-24c-13.25,0-24-10.75-24-24h36c19.88,0,36-16.12,36-36ZM176,48.13v-24h84c6.63,0,12,5.37,12,12s-5.37,12-12,12h-84Z" />
    </svg>
  );
}

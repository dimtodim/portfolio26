import React from "react";

interface SixEyeProps extends React.SVGProps<SVGSVGElement> {
  fillColor?: string;
  bgColor?: string;
}

export default function SixEye({
  fillColor,
  bgColor,
  className,
  ...props
}: SixEyeProps) {
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

      <g id="sixeye_logo" fill="var(--c-1)">
        <path d="M362.17,480h-84.69l84.69-56.46h-28.23l-84.69,56.46v56.46h112.92v-56.46ZM270.42,497.25h70.58v21.96h-70.58v-21.96Z" />
        <path d="M489.21,536.46l-84.69-56.46h84.69v-56.46h-112.92v56.46l84.69,56.46h28.23ZM468.03,462.75h-70.58v-21.96h70.58v21.96Z" />
        <polygon points="531.55 536.46 616.24 480 616.24 423.54 595.07 423.54 595.07 465.88 531.55 423.54 503.32 423.54 588.01 480 503.32 536.46 531.55 536.46" />
        <path d="M743.28,536.46l-84.69-56.46h84.69v-56.46h-112.92v56.46l84.69,56.46h28.23ZM651.53,440.79h70.58v21.96h-70.58v-21.96Z" />
        <path d="M221.02,395.31v169.38h550.49v-169.38H221.02ZM757.39,550.58H235.13v-141.15h522.26v141.15Z" />
      </g>
    </svg>
  );
}

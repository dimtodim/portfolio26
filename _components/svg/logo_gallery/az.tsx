import React from "react";

interface AzProps extends React.SVGProps<SVGSVGElement> {
  fillColor?: string;
  bgColor?: string;
}

export default function Az({
  fillColor,
  bgColor,
  className,
  ...props
}: AzProps) {
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

      <g id="аz_logo" fill="var(--text-muted)">
        <path
          id="az"
          d="M313.86,616.99v-218.42c0-.88.5-1.68,1.28-2.07l34.47-17.23c.78-.39,1.28-1.19,1.28-2.07v-33.28c0-1.28,1.04-2.31,2.31-2.31h218.89c.61,0,1.2.24,1.64.68l54.18,54.18c.43.43,1.02.68,1.64.68h15.24c1.28,0,2.31,1.04,2.31,2.31v144.84c0,.61-.24,1.2-.68,1.64l-69.43,69.43c-1.46,1.46-3.95.43-3.95-1.64v-83.24c0-1.72-1.81-2.84-3.35-2.07l-33.19,16.59c-.32.16-.68.24-1.03.24h-83.31c-2.37,0-3.21-3.15-1.15-4.32l120.86-69.06c.72-.41,1.17-1.18,1.17-2.01v-70.4c0-1.28-1.04-2.31-2.31-2.31h-145.25c-.36,0-.71.08-1.03.24l-35.26,17.63c-.78.39-1.28,1.19-1.28,2.07v68.88c0,1.72,1.81,2.84,3.35,2.07l33.19-16.59c.32-.16.68-.24,1.03-.24h100.73c2.44,0,3.22,3.29,1.03,4.38l-138.06,69.03c-.78.39-1.28,1.19-1.28,2.07v70.31c0,1.28-1.04,2.31-2.31,2.31h-69.43c-1.28,0-2.31-1.04-2.31-2.31Z"
        />
      </g>
    </svg>
  );
}

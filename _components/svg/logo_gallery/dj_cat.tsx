import React from "react";

interface DjCatProps extends React.SVGProps<SVGSVGElement> {
  fillColor?: string;
  opacity?: number;
}

export default function DjCat({ fillColor, className, ...props }: DjCatProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 960 960"
      fill={fillColor || "currentColor"}
      className={className}
      {...props}
    >
      <rect id="bg" width="960" height="960" fill="var(--bg-light)" />
      <g id="bg_vinil" fill="var(--c-5)">
        <path d="M337.96,480c0,78.45,63.6,142.04,142.04,142.04s142.04-63.6,142.04-142.04h-284.09Z" />
      </g>
      <g id="macka_glava" fill="var(--c-1)">
        <polygon points="550.42 408.98 409.37 408.98 337.96 337.96 337.96 480.01 622.04 480.01 622.04 337.96 550.42 408.98" />
      </g>

      <g id="linije" fill="var(--c-1)">
        <path d="M480,579.92c-55.09,0-99.91-44.82-99.91-99.91h2.72c0,53.59,43.6,97.19,97.19,97.19s97.19-43.6,97.19-97.19h2.72c0,55.09-44.82,99.91-99.91,99.91Z" />
        <path d="M480,558.18c-43.1,0-78.17-35.06-78.17-78.17h2.72c0,41.6,33.85,75.45,75.45,75.45s75.45-33.85,75.45-75.45h2.72c0,43.1-35.06,78.17-78.17,78.17Z" />
        <path d="M480,601.67c-67.08,0-121.66-54.58-121.66-121.66h2.72c0,65.58,53.36,118.94,118.94,118.94s118.94-53.36,118.94-118.94h2.72c0,67.08-54.58,121.66-121.66,121.66Z" />
      </g>
      <g id="macka_oci" fill="var(--c-5)">
        <polygon points="464.84 426.66 422.49 469.29 422.49 469.29 380.09 426.67 464.84 426.66" />
        <polygon points="494.71 426.66 537.06 469.29 537.06 469.29 579.46 426.67 494.71 426.66" />
      </g>
      <g id="macka_nos" fill="var(--c-1)">
        <polygon points="522.13 480 479.77 522.64 479.77 522.64 437.37 480.01 522.13 480" />
      </g>
      <g id="shadow" fill="var(--c-5)" opacity={0.5}>
        <path d="M622.04,480c0,3.68-.14,7.27-.41,10.86h-283.27c-.27-3.59-.41-7.19-.41-10.86h284.09Z" />
      </g>
    </svg>
  );
}

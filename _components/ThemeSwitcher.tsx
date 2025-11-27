"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeSwitcherProps {
  fillColor?: string;
  className?: string;
}

export default function ThemeSwitcher({
  fillColor,
  className = "",
}: ThemeSwitcherProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`h-3 lg:h-4 flex items-center ${className}`}>
        <div className="w-3 h-3 lg:w-4 lg:h-4" />
        <span className="h-3 w-full" />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`h-2 lg:h-3 flex items-center cursor-pointer transition-colors duration-200 ${className}`}
      aria-label="Switch Theme"
    >
      {/* ICON */}
      <div className="w-fit h-full shrink-0">
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
            fill={fillColor || "currentColor"}
            className="w-full h-full"
          >
            <path d="M120,0h-16.99l-30.99,30.99V0h-24v31.07L16.95,0H0v16.99l31.01,31.01H0v24h31.01L0,103.01v16.99h16.95l31.07-31.07v31.07h24v-30.99l30.99,30.99h16.99v-16.95l-31.05-31.05h31.05v-24h-31.05l31.05-31.05V0ZM72,72h-24v-24h24v24Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
            fill={fillColor || "currentColor"}
            className="w-full h-full"
          >
            <path d="M0,0v120h120V0H0ZM72,72h-24v-24h24v24Z" />
          </svg>
        )}
      </div>

      {/* TEXT */}
      <span className="h-1 lg:h-2 flex-1 min-w-0 pl-1">
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 332 60"
            fill={fillColor || "currentColor"}
            className="w-full h-full"
          >
            <rect x="80" width="12" height="60" />
            <polygon points="60 40 60 48 12 48 12 0 0 0 0 60 72 60 72 40 60 40" />
            <polygon points="240 0 240 24 192 24 192 0 180 0 180 60 192 60 192 36 240 36 240 60 252 60 252 0 240 0" />
            <path d="M136,12h36V0h-36c-19.88,0-36,13.43-36,30s16.12,30,36,30h36V24h-36v16h12v-4h12v12h-24c-13.25,0-24-8.06-24-18s10.75-18,24-18Z" />
            <polygon points="260 0 260 12 290 12 290 60 302 60 302 12 332 12 332 0 260 0" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 304 60"
            fill={fillColor || "currentColor"}
            className="w-full h-full"
          >
            <path d="M76,12h24c-14.57,10.95-24,28.37-24,48h11.93c0-4.14.52-8.16,1.51-12h46.56v12h12V0h-72v12ZM133.48,12h2.52v24h-41.65c7.91-13.7,22.39-23.14,39.13-24Z" />
            <path d="M304,11.93V0c-25.53,0-47.33,15.95-56,38.43V0h-12v60h19.93c0-6.85,1.44-13.36,4.03-19.26,10.96,11.84,26.63,19.26,44.04,19.26v-11.93c-15.2,0-28.74-7.05-37.55-18.07,8.81-11.01,22.36-18.07,37.55-18.07Z" />
            <path d="M216,48h-12c-6.63,0-12-5.37-12-12h18c9.94,0,18-8.06,18-18S219.94,0,210,0h-54v60h12v-24h12c0,13.25,10.75,24,24,24h24v-20h-12v8ZM168,24v-12h42c3.31,0,6,2.69,6,6s-2.69,6-6,6h-42Z" />
            <path d="M42,0H0v60h42c16.57,0,30-13.43,30-30S58.57,0,42,0ZM42,48H12V12h30c9.94,0,18,8.06,18,18s-8.06,18-18,18Z" />
          </svg>
        )}
      </span>
    </button>
  );
}

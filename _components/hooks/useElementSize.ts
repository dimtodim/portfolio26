import { useState, useEffect, useRef } from "react";

export function useElementSize() {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const updateSize = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setSize({
          width: rect.width,
          height: rect.height,
        });
      }
    };

    // Inicijalno postavi veličinu
    updateSize();

    const observer = new ResizeObserver(() => {
      updateSize();
    });

    observer.observe(ref.current);

    // Dodaj window resize listener kao backup
    window.addEventListener("resize", updateSize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return [ref, size] as const;
}

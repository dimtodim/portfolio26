import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-1 lg:px-2 mx-auto max-w-[2560px] overflow-hidden">
      {children}
    </div>
  );
}

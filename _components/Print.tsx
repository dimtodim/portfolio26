import React from "react";
import ArrowDownSvg from "./svg/arrow-down-svg";
import PrintHeader from "./svg/print-title-svg";
import LogoCircleBgSvg from "./svg/am-circle-svg";
import PrintDizajnSvg from "./svg/print-dizajn-svg";
import PatternCircleSvg from "./svg/pattern_circle_bg";

export default function Print() {
  return (
    <div className="logo flex flex-col w-full h-270 mb-1 lg:mb-2 rounded-sm border-2 border-(--border-muted) overflow-hidden">
      {/* Header Section */}
      <section className="relative h-92 bg-(--bg-light) border-b-2 border-(--border-muted) px-1 lg:px-2 overflow-hidden rounded-sm z-10">
        <div className="relative h-full flex items-center">
          <PrintHeader className="max-h-full py-4 z-10 relative text-(--text-muted)" />
          <LogoCircleBgSvg className="max-h-[442px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-(--text) opacity-30 lg:left-auto lg:right-0 lg:translate-x-0 z-0" />
        </div>
      </section>
      {/* Main Section */}
      <section className="relative flex flex-col flex-1 bg-(--bg) px-1 lg:px-2 pb-1 lg:pb-2 overflow-hidden">
        <div className="h-[1440px] w-full absolute z-0 left-[34%] top-[-148px] opacity-60 pointer-events-none">
          <PatternCircleSvg className="h-[1440px] opacity-15 text-(--text)" />
        </div>
        <div className="z-10 max-w-[65ch] w-full ml-auto text-right">
          <h1 className="font-teko text-3xl font-medium text-(--text-muted) py-3">
            {" "}
            BUSINESS CARDS / BROCHURES / PACKAGING <br />I assist in creating
            brandidentities through visual communication{" "}
          </h1>
          <p className="font-manrope text-(--text) text-base opacity-90">
            Through print design, your brand takes shape in the real world: the
            card that gets saved instead of thrown away, the booklet that drives
            an action, the box that catches someone&apos;s attention and stops
            them from reaching further. Each piece of printed material
            represents an opportunity to express your message and reinforce your
            brand identity by providing a memorable experience. When developing
            print designs for clients, I consider not only the visual beauty of
            each design but also its strategic purpose. From conception through
            production and delivery, I painstakingly ensure that all elements of
            the design come together to present your brand to the best of its
            ability.
          </p>
        </div>
        {/* Footer Section */}
        <div className="flex items-end justify-between mt-auto z-10">
          <ArrowDownSvg className="h-4 text-(--text-muted)" />
          <PrintDizajnSvg className="h-4 text-(--text-muted)" />
        </div>
      </section>
    </div>
  );
}

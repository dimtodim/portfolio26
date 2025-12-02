import React from "react";
import ArrowDownSvg from "./svg/arrow-down-svg";
import ThreeTitleSvg from "./svg/three-title-svg";
import TridDizajnSvg from "./svg/3d-dizajn-svg";
import PatternCircleSvg from "./svg/pattern_circle_bg";
import ThreeLogoSvg from "./svg/three-logo-svg";

export default function Threejs() {
  return (
    <div className="threejs flex flex-col w-full h-270 mb-1 lg:mb-2 rounded-sm border-2 border-(--border-muted) overflow-hidden">
      {/* Header Section */}
      <section className="relative h-92 bg-(--bg-light) border-b-2 border-(--border-muted) px-1 lg:px-2 overflow-hidden rounded-sm z-10">
        <div className="relative h-full flex items-center">
          <ThreeTitleSvg className="max-h-full py-4 z-10 relative text-(--text-muted)" />
          <ThreeLogoSvg className="max-h-[450px] absolute top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 text-(--text) opacity-30 lg:left-auto lg:right-0 lg:translate-x-0 z-0 -rotate-45" />
        </div>
      </section>
      {/* Main Section */}
      <section className="relative flex flex-col flex-1 bg-(--bg) px-1 lg:px-2 pb-1 lg:pb-2 overflow-hidden">
        <div className="h-[1440px] w-full absolute z-0 left-[-40%] md:left-[25%] top-[-448px] opacity-60 pointer-events-none">
          <ThreeLogoSvg className="h-[1440px] opacity-15 text-(--text) -rotate-45" />
        </div>
        <div className="z-10 max-w-[62ch] w-full ml-auto text-right">
          <h1 className="font-teko text-3xl font-medium text-(--text-muted) py-3">
            {" "}
            3D workflow / WebGL{" "}
          </h1>
          <p className="font-manrope text-(--text) text-base opacity-90">
            I​‍​‌‍​‍‌​‍​‌‍​‍‌ create 3D assets that visually are close to
            reality but at the same time are light enough for real-time
            rendering. I use the latest software in my workflow to connect the
            full pipeline—from detailing high-poly sculpts in Blender, made the
            optimized low-poly versions, to creating and baking the textures in
            Substance Painter. <br />
            <br />
            Each asset is saved as a neat, performant GLB file specially
            designed for Three.js, thus, it is ensured that the loading is
            quick, the materials are correct, and the rendering is smooth on all
            the devices. If you are in need of 3D models that will take your
            interactive experiences to the next level, I am able to provide you
            with on-the-fly assets that are production-ready and specifically
            suited for your ​‍​‌‍​‍‌​‍​‌‍​‍‌project.
          </p>
        </div>
        {/* Footer Section */}
        <div className="flex items-end justify-between mt-auto z-10">
          <ArrowDownSvg className="h-4 text-(--text-muted)" />
          <TridDizajnSvg className="h-4 text-(--text-muted)" />
        </div>
      </section>
    </div>
  );
}

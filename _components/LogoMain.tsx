"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import Loader from "@/_components/Loader";
import LogoHorizontalCrveniSvg from "@/_components/svg/logo/logo-horizontal-svg-crveni";
import LogoVerticalCrveniSvg from "@/_components/svg/logo/logo-vertical-crveni-svg";
import LogoSquareCrveniSvg from "@/_components/svg/logo/logo-square-crveni-svg";
import LogoCircleCrveniSvg from "@/_components/svg/logo/logo-circle-crveni-svg";
import LogoGridCrveniSvg from "./svg/logo/logo-grid-svg";
import { Logo3dModel } from "@/_components/Logo3dModel";
import { Environment } from "@react-three/drei";
import PatternCircleSvg from "@/_components/svg/pattern_circle_bg";
import PatternMainSquareSvg from "@/_components/svg/pattern_main_square";
import VizitkaFront from "@/_components/svg/vizitka-front";
import VizitkaBack from "@/_components/svg/vizitka-back";

import { useElementSize } from "@/_components/hooks/useElementSize";
import PatternTopSvg from "@/_components/svg/pattern_top";
import Envelope from "@/_components/svg/envelope";
import EnvelopeScene from "./EnvelopeScene";
import LetterHead from "./svg/letterHead";

export default function LogoMain() {
  const [gridRef, { height: gridHeight }] = useElementSize();

  return (
    <div className="logo_main relative w-full mb-1 lg:mb-2 overflow-hidden rounded-sm border-(--border-muted) border-2">
      <div className="h-[1440px] w-full absolute z-0 left-[34%] top-[-894px] opacity-40 pointer-events-none">
        <PatternCircleSvg className="h-[1440px] opacity-15 text-(--text)" />
      </div>
      {/* Main Section */}
      <div className="w-full p-1 lg:p-2 relative z-10">
        <div className="grid grid-cols-12 gap-1 lg:gap-2">
          <div
            ref={gridRef}
            className="w-full col-span-12 lg:col-span-6 border-(--border-muted) border-2 bg-(--bg) min-h-0"
            style={{
              height: gridHeight > 0 ? `${gridHeight}px` : "auto",
              minHeight: 0,
            }}
          >
            <Canvas
              className="inset-0 w-full h-full"
              shadows
              camera={{ fov: 60, position: [0, 0, 5], near: 0.1, far: 100 }}
              gl={{
                antialias: true,
                toneMapping: THREE.ACESFilmicToneMapping,
                toneMappingExposure: 1.2,
                outputColorSpace: THREE.SRGBColorSpace,
              }}
            >
              <Suspense fallback={<Loader />}>
                <Logo3dModel scale={1.3} position={[0, -0.85, 0]} />

                <ambientLight intensity={0.3} color="#58c5c1" />

                <directionalLight
                  position={[10, 10, 10]}
                  intensity={2}
                  color="#58c5c1"
                  castShadow
                  shadow-mapSize-width={1024}
                  shadow-mapSize-height={1024}
                  shadow-camera-far={50}
                  shadow-camera-left={-10}
                  shadow-camera-right={10}
                  shadow-camera-top={10}
                  shadow-camera-bottom={-10}
                />

                <fog attach="fog" args={["#001a33", 5, 50]} />
                <Environment
                  files="/hdri/machine_shop_01_2k.hdr"
                  background={false}
                  environmentIntensity={0.5}
                />

                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  enableRotate={true}
                  minPolarAngle={Math.PI / 2}
                  maxPolarAngle={Math.PI}
                />
              </Suspense>
            </Canvas>
          </div>

          <div
            ref={gridRef}
            className="w-full col-span-12 lg:col-span-6 min-h-0"
          >
            <LogoGridCrveniSvg
              gridColor="var(--border-muted)"
              logoColor="var(--text-muted)"
              strokeWidth={1}
              className="w-full h-auto"
            />
          </div>

          <LogoHorizontalCrveniSvg
            logoColor="var(--text)"
            spaceColor="var(--border)"
            gridColor="var(--border-muted)"
            strokeWidth={1}
            opacity={0.35}
            className="w-full col-span-12"
          />

          <LogoVerticalCrveniSvg
            gridColor="var(--border-muted)"
            logoColor="var(--text)"
            spaceColor="var(--border)"
            strokeWidth={1}
            opacity={0.35}
            className="w-full h-auto col-span-12 lg:col-span-10 lg:row-span-2"
          />

          <LogoSquareCrveniSvg
            logoColor="var(--text)"
            className="w-full col-span-3 md:col-span-3 lg:col-span-2 lg:w-[90%] lg:ml-auto"
          />

          <LogoCircleCrveniSvg
            logoColor="var(--text)"
            className="w-full col-span-3 md:col-span-3 lg:col-span-2 lg:w-[90%] lg:ml-auto lg:mt-auto"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-1 lg:gap-2 mt-1 lg:mt-2">
          <PatternTopSvg
            className="w-full h-auto col-span-2 border-(--border-muted) border-2 p-1 lg:p-2"
            fillColor="var(--border-muted)"
          />

          <PatternMainSquareSvg
            className="w-full h-full border-(--border-muted) col-span-2 lg:col-span-1 border-2 p-1 lg:p-2"
            fillColorDark="var(--border)"
            fillColorLight="var(--success)"
          />
          <PatternCircleSvg
            className="w-full h-full border-(--border-muted) col-span-2 lg:col-span-1 border-2 p-1 lg:p-2 opacity-85"
            fillColorDark="var(--border)"
            fillColorLight="var(--success)"
          />

          <div className="p-1 lg:p-2 border-(--border-muted) border-2 col-span-2 grid gap-1 lg:gap-2 lg:grid-cols-2">
            <VizitkaBack />
            <VizitkaFront />
          </div>

          <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-2">
            <div className="border-(--border-muted) border-2 p-1 lg:p-2">
              <Envelope />
            </div>
            <div className="border-(--border-muted) border-2 p-1 lg:p-2">
              <LetterHead />
            </div>
          </div>

          <div className="aspect-video w-full border-(--border-muted) border-2 p-1 lg:p-2 col-span-2">
            <EnvelopeScene />
          </div>

          <PatternTopSvg
            className="w-full h-auto col-span-2 border-(--border-muted) border-2 p-1 lg:p-2 rotate-180"
            fillColor="var(--border-muted)"
          />
        </div>
      </div>
    </div>
  );
}

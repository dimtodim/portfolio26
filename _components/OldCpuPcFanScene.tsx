"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, ContactShadows, Environment } from "@react-three/drei";
import Loader from "./Loader";
import { OldCpuPcFan } from "./OldCpuPcFan";

export default function OldCpuPcFanScene() {
  return (
    <div className="w-full h-[70vh] ">
      <Canvas
        className="inset-0 w-full h-full"
        shadows
        // Poboljšanja za bolje teksture
        dpr={[1, 2]}
        camera={{
          fov: 50,
          position: [5, 3, 8],
          near: 0.1,
          far: 100,
        }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
      >
        <Suspense fallback={<Loader />}>
          {/* CPU Cooler */}
          <OldCpuPcFan position={[0, 0, 0]} rotation={[0, Math.PI * 0.2, 0]} />

          {/* Profesionalno studio osvetljenje - usklađeno sa color scheme */}

          {/* Futuristic HDRI - smanji intensity da ne guši boje */}
          <Environment
            files="/hdri/machine_shop_01_2k.hdr"
            background={false}
            environmentIntensity={0.4}
          />

          {/* MAIN KEY LIGHT – primary plava (oklch 0.76 0.1 192) */}
          <directionalLight
            position={[6, 8, 4]}
            intensity={2.5}
            color="#58c5c1" // konvertovano iz oklch(0.76 0.1 192)
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={60}
            shadow-bias={-0.00005}
          />

          {/* FILL LIGHT – sekundarna narandžasta (oklch 0.76 0.1 12) */}
          <directionalLight
            position={[-4, 3, 3]}
            intensity={1.8}
            color="#e996a0" // konvertovano iz oklch(0.76 0.1 12)
          />

          {/* RIM LIGHT – info plava za kontrast */}
          <directionalLight
            position={[0, 3, -7]}
            intensity={2.0}
            color="#536480" // info color
          />

          {/* UNDERGLOW – primary plava sa nižim intensity */}
          <pointLight
            position={[0, -1, 0]}
            intensity={1.2}
            distance={6}
            color="#58c5c1"
            decay={2}
          />

          {/* Ambient – neutralna bg-light boja */}
          <ambientLight intensity={0.2} color="#b8c0cc" />

          {/* Orbit Controls sa ograničenjima */}
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={3}
            maxDistance={20}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2}
            target={[0, 1, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

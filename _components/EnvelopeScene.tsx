"use client";

import * as THREE from "three";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Envelope3dModel } from "./Envelope3dModel"; // <-- proveri putanju!
import Loader from "./Loader"; // ako imaš loader — ako nemaš, zameni sa null

export default function EnvelopeScene() {
  return (
    <Canvas
      className="inset-0 w-full h-full"
      shadows
      camera={{ fov: 60, position: [0, 0, 5], near: 0.1, far: 100 }}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
    >
      <Suspense fallback={<Loader />}>
        {/* Model */}
        <Envelope3dModel scale={1.8} position={[0, 0, 0]} />

        {/* Lights - usklađeno sa color scheme */}
        {/* AMBIENT – neutralna pozadinska svetlost (bg-light) */}
        <ambientLight intensity={0.45} color="#474d56" />

        {/* HEMISPHERE – plava gore, narandžasta dole */}
        <hemisphereLight
          intensity={0.55}
          color="#58c5c1" // primary oklch plava (svetlo sa neba)
          groundColor="#e996a0" // secondary oklch narandžasta (refleksija od poda)
        />

        {/* GLAVNO SVETLO – oštar highlight, shadow-caster */}
        <directionalLight
          position={[4, 6, 5]}
          intensity={2.2}
          color="#76d4d0" // malo svetlija primary plava
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.0002}
          shadow-radius={4}
        />

        {/* FILL LIGHT – mekano popunjavanje senki, topla boja */}
        <directionalLight
          position={[-4, 2, 2]}
          intensity={1.3}
          color="#cfa08c" // sekundarna narandžasta, ali svetlija da digne senke
        />

        {/* RIM LIGHT – lagani backlight za odvajanje koverte od pozadine */}
        <directionalLight
          position={[0, 5, -6]}
          intensity={1.1}
          color="#76d4d0"
        />

        <ambientLight intensity={0.75} color="#555b65" />

        <hemisphereLight
          intensity={0.7}
          color="#76d4d0"
          groundColor="#e9a893"
        />

        {/* ENVIRONMENT – slab, čisto za refleksije (bez backgrounda) */}
        <Environment
          files="/hdri/machine_shop_01_2k.hdr"
          background={false}
          environmentIntensity={1}
        />

        {/* Camera control */}
        <OrbitControls
          minPolarAngle={0} // od vrha
          maxPolarAngle={Math.PI} // do dole
          minAzimuthAngle={-Infinity} // puni krug levo-desno
          maxAzimuthAngle={Infinity} // puni krug levo-desno
          enableZoom={false}
        />
      </Suspense>
    </Canvas>
  );
}

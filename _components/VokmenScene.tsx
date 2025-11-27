"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, ContactShadows, Environment } from "@react-three/drei";
import Loader from "./Loader";
import { Vokmen } from "./Vokmen";

export default function VokmenScene() {
  return (
    <div className="w-full h-[70vh]">
      <Canvas
        className="inset-0 w-full h-full"
        shadows
        dpr={[1, 2]}
        camera={{
          fov: 50,
          position: [15, 15, 15], // POVEĆAO DISTANCE - više udaljena kamera
          near: 0.1,
          far: 200, // Povećao far plane
        }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
      >
        <Suspense fallback={<Loader />}>
          {/* Walkman - centriraj ga bolje */}
          <Vokmen
            position={[0, 2, 0]}
            rotation={[0, Math.PI * 0.25, 0]} // 45° rotacija za bolji prikaz
            scale={[0.5, 0.5, 0.5]}
          />

          {/* Contact Shadows za realizam */}
          <ContactShadows
            position={[0, -0.5, 0]}
            opacity={0.4}
            scale={10}
            blur={2}
            far={4}
          />

          {/* Environment */}
          <Environment
            files="/hdri/machine_shop_01_2k.hdr"
            background={false}
            environmentIntensity={0.4}
          />

          {/* MAIN KEY LIGHT */}
          <directionalLight
            position={[6, 8, 4]}
            intensity={2.5}
            color="#58c5c1"
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={60}
            shadow-bias={-0.00005}
          />

          {/* FILL LIGHT */}
          <directionalLight
            position={[-4, 3, 3]}
            intensity={1.8}
            color="#e996a0"
          />

          {/* RIM LIGHT */}
          <directionalLight
            position={[0, 3, -7]}
            intensity={2.0}
            color="#536480"
          />

          {/* UNDERGLOW */}
          <pointLight
            position={[0, -1, 0]}
            intensity={1.2}
            distance={6}
            color="#58c5c1"
            decay={2}
          />

          {/* Ambient */}
          <ambientLight intensity={0.3} color="#b8c0cc" />

          {/* Orbit Controls - optimizovano */}
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={5}
            maxDistance={25}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2.2}
            target={[0, 2, 0]} // Fokusiraj na centar modela (Y=2)
            autoRotate={false} // Opcionalno: true za auto rotaciju
            autoRotateSpeed={0.5}
            enableDamping={true}
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

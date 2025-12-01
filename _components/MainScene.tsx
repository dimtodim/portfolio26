"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Loader from "@/_components/Loader";
import { PodrumModel } from "@/_components/PodrumModel";
import { SharkModel } from "@/_components/SharkModel";
import { KamenModel } from "@/_components/KamenModel";
import { OrbitControls } from "@react-three/drei";
import { useState, useEffect } from "react";

export default function MainScene() {
  // 🧩 Skaliranje po modelu
  const [scales, setScales] = useState({
    podrum: 0.22,
    shark: 0.7,
    kamen: 1,
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const updateScales = () => {
      // Debounce: čeka 150ms posle zadnje resize promene
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const isPortrait = height > width;

        if (width < 640) {
          // 📱 Mobile (phones)
          setScales({
            podrum: isPortrait ? 0.16 : 0.18,
            shark: isPortrait ? 0.48 : 0.55,
            kamen: isPortrait ? 0.65 : 0.75,
          });
        } else if (width < 1024) {
          // 💻 Tablet
          setScales({
            podrum: 0.19,
            shark: 0.6,
            kamen: 0.85,
          });
        } else if (width < 1440) {
          // 🖥️ Desktop (standard)
          setScales({
            podrum: 0.22,
            shark: 0.7,
            kamen: 1,
          });
        } else {
          // 🖥️ Large Desktop (1440p+)
          setScales({
            podrum: 0.22,
            shark: 0.75,
            kamen: 1.1,
          });
        }
      }, 150);
    };

    // Inicijalno skaliranje i listener
    updateScales();
    window.addEventListener("resize", updateScales);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updateScales);
    };
  }, []);

  return (
    <section className="w-full h-screen">
      <Canvas
        className="w-full h-screen"
        shadows
        camera={{ fov: 60, position: [0, 0, 6], near: 0.1, far: 100 }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2, // ← Povećaj ako je tamno
          outputColorSpace: THREE.SRGBColorSpace,
        }}
      >
        <Suspense fallback={<Loader />}>
          {/* 🌊 Fog za atmosferu dubine */}
          <fog attach="fog" args={["#001a33", 5, 50]} />

          {/* ☀️ Glavno svetlo (filtrirana sunčeva svetlost kroz vodu) */}
          <directionalLight
            position={[5, 8, 3]}
            intensity={1.1}
            color="#4a90d9"
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />

          {/* 🌫️ Ambient za opštu vidljivost (minimal) */}
          <ambientLight intensity={0.3} color="#84DCC6" />

          <PodrumModel scale={scales.podrum} position={[0, -0.7, 0]} />
          <SharkModel
            scale={scales.shark}
            position={[-2, 0, 0]}
            rotationSpeed={-1}
            amplitude={0.5}
            frequency={2}
          />
          <KamenModel
            scale={scales.kamen}
            position={[0, 0, 0]}
            rotationSpeed={-1}
            amplitude={0.3}
            frequency={2}
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
    </section>
  );
}

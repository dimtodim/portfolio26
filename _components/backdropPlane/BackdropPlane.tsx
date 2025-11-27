"use client";
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { vertexShader } from "./backdropPlaneVertex";
import { fragmentShader } from "./backdropPlaneFragment";

export function BackdropPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  // ✅ Animacija preko useFrame je najbolja za performanse
  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh scale={[4, 4, 1]}>
      <planeGeometry args={[2, 2, 1, 1]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
          uScrollProgress: { value: 0 },
          uColourPalette: {
            value: [
              new THREE.Vector3(0.2, 0.3, 0.5),
              new THREE.Vector3(0.1, 0.2, 0.3),
              new THREE.Vector3(1.0, 1.3, 1.5),
              new THREE.Vector3(0.0, 0.2, 0.4),
            ],
          },
          uUvScale: { value: 2.0 },
          uUvDistortionIterations: { value: 2.0 },
          uUvDistortionIntensity: { value: 0.1 },
          uGrainIntensity: { value: 0.05 },
        }}
      />
    </mesh>
  );
}

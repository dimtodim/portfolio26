import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function useSinRotation(
  rotationSpeed: number = 1,
  amplitude: number = 0.5,
  frequency: number = 1.5
) {
  const ref = useRef<THREE.Group>(null);
  const timeRef = useRef(0);

  useFrame((_, delta) => {
    if (ref.current) {
      timeRef.current += delta;
      const easing = 1 + amplitude * Math.sin(timeRef.current * frequency);
      ref.current.rotation.y += delta * rotationSpeed * easing;
    }
  });

  return ref;
}

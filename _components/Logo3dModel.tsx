"use client";
import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";
import { useSinRotation } from "@/_components/hooks/useSinRotation";
import { Group } from "three";

interface Logo3dFullCircleProps {
  scale?: number;
  position?: [number, number, number];
  rotationSpeed?: number;
  amplitude?: number;
  frequency?: number;
}

export function Logo3dModel({
  scale = 1,
  position = [0, 0, 0],
  rotationSpeed = 0.8,
  amplitude = 0.3,
  frequency = 1.5,
}: Logo3dFullCircleProps) {
  const { scene } = useGLTF("/models/logo3d_compress.glb");
  const groupRef = useSinRotation(
    rotationSpeed,
    amplitude,
    frequency
  ) as React.RefObject<Group>;

  // Kreiraj zlatni materijal
  const goldMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xa5a07c), // zlatna boja
      metalness: 1.0,
      roughness: 0.3,
      reflectivity: 1.0,
      clearcoat: 0.3,
      clearcoatRoughness: 0.1,
      side: THREE.DoubleSide,
    });
  }, []);

  // Funkcija za primenu materijala na sve mesheve
  const applyGoldMaterial = (mesh: THREE.Mesh) => {
    mesh.material = goldMaterial.clone();
    mesh.material.needsUpdate = true;
  };

  // Mirror + rotirana kopija
  const mirroredScene = useMemo(() => {
    const clone = scene.clone(true);
    clone.scale.x = -1;
    clone.rotation.y = Math.PI;

    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) applyGoldMaterial(child as THREE.Mesh);
    });

    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) applyGoldMaterial(child as THREE.Mesh);
    });

    return clone;
  }, [scene, goldMaterial]);

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <primitive object={scene} />
      <primitive object={mirroredScene} />
    </group>
  );
}

"use client";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useEffect } from "react";
import { useSinRotation } from "@/_components/hooks/useSinRotation";

interface SharkModelProps {
  scale?: number;
  position?: [number, number, number];
  rotationSpeed?: number;
  amplitude?: number;
  frequency?: number;
}

export function SharkModel({
  scale = 0.7,
  position = [-2, -0.25, 0],
  rotationSpeed = 0.5,
  amplitude = 0.3,
  frequency = 1.5,
  ...props
}: SharkModelProps) {
  const { scene } = useGLTF("/models/shark29_compressed.glb");

  const textures = useTexture({
    map: "/textures/shark/materijal_BaseColor.1001.webp",
    roughnessMap: "/textures/shark/materijal_Roughness.1001.webp",
    normalMap: "/textures/shark/materijal_Normal.1001.webp",
    displacementMap: "/textures/shark/materijal_Displacement.1001.webp",
  }) as {
    map: THREE.Texture;
    roughnessMap: THREE.Texture;
    normalMap: THREE.Texture;
    displacementMap: THREE.Texture;
  };

  const modifiedTextures = useMemo(() => {
    const map = textures.map.clone();
    map.flipY = false;
    const roughnessMap = textures.roughnessMap.clone();
    roughnessMap.flipY = false;
    const normalMap = textures.normalMap.clone();
    normalMap.flipY = false;
    const displacementMap = textures.displacementMap.clone();
    return { map, roughnessMap, normalMap, displacementMap };
  }, [textures]);

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const material = new THREE.MeshStandardMaterial({
          map: modifiedTextures.map,
          roughnessMap: modifiedTextures.roughnessMap,
          normalMap: modifiedTextures.normalMap,
        });
        mesh.material = material;
      }
    });
  }, [scene, modifiedTextures]);

  const groupRef = useSinRotation(rotationSpeed, amplitude, frequency);

  return (
    <group ref={groupRef}>
      <primitive object={scene} position={position} scale={scale} {...props} />
    </group>
  );
}

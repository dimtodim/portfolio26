"use client";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useEffect } from "react";

export function PodrumModel(props: Record<string, unknown>) {
  const { scene } = useGLTF("/models/brutalismModel_compressed.glb");

  const textures = useTexture({
    map: "/textures/basement/materijal_BaseColor.1001.webp",
    roughnessMap: "/textures/basement/materijal_Roughness.1001.webp",
    normalMap: "/textures/basement/materijal_Normal.1001.webp",
    displacementMap: "/textures/basement/materijal_Displacement.1001.webp",
  }) as {
    map: THREE.Texture;
    roughnessMap: THREE.Texture;
    normalMap: THREE.Texture;
  };

  const modifiedTextures = useMemo(() => {
    const map = textures.map.clone();
    map.flipY = false;
    const roughnessMap = textures.roughnessMap.clone();
    roughnessMap.flipY = false;
    const normalMap = textures.normalMap.clone();
    normalMap.flipY = false;
    return { map, roughnessMap, normalMap };
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

  return <primitive object={scene} {...props} />;
}

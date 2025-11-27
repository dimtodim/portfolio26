import * as THREE from "three";
import React, { useMemo } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export function Envelope3dModel(props: React.JSX.IntrinsicElements["group"]) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { nodes } = useGLTF("/models/envelope.glb") as any;

  // Učitavanje PBR tekstura - ORM format
  const [baseColor, normalMap, ormMap] = useTexture(
    [
      "/textures/envelope/Material_BaseColor_1001.png",
      "/textures/envelope/Material_Normal_1001.png",
      "/textures/envelope/Material_occlusionRoughnessMetallic_1001.png", // ORM packed texture
    ],
    (textures) => {
      // BaseColor je sRGB
      textures[0].colorSpace = THREE.SRGBColorSpace;

      // Normal i ORM su linearne
      textures[1].colorSpace = THREE.LinearSRGBColorSpace;
      textures[2].colorSpace = THREE.LinearSRGBColorSpace;

      // Primeni anizotropno filtriranje na sve
      textures.forEach((texture) => {
        texture.flipY = false;
        texture.anisotropy = 16;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
      });
    }
  );

  const material = useMemo(() => {
    const mat = new THREE.MeshStandardMaterial({
      map: baseColor,
      normalMap: normalMap,
      normalScale: new THREE.Vector2(1.0, 1.0),

      // ORM Texture - packed u RGB kanale:
      // R = Ambient Occlusion
      // G = Roughness
      // B = Metallic

      aoMap: ormMap, // Red channel = AO
      aoMapIntensity: 1.0,

      roughnessMap: ormMap, // Green channel = Roughness
      roughness: 1.0,

      metalnessMap: ormMap, // Blue channel = Metallic
      metalness: 1.0,
    });
    mat.side = THREE.DoubleSide;
    mat.needsUpdate = true;
    return mat;
  }, [baseColor, normalMap, ormMap]);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.envelope_final001.geometry}
        material={material}
      />
    </group>
  );
}

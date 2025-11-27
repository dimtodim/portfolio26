import * as THREE from "three";
import React, { useMemo, useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    vokmen: THREE.Mesh;
    top: THREE.Mesh;
    zadnja_strana: THREE.Mesh;
    power: THREE.Mesh;
    volumen: THREE.Mesh;
    stereo: THREE.Mesh;
    vrata: THREE.Mesh;
    poklopac: THREE.Mesh;
    staklo: THREE.Mesh;
    dio_Za_kasetu: THREE.Mesh;
  };
  materials: Record<string, THREE.Material>;
};

export function Vokmen(props: React.ComponentProps<"group">) {
  const { nodes } = useGLTF("/models/vokmen.glb") as unknown as GLTFResult;

  // Učitaj teksture
  const [baseColor, normalMap, ormMap] = useTexture(
    [
      "/textures/vokmen/vokmen_baseColor_1001.png",
      "/textures/vokmen/vokmen_normal_1001.png",
      "/textures/vokmen/vokmen_occlusionRoughnessMetallic_1001.png",
    ],
    (textures) => {
      textures[0].colorSpace = THREE.SRGBColorSpace;
      textures[0].flipY = false;
      textures[0].needsUpdate = true;

      textures[1].colorSpace = THREE.LinearSRGBColorSpace;
      textures[1].flipY = false;
      textures[1].needsUpdate = true;

      textures[2].colorSpace = THREE.LinearSRGBColorSpace;
      textures[2].flipY = false;
      textures[2].needsUpdate = true;
    }
  );

  // Kreiraj materijal sa teksturama
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: baseColor,
        normalMap: normalMap,
        aoMap: ormMap,
        roughnessMap: ormMap,
        metalnessMap: ormMap,
        aoMapIntensity: 1.0,
        roughness: 1.0,
        metalness: 1.0,
      }),
    [baseColor, normalMap, ormMap]
  );

  const glassMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#ffffff",
        metalness: 0.0,
        roughness: 0.1,
        transmission: 1.0, // Providnost
        thickness: 0.5, // Debljina stakla
        transparent: true,
        opacity: 0.9,
        ior: 1.5, // Index of refraction (staklo)
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        envMapIntensity: 1.0,
      }),
    []
  );

  return (
    <group {...props} dispose={null}>
      <group>
        <group position={[2.138, -2.886, 0.512]} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.vokmen.geometry}
          material={material}
          position={[0, 0.006, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.top.geometry}
          material={material}
          position={[0, 10.162, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.zadnja_strana.geometry}
          material={material}
          position={[3.488, 0.128, -4.136]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.power.geometry}
          material={material}
          position={[1.989, 10.602, 0.763]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.volumen.geometry}
          material={material}
          position={[10.26, 10.671, 2.324]}
        />
        {/* Duplikat volumen dugmeta na novoj poziciji */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.volumen.geometry}
          material={material}
          position={[9.20927, 10.671, -2.324]} // Primer: promeni Z koordinatu
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.stereo.geometry}
          material={material}
          position={[-6.606, 10.74, 0.345]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.vrata.geometry}
          material={material}
          position={[-12.192, 2.654, 4.38]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.poklopac.geometry}
          material={material}
          position={[2.004, -1.458, 4.364]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.staklo.geometry}
          material={glassMaterial}
          position={[2.003, -3.425, 4.436]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dio_Za_kasetu.geometry}
          material={material}
          position={[-2.72, -2.886, 1.269]}
        />
        {/* Duplikat volumen dugmeta na novoj poziciji */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dio_Za_kasetu.geometry}
          material={material}
          position={[6.99635, -2.886, 1.269]}
        />
      </group>
    </group>
  );
}

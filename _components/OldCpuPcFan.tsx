"use client";
import * as THREE from "three";
import React, { useMemo, useRef, useLayoutEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";

const z = -0.403573;
const y = 2.05131;

const hladnjakPositions: [number, number, number][] = [
  [-1.94983, y, z],
  [-1.85859625, y, z],
  [-1.7673625, y, z],
  [-1.67612875, y, z],
  [-1.584895, y, z],
  [-1.49366125, y, z],
  [-1.4024275, y, z],
  [-1.31119375, y, z],
  [-1.21996, y, z],
];

const hladnjakPositions2: [number, number, number][] = [
  [-1.12872, y, z],
  [-1.0374859375, y, z],
  [-0.946251875, y, z],
  [-0.8550178125, y, z],
  [-0.76378375, y, z],
  [-0.6725496875, y, z],
  [-0.581315625, y, z],
  [-0.4900815625, y, z],
  [-0.3988475, y, z],
  [-0.3076134375, y, z],
  [-0.216379375, y, z],
  [-0.1251453125, y, z],
  [-0.03391125, y, z],
  [0.0573228125, y, z],
  [0.148556875, y, z],
  [0.2397909375, y, z],
  [0.331025, y, z],
  [0.4222590625, y, z],
  [0.513493125, y, z],
  [0.6047271875, y, z],
  [0.69596125, y, z],
  [0.7871953125, y, z],
  [0.878429375, y, z],
  [0.9696634375, y, z],
  [1.0608975, y, z],
  [1.1521315625, y, z],
  [1.243365625, y, z],
  [1.3345996875, y, z],
  [1.42583375, y, z],
  [1.5170678125, y, z],
  [1.608301875, y, z],
  [1.6995359375, y, z],
  [1.79077, y, z],
];

const srafPosition: [number, number, number][] = [
  [-1.791, 3.74, 1.268],
  [1.59612, 3.74023, 1.3223],
  [1.57612, 0.325719, 1.26823],
  [-1.81, 0.35719, 1.3223],
];

const srafKuler: [number, number, number][] = [
  [-2.179, 0.137, -1.677],
  [-2.17903, 0.136616, 1.91955],
  [1.59275, 0.136616, 1.91955],
  [1.59275, 0.136616, -1.6772],
];

const oprugaPosition: [number, number, number][] = [
  [-2.179, 0.241332, -1.677],
  [-2.17903, 0.241332, 1.91955],
  [1.59275, 0.241332, 1.91955],
  [1.59275, 0.241332, -1.6772],
];

type GLTFResult = GLTF & {
  nodes: {
    zastita: THREE.Mesh;
    ventilator: THREE.Mesh;
    baza: THREE.Mesh;
    sraf: THREE.Mesh;
    blades: THREE.Mesh;
    cev: THREE.Mesh;
    hladnjak_velika__rupa: THREE.Mesh;
    hladnjak_mala_rupa: THREE.Mesh;
    nosac: THREE.Mesh;
    opruka: THREE.Mesh;
    sraf_kuler: THREE.Mesh;
  };
  materials: Record<string, THREE.Material | THREE.Material[]>;
};

export function OldCpuPcFan(props: React.ComponentProps<"group">) {
  const { nodes } = useGLTF("/models/ventilator5.glb") as unknown as GLTFResult;

  const bigFinsRef = useRef<THREE.InstancedMesh>(null);
  const smallFinsRef = useRef<THREE.InstancedMesh>(null);

  // Učitavanje PBR tekstura - ORM format
  const [baseColor, normalMap, ormMap] = useTexture(
    [
      "/textures/cpucooler/Material_BaseColor_1001.png",
      "/textures/cpucooler/Material_Normal_1001.png",
      "/textures/cpucooler/Material_occlusionRoughnessMetallic_1001.png",
    ],
    (textures) => {
      textures[0].colorSpace = THREE.SRGBColorSpace;
      textures[1].colorSpace = THREE.LinearSRGBColorSpace;
      textures[2].colorSpace = THREE.LinearSRGBColorSpace;

      textures.forEach((texture) => {
        texture.flipY = false;
        texture.anisotropy = 8; // Smanjeno sa 16 na 8 za bolje performanse
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
      aoMap: ormMap,
      aoMapIntensity: 1.0,

      roughnessMap: ormMap,
      roughness: 1.0,

      metalnessMap: ormMap,
      metalness: 0.95, // Malo smanjeno za realističniji prikaz metala
    });
    mat.needsUpdate = true;
    return mat;
  }, [baseColor, normalMap, ormMap]);

  // Postavljanje instanci za velike finove (9 instanci)
  useLayoutEffect(() => {
    if (!bigFinsRef.current) return;

    const dummy = new THREE.Object3D();

    hladnjakPositions.forEach((pos, i) => {
      dummy.position.set(pos[0], pos[1], pos[2]);
      dummy.updateMatrix();
      bigFinsRef.current!.setMatrixAt(i, dummy.matrix);
    });

    bigFinsRef.current.instanceMatrix.needsUpdate = true;
  }, []);

  // Postavljanje instanci za male finove (33 instance)
  useLayoutEffect(() => {
    if (!smallFinsRef.current) return;

    const dummy = new THREE.Object3D();

    hladnjakPositions2.forEach((pos, i) => {
      dummy.position.set(pos[0], pos[1], pos[2]);
      dummy.updateMatrix();
      smallFinsRef.current!.setMatrixAt(i, dummy.matrix);
    });

    smallFinsRef.current.instanceMatrix.needsUpdate = true;
  }, []);

  return (
    <group {...props} dispose={null}>
      {/* Glavni delovi */}
      <mesh
        geometry={nodes.zastita.geometry}
        position={[-0.107, 2.041, 1.363]}
        castShadow
        receiveShadow
        material={material}
      />
      <mesh
        geometry={nodes.ventilator.geometry}
        position={[-0.107, 2.033, 0.881]}
        castShadow
        receiveShadow
        material={material}
      />
      <mesh
        geometry={nodes.baza.geometry}
        position={[-0.293, -0.049, 0.121]}
        castShadow
        receiveShadow
        material={material}
      />
      {srafPosition.map((pos, i) => (
        <mesh
          key={`sraf-${i}`}
          geometry={nodes.sraf.geometry}
          position={pos}
          castShadow
          receiveShadow
          material={material}
        />
      ))}
      <mesh
        geometry={nodes.blades.geometry}
        position={[-0.107, 2.033, 0.807]}
        castShadow
        receiveShadow
        material={material}
      />
      <mesh
        geometry={nodes.cev.geometry}
        position={[-0.076, 1.609, -0.426]}
        castShadow
        receiveShadow
        material={material}
      />

      {/* INSTANCIRANI VELIKI FINOVI (9 instanci) */}
      <instancedMesh
        ref={bigFinsRef}
        args={[
          nodes.hladnjak_velika__rupa.geometry,
          material,
          hladnjakPositions.length,
        ]}
        castShadow
        receiveShadow
      />

      {/* INSTANCIRANI MALI FINOVI (33 instance) */}
      <instancedMesh
        ref={smallFinsRef}
        args={[
          nodes.hladnjak_mala_rupa.geometry,
          material,
          hladnjakPositions2.length,
        ]}
        castShadow
        receiveShadow
      />

      <mesh
        geometry={nodes.nosac.geometry}
        position={[-0.038, 1.972, 0.19]}
        castShadow
        receiveShadow
        material={material}
      />
      {oprugaPosition.map((pos, i) => (
        <mesh
          key={`opruga-${i}`}
          geometry={nodes.opruka.geometry}
          position={pos}
          castShadow
          receiveShadow
          material={material}
        />
      ))}
      {srafKuler.map((pos, i) => (
        <mesh
          key={`sraf-kuler-${i}`}
          geometry={nodes.sraf_kuler.geometry}
          position={pos}
          castShadow
          receiveShadow
          material={material}
        />
      ))}
    </group>
  );
}

"use client";
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

const z = -0.277549;
const y = 0.839871;

const hladnjakPositions: [number, number, number][] = [
  [-0.684488, y, z],
  [-0.65099, y, z],
  [-0.617492, y, z],
  [-0.583994, y, z],
  [-0.550496, y, z],
  [-0.516998, y, z],
  [-0.4835, y, z],
  [-0.450002, y, z],
  [-0.416504, y, z],
];

const hladnjakPositions2: [number, number, number][] = [
  [-0.383005, y, z],
  [-0.349507, y, z],
  [-0.316009, y, z],
  [-0.282511, y, z],
  [-0.249013, y, z],
  [-0.215515, y, z],
  [-0.182017, y, z],
  [-0.148519, y, z],
  [-0.115021, y, z],
  [-0.081523, y, z],
  [-0.048025, y, z],
  [-0.014527, y, z],
  [0.018971, y, z],
  [0.052469, y, z],
  [0.085967, y, z],
  [0.119465, y, z],
  [0.152963, y, z],
  [0.186461, y, z],
  [0.219959, y, z],
  [0.253457, y, z],
  [0.286955, y, z],
  [0.320453, y, z],
  [0.353951, y, z],
  [0.387449, y, z],
  [0.420947, y, z],
  [0.454445, y, z],
  [0.487943, y, z],
  [0.521441, y, z],
  [0.554939, y, z],
  [0.588437, y, z],
  [0.621935, y, z],
  [0.655433, y, z],
  [0.688931, y, z],
];

const srafPosition: [number, number, number][] = [
  [-0.616, 1.439, 0.372],
  [0.616, 1.439, 0.385738],
  [-0.616, 0.211635, 0.385738],
  [0.616, 0.211635, 0.372],
];

const srafKuler: [number, number, number][] = [
  [-0.768339, 0.140724, 0.57],
  [0.611465, 0.140724, 0.57],
  [0.611465, 0.140724, -0.745965],
  [-0.768339, 0.140724, -0.745965],
];

const oprugaPosition: [number, number, number][] = [
  [-0.768338, 0.179031, 0.569807],
  [0.611465, 0.179031, 0.569807],
  [-0.768338, 0.179031, -0.745965],
  [0.611465, 0.179031, -0.745965],
];

type GLTFResult = GLTF & {
  nodes: {
    propeler006: THREE.Mesh;
    ventilator_plastika003: THREE.Mesh;
    zastita_zica003: THREE.Mesh;
    zica_krugovi003: THREE.Mesh;
    nosac003: THREE.Mesh;
    baza003: THREE.Mesh;
    sraf_kuler003: THREE.Mesh;
    opruka003: THREE.Mesh;
    sraf013: THREE.Mesh;
    hladnjakvelika_rupa: THREE.Mesh;
    hladnjak_mala_rupa: THREE.Mesh;
    cjevi003: THREE.Mesh;
  };
  materials: Record<string, THREE.Material | THREE.Material[]>;
};

export function Hladnjak(props: React.ComponentProps<"group">) {
  const { nodes, materials } = useGLTF(
    "/models/ventilator.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.propeler006.geometry}
        material={nodes.propeler006.material}
        position={[0, 0.825, 0.231]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ventilator_plastika003.geometry}
        material={nodes.ventilator_plastika003.material}
        position={[0, 0.825, 0.209]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.zastita_zica003.geometry}
        material={nodes.zastita_zica003.material}
        position={[0, 0.825, 0.402]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.zica_krugovi003.geometry}
          material={nodes.zica_krugovi003.material}
          position={[-0.067, 0.063, 0.005]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.nosac003.geometry}
        material={nodes.nosac003.material}
        position={[0.014, 0.813, -0.068]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.baza003.geometry}
        material={nodes.baza003.material}
        position={[-0.078, 0.073, -0.088]}
      />

      {srafKuler.map((pos, i) => (
        <mesh
          key={i}
          castShadow
          receiveShadow
          geometry={nodes.sraf_kuler003.geometry}
          material={nodes.sraf_kuler003.material}
          position={pos}
        />
      ))}

      {oprugaPosition.map((pos, i) => (
        <mesh
          key={i}
          geometry={nodes.opruka003.geometry}
          material={nodes.opruka003.material}
          position={pos}
        />
      ))}

      {srafPosition.map((pos, i) => (
        <mesh
          key={i}
          geometry={nodes.sraf013.geometry}
          material={nodes.sraf013.material}
          position={pos}
        />
      ))}

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cjevi003.geometry}
        material={nodes.cjevi003.material}
        position={[0.001, 0.673, -0.284]}
      />

      {hladnjakPositions2.map((pos, i) => (
        <mesh
          key={i}
          castShadow
          receiveShadow
          geometry={nodes.hladnjak_mala_rupa.geometry}
          material={nodes.hladnjak_mala_rupa.material}
          position={pos}
        />
      ))}
      {hladnjakPositions.map((pos, i) => (
        <mesh
          key={i}
          castShadow
          receiveShadow
          geometry={nodes.hladnjakvelika_rupa.geometry}
          material={nodes.hladnjakvelika_rupa.material}
          position={pos}
        />
      ))}
    </group>
  );
}

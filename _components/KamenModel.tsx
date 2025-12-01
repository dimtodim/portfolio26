import { useGLTF, MeshTransmissionMaterial } from "@react-three/drei";
import { useSinRotation } from "@/_components/hooks/useSinRotation";

interface KamenModelProps {
  scale?: number;
  position?: [number, number, number];
  rotationSpeed?: number;
  amplitude?: number;
  frequency?: number;
}

export function KamenModel({
  scale = 2,
  position = [0, 0, 0],
  rotationSpeed = -2,
  amplitude = 0.5,
  frequency = 1.5,
  ...props
}: KamenModelProps) {
  const { nodes } = useGLTF("/models/stone_compressed.glb");

  const groupRef = useSinRotation(rotationSpeed, amplitude, frequency);

  return (
    <group ref={groupRef} scale={scale} position={position} {...props}>
      <mesh {...nodes.Retopo_Cube002}>
        <MeshTransmissionMaterial
          thickness={2}
          roughness={0.01}
          backside
          chromaticAberration={0.1}
          transmission={1}
          ior={1.2}
        />
      </mesh>
    </group>
  );
}

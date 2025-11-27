import { Html } from "@react-three/drei";

export default function Loader() {
  return (
    <Html fullscreen>
      <div className="flex flex-col justify-center w-full h-full items-center">
        <div className="w-8 h-8 border-b-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin" />
      </div>
    </Html>
  );
}

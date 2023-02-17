import { useRef } from "react";
import { useThree } from "@react-three/fiber";
import { DirectionalLight } from "three";

/**
 *
 */
export default function Lights(): JSX.Element {
  const light = useRef<DirectionalLight>(null);

  useThree(({ camera }) => {
    if (light.current && camera) {
      light.current.position.set(
        camera.position.x + camera.position.x * 0.5,
        camera.position.y + camera.position.y * 0.1,
        camera.position.z + camera.position.z * -0.5,
      );
    }
  });

  return (
    <>
      <ambientLight castShadow={false} position={[0, 0, 0]} intensity={0.6} color="white" />
      <directionalLight castShadow={false} ref={light} intensity={0.45} color="white" />
    </>
  );
}

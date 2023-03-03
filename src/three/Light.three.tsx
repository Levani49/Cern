import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { DirectionalLight } from "three";

/**
 * Renders ambient and directional lights in a 3D scene.
 *
 * @returns {JSX.Element} JSX.Element
 */
export default function Lights(): JSX.Element {
  const dirLight = useRef<DirectionalLight>(null);

  useFrame(({ camera }) => {
    if (dirLight.current && camera) {
      dirLight.current.position.set(
        camera.position.x + camera.position.x * 0.5,
        camera.position.y + camera.position.y * 0.1,
        camera.position.z + camera.position.z * -0.5,
      );
    }
  });

  return (
    <>
      <ambientLight position={[0, 0, 0]} intensity={0.6} color="#ffffff" />
      <directionalLight ref={dirLight} intensity={0.45} color="white" />
    </>
  );
}

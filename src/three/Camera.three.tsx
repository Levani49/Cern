import { PerspectiveCamera } from "@react-three/drei";

/**
 *
 */
export default function Camera(): JSX.Element {
  return <PerspectiveCamera makeDefault fov={75} near={0.1} far={1000} position={[5, 3, -4]} />;
}

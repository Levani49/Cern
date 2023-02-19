import { PerspectiveCamera } from "@react-three/drei";

import { useAppSelector } from "../app/hooks";
import { selectCameraPosition } from "../features/cameraSlice";

/**
 *
 */
export default function Camera(): JSX.Element {
  const position = useAppSelector(selectCameraPosition);
  return <PerspectiveCamera makeDefault fov={75} near={0.1} far={1000} position={position} />;
}

import { PerspectiveCamera } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

import { selectCameraPosition } from "../features/cameraSlice";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setDroneCamera } from "../features/droneSlice";

/**
 *
 */
export default function Camera(): JSX.Element {
  const dispatch = useAppDispatch();
  const { camera } = useThree();
  const position = useAppSelector(selectCameraPosition);

  dispatch(setDroneCamera(camera));

  return <PerspectiveCamera makeDefault fov={75} near={0.1} far={1000} position={position} />;
}

import { OrbitControls } from "@react-three/drei";
import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectDroneState, setDroneCamera } from "../features/droneSlice";
import { selectCameraPosition } from "../features/cameraSlice";

import Player from "./Player.three";
/**
 *
 * @param props
 */
export default function Controls(): JSX.Element {
  const droneType = useAppSelector(selectDroneState);
  const dispatch = useAppDispatch();
  const { camera } = useThree();
  const position = useAppSelector(selectCameraPosition);

  useEffect(() => {
    dispatch(setDroneCamera(camera));
    camera.position.set(...position);
  }, [camera, dispatch, position]);

  const rotate = droneType === "circle";
  const isFreeFly = droneType === "fly";

  if (isFreeFly) {
    return <Player currentCameraPosition={[camera.position.x, camera.position.y, camera.position.z]} />;
  }

  return <OrbitControls makeDefault autoRotate={rotate} />;
}

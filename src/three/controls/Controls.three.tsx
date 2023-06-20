// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { OrbitControlsProps } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import { selectCameraPosition, selectDroneState, setCamera } from "@features/camera/cameraSlice";

import CustomOrbitControl from "@three/lib/modified_orbit_controls/CustomOrbitControl";
import Player from "@three/player/Player.three";

export default function Controls(): JSX.Element {
  const dispatch = useAppDispatch();
  const { camera } = useThree();
  const droneType = useAppSelector(selectDroneState);
  const position = useAppSelector(selectCameraPosition);
  const controlsRef = useRef<OrbitControlsProps>(null);

  const cameraPosition = useMemo(() => {
    return position;
  }, [position]);

  useEffect(() => {
    dispatch(setCamera(camera));
  }, [cameraPosition, camera, dispatch]);

  useEffect(() => {
    const stopDampingEffect = (): void => {
      if (controlsRef.current) {
        controlsRef.current.enabled = false;
        controlsRef.current.enableDamping = false;
        if (controlsRef.current.update) {
          controlsRef.current.update();
        }
        controlsRef.current.enableDamping = true;
        controlsRef.current.enabled = true;
      }
    };
    window.addEventListener("pointerdown", stopDampingEffect);

    return () => window.removeEventListener("pointerdown", stopDampingEffect);
  }, []);

  const rotate = droneType === "circle";
  const isFreeFly = droneType === "fly";
  const enableControls = droneType === "circle" || droneType === "idle";

  if (isFreeFly) {
    return (
      <Player currentCameraPosition={[camera.position.x, camera.position.y, camera.position.z]} />
    );
  }

  return enableControls && <CustomOrbitControl ref={controlsRef} makeDefault autoRotate={rotate} />;
}

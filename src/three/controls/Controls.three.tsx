// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { OrbitControlsProps } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

import { useAppSelector } from "@store/hooks";

import { selectDroneState } from "@features/camera/cameraSlice";

import CustomOrbitControl from "@three/lib/modified_orbit_controls/CustomOrbitControl";
import Player from "@three/player/Player.three";

export default function Controls(): JSX.Element {
  const { camera } = useThree();
  const droneType = useAppSelector(selectDroneState);
  const controlsRef = useRef<OrbitControlsProps>(null);

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

  const enableControls = droneType === "circle" || droneType === "idle";

  if (droneType === "fly") {
    return (
      <Player
        currentCameraPosition={[
          camera.position.x,
          camera.position.y,
          camera.position.z
        ]}
      />
    );
  }

  return (
    enableControls && (
      <CustomOrbitControl
        ref={controlsRef}
        makeDefault
        autoRotate={droneType === "circle"}
      />
    )
  );
}

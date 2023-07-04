// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { OrbitControlsProps } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

import { useAppSelector } from "@store/hooks";

import { selectCameraType } from "@features/camera/cameraSlice";

import CustomOrbitControl from "@three/lib/modified_orbit_controls/CustomOrbitControl";
import PlayerControl from "@three/player-control/PlayerControl.three";

import useDrone from "@hooks/useDrone/useDrone.hook";

export default function Controls(): JSX.Element {
  const { camera } = useThree();
  const { currentMode } = useDrone();
  const cameraType = useAppSelector(selectCameraType);

  const controlsRef = useRef<OrbitControlsProps>(null);

  useEffect(() => {
    const stopDampingEffect = (): void => {
      if (currentMode) {
        return;
      }
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
  }, [currentMode, cameraType]);

  const enableControls = currentMode === "circle" || currentMode === "idle";

  if (currentMode === "fly") {
    return (
      <PlayerControl
        currentCameraPosition={[
          camera.position.x,
          camera.position.y,
          camera.position.z
        ]}
      />
    );
  }

  return (
    <CustomOrbitControl
      ref={controlsRef}
      enabled={enableControls}
      autoRotate={currentMode === "circle"}
      maxDistance={170}
      makeDefault
    />
  );
}

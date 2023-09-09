// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { OrbitControlsProps } from "@react-three/drei";
import { useRef } from "react";

import type { DroneTypes } from "#/types/app.types";
import CustomOrbitControl from "#/lib/controls/modified_orbit_controls/CustomOrbitControl";
import { isMobile } from "#/utils/isMobile";
import { selectRotationSpeed } from "#/store/features/cameraSlice";
import { useAppSelector } from "#/store/hooks";
import useEventListener from "#/hooks/useEventListener.hook";

interface Props {
  currentMode: DroneTypes;
}

export default function OrbitControls({ currentMode }: Props) {
  const controlsRef = useRef<OrbitControlsProps>(null);
  const rotationSpeed = useAppSelector(selectRotationSpeed);

  useEventListener("pointerdown", () => {
    if (currentMode !== "idle") {
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
  });

  const enableControls = currentMode === "circle" || currentMode === "idle";

  const enablePan = isMobile() === false;

  return (
    <CustomOrbitControl
      ref={controlsRef}
      rotateSpeed={rotationSpeed}
      enabled={enableControls}
      autoRotate={currentMode === "circle"}
      enablePan={enablePan}
      maxDistance={170}
      makeDefault
    />
  );
}

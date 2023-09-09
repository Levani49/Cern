// eslint-disable-next-line #/typesscript-eslint/ban-ts-comment
// @ts-nocheck

import CustomOrbitControl from "#/three/lib/modified_orbit_controls/CustomOrbitControl";

import { OrbitControlsProps } from "@react-three/drei";
import { useRef } from "react";

import { DroneTypes } from "#/types/app.types";
import { isMobile } from "#/utils/isMobile.utils";
import { useAppSelector } from "#/store/hooks";
import { selectRotationSpeed } from "#/features/camera/cameraSlice";
import { useEventListener } from "#/hooks/useEventListener/useEventListener.hook";

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

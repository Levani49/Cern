// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { OrbitControlsProps } from "@react-three/drei";
import { useRef } from "react";

import { DroneTypes } from "@/types/app.types";

import { useAppSelector } from "@store/hooks";

import { selectRotationSpeed } from "@features/camera/cameraSlice";

import CustomOrbitControl from "@three/lib/modified_orbit_controls/CustomOrbitControl";

import { useEventListener } from "@hooks/useEventListener/useEventListener.hook";

interface Props {
  currentMode: DroneTypes;
}

export default function OrbitControls({ currentMode }: Props): JSX.Element {
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

  return (
    <CustomOrbitControl
      ref={controlsRef}
      rotateSpeed={rotationSpeed}
      enabled={enableControls}
      autoRotate={currentMode === "circle"}
      maxDistance={170}
      makeDefault
    />
  );
}

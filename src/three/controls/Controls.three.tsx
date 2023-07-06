// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { OrbitControlsProps } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";

import CustomOrbitControl from "@three/lib/modified_orbit_controls/CustomOrbitControl";
import PlayerControl from "@three/player-control/PlayerControl.three";

import useDrone from "@hooks/useDrone/useDrone.hook";
import { useEventListener } from "@hooks/useEventListener/useEventListener.hook";

export default function Controls(): JSX.Element {
  const { camera } = useThree();
  const { currentMode } = useDrone();

  const controlsRef = useRef<OrbitControlsProps>(null);

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

import { PerspectiveCamera } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

import { selectDroneState } from "../features/droneSlice";
import { selectCameraPosition } from "../features/cameraSlice";

import { useAppSelector } from "../app/hooks";
import { useHelix } from "../hooks/helix.hook";

/**
 *
 */
export default function Camera(): JSX.Element {
  const position = useAppSelector(selectCameraPosition);
  const droneState = useAppSelector(selectDroneState);
  const { camera } = useThree();
  const { helixStart, helixStop } = useHelix(camera);

  useEffect(() => {
    if (droneState === "helix") {
      helixStart();
    } else {
      helixStop();
    }
  }, [droneState]);

  return <PerspectiveCamera makeDefault fov={75} near={0.1} far={1000} position={position} />;
}

// const radius = 6.6;
// const objPerTurn = 20;
// let i = 1;

// const angleStep = (Math.PI * 2) / objPerTurn;
// const heightStep = 0.1;
// const primaryHeight = 0.5;

// useFrame(({ camera }): void => {
//   camera.position.set(
//     Math.cos(angleStep * i) * radius,
//     primaryHeight + heightStep * i,
//     Math.sin(angleStep * i) * radius
//   )
//   i += 0.02;
// })

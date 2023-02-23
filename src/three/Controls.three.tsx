import { OrbitControls, PointerLockControls } from "@react-three/drei";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { droneMode, selectDroneState, setDroneCamera } from "../features/droneSlice";
import { onEscapeKeyDown } from "../utils/userEvents.utils";
import store from "../app/store";
import { useThree } from "@react-three/fiber";
import { selectCameraPosition } from "../features/cameraSlice";

/**
 *
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

  useEffect(() => {
    if (droneType === "fly") {
      /**
       *
       * @param e
       */
      const dispatcher = (e: KeyboardEvent): void => {
        document.exitPointerLock();
        onEscapeKeyDown(e, () => store.dispatch(droneMode("idle")));
        console.log("yea");
      };

      window.addEventListener("keydown", dispatcher);

      return () => window.removeEventListener("keydown", dispatcher);
    }
  }, [droneType]);

  const rotate = droneType === "circle";
  const isFreeFly = droneType === "fly";

  if (isFreeFly) {
    return <PointerLockControls />;
  }

  return <OrbitControls makeDefault autoRotate={rotate} />;
}

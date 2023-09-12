import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

import {
  selectCameraEffect,
  triggerCameraEffect,
} from "#/store/features/cameraSlice";
import { useAppDispatch, useAppSelector } from "#/store/hooks";
import useCamera from "#/hooks/useCamera";

export default function Camera() {
  const dispatch = useAppDispatch();
  const { size, camera } = useThree();
  const cameraEffect = useAppSelector(selectCameraEffect);

  const {
    cameraType,
    orthographicCameraProps,
    perspectiveCameraProps,
    setCamera,
    setOrthographicCameraDimensions,
    setPerspectiveCameraDimensions,
  } = useCamera();

  useEffect(() => {
    dispatch(setCamera(camera));
  }, [camera, setCamera, dispatch]);

  useEffect(() => {
    dispatch(
      setOrthographicCameraDimensions({
        camera,
        width: size.width,
        height: size.height,
      })
    );
    dispatch(
      setPerspectiveCameraDimensions({
        camera,
        width: size.width,
        height: size.height,
      })
    );

    camera.updateProjectionMatrix();

    if (cameraEffect === "pending") {
      dispatch(triggerCameraEffect("success"));
    }
  }, [
    camera,
    cameraType,
    size.width,
    size.height,
    setOrthographicCameraDimensions,
    setPerspectiveCameraDimensions,
    cameraEffect,
    dispatch,
  ]);

  return (
    <>
      {cameraType === "orthographic" ? (
        <OrthographicCamera
          {...orthographicCameraProps}
          near={-1000}
          far={1000}
          makeDefault
          manual
        />
      ) : (
        <PerspectiveCamera {...perspectiveCameraProps} makeDefault manual />
      )}
    </>
  );
}

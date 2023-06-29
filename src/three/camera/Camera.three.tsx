import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";

import { useAppDispatch } from "@store/hooks";

import useCamera from "@hooks/useCamera/useCamera.hook";

export default function Camera(): JSX.Element {
  const dispatch = useAppDispatch();
  const { size, camera } = useThree();

  const {
    cameraType,
    orthographicCameraProps,
    perspectiveCameraProps,
    setCamera,
    setOrthographicCameraDimensions,
    setPerspectiveCameraDimensions,
    setCameraPosition
  } = useCamera();

  useEffect(() => {
    dispatch(setCamera(camera));
  }, [camera, dispatch]);

  useEffect(() => {
    dispatch(
      setOrthographicCameraDimensions({
        camera,
        width: size.width,
        height: size.height
      })
    );
    dispatch(
      setPerspectiveCameraDimensions({
        camera,
        width: size.width,
        height: size.height
      })
    );
    camera.updateProjectionMatrix();
  }, [
    camera,
    size.width,
    size.height,
    setOrthographicCameraDimensions,
    setPerspectiveCameraDimensions,
    dispatch
  ]);

  // TODO fix position issue on snapfile
  useFrame(({ camera }) => {
    dispatch(
      setCameraPosition([camera.position.x, camera.position.y, camera.position.z])
    );
  });

  camera.lookAt(0, 0, 0);

  return (
    <>
      {cameraType === "orthographic" ? (
        <OrthographicCamera {...orthographicCameraProps} makeDefault manual />
      ) : (
        <PerspectiveCamera {...perspectiveCameraProps} makeDefault manual />
      )}
    </>
  );
}

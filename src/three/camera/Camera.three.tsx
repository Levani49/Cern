import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";

import { Euler, Matrix4, Spherical, Vector3 } from "three";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import {
  selectCameraType,
  selectOrthographicCameraProps,
  selectPerspectiveCameraProps,
  setCameraPosition,
  SetOrthoArgs,
  setOrthographicCameraDimensions,
  setPerspectiveCameraDimensions
} from "@features/camera/cameraSlice";

interface OrthographicReturnType {
  left: number;
  right: number;
  top: number;
  bottom: number;
  position: [x: number, y: number, z: number];
  matrix: Matrix4;
  rotation: Euler;
  near: number;
  far: number;
}

interface PerspectiveReturnType {
  fov: 75;
  aspect: number;
  near: number;
  far: number;
  position: [x: number, y: number, z: number];
}

export default function Camera(): JSX.Element {
  const dispatch = useAppDispatch();
  const { size, camera } = useThree();

  const cameraType = useAppSelector(selectCameraType);
  const orthographicCameraProps = useAppSelector(selectOrthographicCameraProps);
  const perspectiveCameraProps = useAppSelector(selectPerspectiveCameraProps);

  useEffect(() => {
    dispatch(
      setOrthographicCameraDimensions({
        camera,
        width: size.width,
        height: size.height
      })
    );
  }, [camera, size]);

  useEffect(() => {
    dispatch(
      setPerspectiveCameraDimensions({
        camera,
        width: size.width,
        height: size.height
      })
    );
  }, [camera, size]);

  useFrame(({ camera }) => {
    dispatch(setCameraPosition([camera.position.x, camera.position.y, camera.position.z]));
  });

  useEffect(() => {
    dispatch(setCameraPosition([3, 3, 3]));
  }, []);

  camera.lookAt(0, 0, 0);

  return (
    <>
      {cameraType === "orthographic" ? (
        <OrthographicCamera zoom={1} {...orthographicCameraProps} makeDefault />
      ) : (
        <PerspectiveCamera {...perspectiveCameraProps} makeDefault />
      )}
    </>
  );
}

export function calculatePerspectiveDimesnions(args: SetOrthoArgs): PerspectiveReturnType {
  const { camera, width, height } = args;
  const pos = camera.position;
  const radius = pos.distanceTo(new Vector3(0, 0, 0)) / camera.zoom;
  const sphere = new Spherical();
  sphere.setFromVector3(pos);
  const position = [
    radius * Math.sin(sphere.theta) * Math.sin(sphere.phi),
    radius * Math.cos(sphere.phi),
    radius * Math.cos(sphere.theta) * Math.sin(sphere.phi)
  ] as [x: number, y: number, z: number];

  return {
    fov: 75,
    position,
    aspect: width / height,
    near: 0.01,
    far: 1000
  };
}

export function calculateOrthographicDimensions(args: SetOrthoArgs): OrthographicReturnType {
  const { camera, width, height } = args;

  const cameraMatrix = camera.matrix.clone();
  const cameraPosition = camera.position;
  const lineOfSight = new Vector3();

  camera.getWorldDirection(lineOfSight);

  const distance = new Vector3(0, 0, 0).clone().sub(cameraPosition);
  const depth = distance.dot(lineOfSight);

  const aspect = width / height;
  const heightOrtho = depth * 2 * Math.atan((75 * (Math.PI / 180)) / 2);
  const widthOrtho = heightOrtho * aspect;

  return {
    left: widthOrtho / -2,
    right: widthOrtho / 2,
    top: heightOrtho / 2,
    bottom: heightOrtho / -2,
    position: [cameraPosition.x, cameraPosition.y, cameraPosition.z],
    matrix: cameraMatrix,
    rotation: camera.rotation,
    near: 0.01,
    far: 1000
  };
}

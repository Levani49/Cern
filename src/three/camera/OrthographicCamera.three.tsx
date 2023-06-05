import { useEffect, useMemo, useRef } from "react";
import { Camera, Vector3, Matrix4, Euler, Spherical } from "three";
import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

import { selectCameraPosition, selectCameraType } from "../../features/camera/cameraSlice";
import { useAppSelector } from "../../app/hooks";

interface OrthographicReturnType {
  left: number;
  right: number;
  top: number;
  bottom: number;
  position: Vector3;
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
  position: Vector3;
}

interface OrthoCamera extends Camera {
  zoom: number;
}

export default function OrthographicCam(): JSX.Element {
  const cameraType = useAppSelector(selectCameraType);
  const { size, camera } = useThree();
  const cameraPosition = useAppSelector(selectCameraPosition);

  const orthoDimensions = useMemo(
    () => calculateOrthoDimensions(camera, size.width, size.height),
    [camera, size],
  );

  const perspectiveDimensions = useMemo(
    () => calculatePerspectiveDimesnions(camera, size.width, size.height),
    [camera, size],
  );

  const perspectiveCameraRef = useRef<Camera | null>(null);

  useEffect(() => {
    if (perspectiveCameraRef.current && cameraPosition) {
      perspectiveCameraRef.current.position.set(...cameraPosition);
    }
  }, [cameraPosition]);

  camera.lookAt(0, 0, 0);

  return (
    <>
      {cameraType === "orthographic" ? (
        <OrthographicCamera zoom={1} {...orthoDimensions} makeDefault />
      ) : (
        <PerspectiveCamera ref={perspectiveCameraRef} {...perspectiveDimensions} makeDefault />
      )}
    </>
  );
}

function calculatePerspectiveDimesnions(
  camera: OrthoCamera,
  width: number,
  height: number,
): PerspectiveReturnType {
  const pos = camera.position;
  const radius = pos.distanceTo(new Vector3(0, 0, 0)) / camera.zoom;
  const sphere = new Spherical();
  sphere.setFromVector3(pos);
  const position = new Vector3(
    radius * Math.sin(sphere.theta) * Math.sin(sphere.phi),
    radius * Math.cos(sphere.phi),
    radius * Math.cos(sphere.theta) * Math.sin(sphere.phi),
  );

  return {
    fov: 75,
    position,
    aspect: width / height,
    near: 0.01,
    far: 1000,
  };
}

function calculateOrthoDimensions(
  camera: Camera,
  width: number,
  height: number,
): OrthographicReturnType {
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
    position: cameraPosition,
    matrix: cameraMatrix,
    rotation: camera.rotation,
    near: 0.01,
    far: 1000,
  };
}

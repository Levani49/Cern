import { Spherical, Vector3 } from "three";

import type {
  OrthographicReturnType,
  PerspectiveReturnType,
} from "#/types/app.types";
import { SetOrthoArgs } from "#/store/features/cameraSlice";

export function calculatePerspectiveDimesnions(
  args: SetOrthoArgs
): PerspectiveReturnType {
  const { camera, width, height } = args;
  const pos = camera.position;
  const radius = pos.distanceTo(new Vector3(0, 0, 0)) / camera.zoom;
  const sphere = new Spherical();
  sphere.setFromVector3(pos);
  const position = [
    radius * Math.sin(sphere.theta) * Math.sin(sphere.phi),
    radius * Math.cos(sphere.phi),
    radius * Math.cos(sphere.theta) * Math.sin(sphere.phi),
  ] as [x: number, y: number, z: number];

  return {
    fov: 75,
    position,
    aspect: width / height,
    near: 0.01,
    far: 1000,
  };
}
export function calculateOrthographicDimensions(
  args: SetOrthoArgs
): OrthographicReturnType {
  const { camera, width, height } = args;

  const cameraMatrix = camera.matrix.clone();
  const cameraPosition = camera.position;
  const lineOfSight = new Vector3();

  camera.getWorldDirection(lineOfSight);

  const distance = new Vector3(0, 0, 0).clone().sub(cameraPosition);
  const depth = distance.dot(lineOfSight);

  const frustumHeight = 2 * Math.tan((75 * (Math.PI / 180)) / 2) * depth;
  const frustumWidth = frustumHeight * (width / height);

  return {
    left: -frustumWidth / 2,
    right: frustumWidth / 2,
    top: frustumHeight / 2,
    bottom: -frustumHeight / 2,
    position: [cameraPosition.x, cameraPosition.y, cameraPosition.z],
    matrix: cameraMatrix,
    rotation: [camera.rotation.x, camera.rotation.y, camera.rotation.z],
    near: 0.01,
    far: 1000,
  };
}

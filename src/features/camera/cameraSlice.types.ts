import { Camera } from "@react-three/fiber";

import { Euler } from "three";

import { DroneTypes } from "@type/app.types";

export type ViewModes = "default" | "left" | "right";

type OrthographicProps = {
  left: number;
  right: number;
  top: number;
  bottom: number;
  position: [x: number, y: number, z: number];
  rotation: Euler;
  near: number;
  far: number;
};

type PerspectiveProps = {
  fov: number;
  position: [x: number, y: number, z: number];
  aspect: number;
  near: number;
  far: number;
};

export interface ICameraSettings {
  position: [number, number, number];
  currentState: DroneTypes;
  droneType: DroneTypes;
  camera: Camera | null;
  cameraType: "perspective" | "orthographic";
  showFlyModal: boolean;
  viewMode: ViewModes;
  orthographicCameraProps: OrthographicProps | undefined;
  perspectiveCameraProps: PerspectiveProps | undefined;
}

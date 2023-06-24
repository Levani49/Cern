import { Camera } from "@react-three/fiber";

import { Euler } from "three";

import { DroneTypes } from "@type/app.types";

export type ViewModes = "default" | "left" | "right";

export type CameraTypes = "perspective" | "orthographic";

export type OrthographicProps =
  | {
      left: number;
      right: number;
      top: number;
      bottom: number;
      position: [x: number, y: number, z: number];
      rotation: Euler;
      near: number;
      far: number;
    }
  | undefined;

export type PerspectiveProps =
  | {
      fov: number;
      position: [x: number, y: number, z: number];
      aspect: number;
      near: number;
      far: number;
    }
  | undefined;

export interface ICameraSettings {
  defaultPosition: [number, number, number];
  currentState: DroneTypes;
  droneType: DroneTypes;
  camera: Camera | null;
  cameraType: CameraTypes;
  showFlyModal: boolean;
  viewMode: ViewModes;
  orthographicCameraProps: OrthographicProps | undefined;
  perspectiveCameraProps: PerspectiveProps | undefined;
}

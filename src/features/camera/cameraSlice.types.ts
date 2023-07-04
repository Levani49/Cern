import { Camera } from "@react-three/fiber";

import { DroneTypes } from "@type/app.types";

export type coordinates = [x: number, y: number, z: number];

export type ViewModes =
  | "iso"
  | "left"
  | "right"
  | "front"
  | "bottom"
  | "back"
  | "top";

export type CameraTypes = "perspective" | "orthographic";

export type OrthographicProps =
  | {
      left: number;
      right: number;
      top: number;
      bottom: number;
      position: coordinates;
      rotation: coordinates;
      near: number;
      far: number;
    }
  | undefined;

export type PerspectiveProps =
  | {
      fov: number;
      position: coordinates;
      aspect: number;
      near: number;
      far: number;
    }
  | undefined;

export interface ICameraSettings {
  defaultPosition: coordinates | undefined;
  currentState: DroneTypes;
  droneType: DroneTypes;
  camera: Camera | null;
  cameraType: CameraTypes;
  showFlyModal: boolean;
  viewMode: ViewModes;
  orthographicCameraProps: OrthographicProps | undefined;
  perspectiveCameraProps: PerspectiveProps | undefined;
  triggerCameraEffect: "idle" | "pending" | "success";
}

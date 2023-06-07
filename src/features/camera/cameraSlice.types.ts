import { Camera } from "@react-three/fiber";

import { DroneTypes } from "@type/app.types";

export type ViewModes = "default" | "left" | "right";

export interface ICameraSettings {
  position: [number, number, number];
  currentState: DroneTypes;
  droneType: DroneTypes;
  camera: Camera | null;
  cameraType: "perspective" | "orthographic";
  showFlyModal: boolean;
  viewMode: ViewModes;
}

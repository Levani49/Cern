import { Camera } from "@react-three/fiber";

import type { DroneTypes, eFn } from "../app/app.types";

import Helix from "../model/helix.model";
import Rocket from "../model/rocket.model";

const helix = new Helix();
const rocket = new Rocket();

/**
 *
 */
const emptyFn: eFn = () => {
  return;
};

/**
 *
 * @param type
 */
export const stopDroneMode = (type: DroneTypes): void => {
  switch (type) {
    case "helix":
      helix.stop();
      break;
    case "rocket":
      rocket.stop();
      break;
  }
};

/**
 *
 * @param camera
 * @param type
 * @param cb
 */
export const startDroneMode = (camera: Camera, type: DroneTypes, cb: eFn = emptyFn): void => {
  switch (type) {
    case "helix":
      helix.start(camera, cb);
      break;
    case "rocket":
      rocket.start(camera, cb);
      break;
    default:
      return;
  }
};

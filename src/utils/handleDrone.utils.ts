import { Camera } from "@react-three/fiber";

import type { DroneTypes, eFn } from "../app/app.types";

import Helix from "../model/helix.model";
import Rocket from "../model/rocket.model";
import Zoom from "../model/zoom.model";
import Cinema from "../model/cinema.model";

const helix = new Helix();
const rocket = new Rocket();
const zoom = new Zoom();
const cinema = new Cinema();

/**
 *
 */
const emptyFn: eFn = () => {
  return;
};

/**
 *
 * @param camera
 * @param type
 */
export const stopDroneMode = (camera: Camera, type: DroneTypes): void => {
  switch (type) {
    case "helix":
      helix.stop();
      break;
    case "rocket":
      rocket.stop();
      break;
    case "zoom":
      if (camera.type === "PerspectiveCamera") {
        zoom.stop(camera);
      }
      break;
    case "z0":
      cinema.stop();
      break;
    default:
      return;
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
    case "zoom":
      if (camera.type === "PerspectiveCamera") {
        zoom.start(camera, cb);
      }
      break;
    case "z0":
      cinema.start(camera, cb);
      break;
    default:
      return;
  }
};

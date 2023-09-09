import Cinema from "#/models/drone/cinema/cinema.model";
import Helix from "#/models/drone/helix/helix.model";
import Rocket from "#/models/drone/rocket/rocket.model";
import Zoom from "#/models/drone/zoom/zoom.model";

import { Camera } from "@react-three/fiber";

import { DroneTypes, emptyFunc } from "#/types/app.types";

const helix = new Helix();
const rocket = new Rocket();
const zoom = new Zoom();
const cinema = new Cinema();

const emptyFn: emptyFunc = (): void => {
  return;
};

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

export const startDroneMode = (
  camera: Camera,
  type: DroneTypes,
  cb: emptyFunc = emptyFn
): void => {
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

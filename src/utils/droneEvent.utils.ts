import EventsEmitter from "events";

import store from "@store/store";

import { setDroneMode } from "@features/camera/cameraSlice";

const ee = new EventsEmitter();

ee.on("stop", () => store.dispatch(setDroneMode("idle")));

export default ee;
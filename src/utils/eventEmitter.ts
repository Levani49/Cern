import EventsEmitter from "events";

import { setDroneMode } from "#/store/features/cameraSlice";
import store from "#/store/store";

const ee = new EventsEmitter();

ee.on("stopDrone", () => store.dispatch(setDroneMode("idle")));

export default ee;

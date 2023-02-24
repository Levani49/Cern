import EventsEmitter from "events";
import store from "../app/store";

import { setDroneMode } from "../features/cameraSlice";

const ee = new EventsEmitter();

ee.on("stop", () => store.dispatch(setDroneMode("idle")));

export default ee;

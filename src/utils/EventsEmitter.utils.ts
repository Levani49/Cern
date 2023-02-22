import EventsEmitter from "events";
import store from "../app/store";
import { droneMode } from "../features/droneSlice";

const ee = new EventsEmitter();

ee.on("stop", () => store.dispatch(droneMode("idle")));

export default ee;

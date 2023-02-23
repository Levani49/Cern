import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Camera } from "@react-three/fiber";

import { startDroneMode, stopDroneMode } from "../utils/handleDrone.utils";
import ee from "../utils/EventsEmitter.utils";

import type { RootState, DroneTypes } from "../app/app.types";

interface IDroneSettings {
  currentState: DroneTypes;
  droneType: DroneTypes;
  camera: Camera | null;
}

const initialState: IDroneSettings = {
  currentState: "idle",
  droneType: "idle",
  camera: null,
};

export const droneSlice = createSlice({
  name: "drone",
  initialState,
  reducers: {
    /**
     *
     * @param state
     * @param action
     */
    droneMode: (state, action: PayloadAction<DroneTypes>) => {
      state.droneType = action.payload;

      /**
       *
       */
      const handleFinish = (): boolean => ee.emit("stop");

      if (state.camera) {
        switch (state.droneType) {
          case "idle":
            stopDroneMode(state.currentState);
            break;
          default:
            if (state.currentState !== "idle") {
              stopDroneMode(state.currentState);
            }
            startDroneMode(state.camera, state.droneType, handleFinish);
            state.currentState = state.droneType;
        }
      }
    },
    /**
     *
     * @param state
     * @param action
     */
    setDroneCamera: (state, action: PayloadAction<Camera>) => {
      state.camera = action.payload;
    },
  },
});

export default droneSlice.reducer;
export const { droneMode, setDroneCamera } = droneSlice.actions;
/**
 *
 * @param state
 */
export const selectDroneState = (state: RootState): DroneTypes => state.drone.droneType;

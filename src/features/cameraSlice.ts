import { createSlice } from "@reduxjs/toolkit";
import { Vector3 } from "@react-three/fiber";

import type { RootState } from "../app/app.types";

interface ICameraSettings {
  position: Vector3;
}

const initialState: ICameraSettings = {
  position: [3, 3, 3],
};

/**
 * A Redux slice that manages the state of the Camera.
 *
 * @module infoSlice
 */
export const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {
    /**
     * The shape of the settings state.
     *
     * @param state
     * @typedef {object} SettingsState
     * @property {boolean} show - Whether the settings modal is shown or not.
     */
    setLeftCameraView: (state) => {
      state.position = [0, 0, 5];
    },
    /**
     *
     * @param state
     */
    setRightCameraView: (state) => {
      state.position = [5, 0.5, 0];
    },
    /**
     *
     * @param state
     */
    setDefaultView: (state) => {
      state.position = [5, 3, -4];
    },
  },
});

export default cameraSlice.reducer;
export const { setLeftCameraView, setRightCameraView, setDefaultView } = cameraSlice.actions;

/**
 *
 * @param state
 */
export const selectCameraPosition = (state: RootState): Vector3 => state.camera.position;

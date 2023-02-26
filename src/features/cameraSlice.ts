import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { Camera } from "@react-three/fiber";

import { startDroneMode, stopDroneMode } from "../utils/handleDrone.utils";
import ee from "../utils/eventsEmitter.utils";

import type { DroneTypes, RootState } from "../app/app.types";

type ViewModes = "default" | "left" | "right";

interface ICameraSettings {
  position: [number, number, number];
  currentState: DroneTypes;
  droneType: DroneTypes;
  camera: Camera | null;
  showFlyModal: boolean;
  viewMode: ViewModes;
}

const initialState: ICameraSettings = {
  position: [6, 3, 3],
  currentState: "idle",
  droneType: "idle",
  camera: null,
  showFlyModal: false,
  viewMode: "default",
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
      state.viewMode = "left";
    },
    /**
     *
     * @param state
     */
    setRightCameraView: (state) => {
      state.position = [5, 0.5, 0];
      state.viewMode = "right";
    },
    /**
     *
     * @param state
     */
    setDefaultView: (state) => {
      state.position = [5, 3, -4];
      state.viewMode = "default";
    },
    /**
     *
     * @param state
     * @param action
     */
    setDroneMode: (state, action: PayloadAction<DroneTypes>) => {
      state.droneType = action.payload;
      /**
       *
       */
      const handleFinish = (): boolean => ee.emit("stop");

      if (state.camera) {
        switch (state.droneType) {
          case "idle":
            stopDroneMode(state.camera, state.currentState);
            break;
          default:
            if (state.currentState !== "idle") {
              stopDroneMode(state.camera, state.currentState);
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
    setCamera: (state, action: PayloadAction<WritableDraft<Camera>>) => {
      state.camera = action.payload as Camera;
    },
    /**
     *
     * @param state
     * @param action
     */
    setFlyModalState: (state, action: PayloadAction<boolean>) => {
      state.showFlyModal = action.payload;
    },
  },
});

export default cameraSlice.reducer;
export const {
  setLeftCameraView,
  setRightCameraView,
  setDefaultView,
  setCamera,
  setDroneMode,
  setFlyModalState,
} = cameraSlice.actions;

/**
 *
 * @param state
 */
export const selectCameraPosition = (
  state: RootState,
): [number, number, number] => state.camera.position;
/**
 *
 * @param state
 */
export const selectDroneState = (state: RootState): DroneTypes =>
  state.camera.droneType;

/**
 *
 * @param state
 */
export const selectFlyModalState = (state: RootState): boolean =>
  state.camera.showFlyModal;

/**
 *
 * @param state
 */
export const selectCameraViewMode = (state: RootState): ViewModes =>
  state.camera.viewMode;

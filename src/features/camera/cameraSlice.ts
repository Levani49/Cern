import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { Camera } from "@react-three/fiber";

import ee from "../../utils/droneEvent.utils";
import { startDroneMode, stopDroneMode } from "../../utils/handleDrone.utils";

import type { RootState } from "../../app/store";
import type { DroneTypes } from "../../types/app.types";
import type { ICameraSettings, ViewModes } from "./cameraSlice.types";

const initialState: ICameraSettings = {
  position: [3, 3, 3],
  currentState: "idle",
  droneType: "idle",
  camera: null,
  cameraType: "perspective",
  showFlyModal: false,
  viewMode: "default",
};

export const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {
    rehydrate: (state, action) => {
      return action.payload.camera || state;
    },

    setLeftCameraView: (state) => {
      state.position = [0, 0, 5];
      state.viewMode = "left";
    },

    setRightCameraView: (state) => {
      state.position = [5, 0.5, 0];
      state.viewMode = "right";
    },

    setDefaultView: (state) => {
      state.position = [3, 3, 4];
      state.viewMode = "default";
    },

    setDroneMode: (state, action: PayloadAction<DroneTypes>) => {
      state.droneType = action.payload;
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

    setCamera: (state, action: PayloadAction<WritableDraft<Camera>>) => {
      state.camera = action.payload as Camera;
    },

    setFlyModalState: (state, action: PayloadAction<boolean>) => {
      state.showFlyModal = action.payload;
    },

    setCameraType: (state, action: PayloadAction<"perspective" | "orthographic">) => {
      state.cameraType = action.payload;
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
  setCameraType,
} = cameraSlice.actions;

export const selectCameraPosition = (state: RootState): [number, number, number] =>
  state.camera.position;

export const selectDroneState = (state: RootState): DroneTypes => state.camera.droneType;
export const selectFlyModalState = (state: RootState): boolean => state.camera.showFlyModal;
export const selectCameraViewMode = (state: RootState): ViewModes => state.camera.viewMode;
export const selectCameraType = (state: RootState): "perspective" | "orthographic" =>
  state.camera.cameraType;

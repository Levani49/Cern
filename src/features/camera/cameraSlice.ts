import { Camera } from "@react-three/fiber";

import {
  calculateOrthographicDimensions,
  calculatePerspectiveDimesnions
} from "@/three/camera/Camera.three";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { Camera as OriginCamera, Vector3 } from "three";

import type { DroneTypes } from "@type/app.types";

import type { RootState } from "@store/store";

import ee from "@utils/droneEvent.utils";
import { startDroneMode, stopDroneMode } from "@utils/handleDrone.utils";

import type { ICameraSettings, ViewModes } from "./cameraSlice.types";

const initialState: ICameraSettings = {
  position: [3, 3, 3],
  currentState: "idle",
  droneType: "idle",
  camera: null,
  cameraType: "perspective",
  showFlyModal: false,
  viewMode: "default",
  orthographicCameraProps: undefined,
  perspectiveCameraProps: {
    fov: 75,
    position: [0, 0, 0],
    aspect: 1,
    near: 0.1,
    far: 200
  }
};

interface OrthoCamera extends OriginCamera {
  zoom: number;
}

export interface SetOrthoArgs {
  camera: OrthoCamera;
  width: number;
  height: number;
}

export const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {
    rehydrate: (state, action) => {
      return action.payload.camera || state;
    },

    setCameraPosition: (state, action: PayloadAction<[x: number, y: number, z: number]>) => {
      if (state.droneType !== "idle") {
        return;
      }

      if (state.perspectiveCameraProps?.position) {
        state.perspectiveCameraProps.position = action.payload;
      }
      if (state.orthographicCameraProps?.position) {
        state.orthographicCameraProps.position = action.payload;
      }
    },

    setOrthographicCameraDimensions: (state, action: PayloadAction<SetOrthoArgs>) => {
      state.orthographicCameraProps = calculateOrthographicDimensions(action.payload);
    },
    setPerspectiveCameraDimensions: (state, action: PayloadAction<SetOrthoArgs>) => {
      state.perspectiveCameraProps = calculatePerspectiveDimesnions(action.payload);
    },

    setLeftCameraView: (state) => {
      if (state.perspectiveCameraProps?.position) {
        const position = new Vector3(...state.perspectiveCameraProps.position);
        const d = position.distanceTo(new Vector3(0, 0, 0));

        state.perspectiveCameraProps.position = [0, 0, d];
      }
      if (state.orthographicCameraProps?.position) {
        const position = new Vector3(...state.orthographicCameraProps.position);
        const d = position.distanceTo(new Vector3(0, 0, 0));

        state.orthographicCameraProps.position = [0, 0, d];
      }
      state.viewMode = "left";
    },

    setRightCameraView: (state) => {
      if (state.perspectiveCameraProps?.position) {
        const position = new Vector3(...state.perspectiveCameraProps.position);
        const d = position.distanceTo(new Vector3(0, 0, 0));
        state.perspectiveCameraProps.position = [d, 0, 0];
      }
      if (state.orthographicCameraProps?.position) {
        const position = new Vector3(...state.orthographicCameraProps.position);
        const d = position.distanceTo(new Vector3(0, 0, 0));
        state.orthographicCameraProps.position = [d, 0, 0];
      }
      state.viewMode = "right";
    },

    setDefaultView: (state) => {
      if (state.perspectiveCameraProps) {
        const position = new Vector3(...state.perspectiveCameraProps.position);
        const d = position.distanceTo(new Vector3(0, 0, 0)) / 1.732;

        state.perspectiveCameraProps.position = [d, d, d];
      }
      if (state.orthographicCameraProps?.position) {
        const position = new Vector3(...state.orthographicCameraProps.position);
        const d = position.distanceTo(new Vector3(0, 0, 0)) / 1.732;
        state.orthographicCameraProps.position = [d, d, d];
      }
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
    }
  }
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
  setOrthographicCameraDimensions,
  setPerspectiveCameraDimensions,
  setCameraPosition
} = cameraSlice.actions;

export const selectCameraPosition = (state: RootState): [number, number, number] =>
  state.camera.position;

export const selectOrthographicCameraProps = (
  state: RootState
): ICameraSettings["orthographicCameraProps"] => state.camera.orthographicCameraProps;
export const selectPerspectiveCameraProps = (
  state: RootState
): ICameraSettings["perspectiveCameraProps"] => state.camera.perspectiveCameraProps;

export const selectDroneState = (state: RootState): DroneTypes => state.camera.droneType;
export const selectFlyModalState = (state: RootState): boolean => state.camera.showFlyModal;
export const selectCameraViewMode = (state: RootState): ViewModes => state.camera.viewMode;
export const selectCameraType = (state: RootState): "perspective" | "orthographic" =>
  state.camera.cameraType;

import { Camera } from "@react-three/fiber";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { Camera as OriginCamera } from "three";

import type { DroneTypes } from "@type/app.types";

import type { RootState } from "@store/store";

import {
  calculateOrthographicDimensions,
  calculatePerspectiveDimesnions
} from "@three/camera/camera.utils";

import CameraViews from "@models/cameraViews/cameraViews.model";

import eventsEmitter from "@utils/eventEmitter.utils";
import { startDroneMode, stopDroneMode } from "@utils/handleDrone.utils";
import { isMobile } from "@utils/isMobile.utils";

import type {
  CameraTypes,
  coordinates,
  ICameraSettings,
  OrthographicProps,
  PerspectiveProps,
  ViewModes
} from "./cameraSlice.types";

const cameraViews = new CameraViews();

const defaultPosition = isMobile() ? [5, 5, 5] : [3, 3, 3];

const initialState: ICameraSettings = {
  defaultPosition: defaultPosition as [x: number, y: number, z: number],
  currentState: "idle",
  droneType: "idle",
  camera: null,
  cameraType: "perspective",
  showFlyModal: false,
  viewMode: "iso",
  orthographicCameraProps: undefined,
  triggerCameraEffect: "idle",
  controlRotationSpeed: 1,
  ambientLightIntensity: 0.6,
  directionalLightIntensity: 0.45,
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
      const newState = action.payload.camera as ICameraSettings;
      newState.triggerCameraEffect = "idle";

      return newState || state;
    },

    setDefaultPosition: (state, action: PayloadAction<coordinates>) => {
      state.defaultPosition = action.payload;
    },
    setControlRotationSpeed: (state, action: PayloadAction<number>) => {
      state.controlRotationSpeed = action.payload;
    },
    setAmbientLightIntensity: (state, action: PayloadAction<number>) => {
      state.ambientLightIntensity = action.payload;
    },
    setDirectionalLightIntensity: (state, action: PayloadAction<number>) => {
      state.directionalLightIntensity = action.payload;
    },
    setStopCameraView: () => {
      cameraViews.stop();
    },
    setCameraPosition: (
      state,
      action: PayloadAction<[x: number, y: number, z: number]>
    ) => {
      if (state.droneType !== "idle" || cameraViews.isActive) {
        return;
      }

      if (state.perspectiveCameraProps?.position) {
        state.perspectiveCameraProps.position = action.payload;
      }
      if (state.orthographicCameraProps?.position) {
        state.orthographicCameraProps.position = action.payload;
      }
    },

    setOrthographicCameraDimensions: (
      state,
      action: PayloadAction<SetOrthoArgs>
    ) => {
      state.orthographicCameraProps = calculateOrthographicDimensions(
        action.payload
      );
    },
    setPerspectiveCameraDimensions: (state, action: PayloadAction<SetOrthoArgs>) => {
      state.perspectiveCameraProps = calculatePerspectiveDimesnions(action.payload);
    },

    setLeftCameraView: (state) => {
      cameraViews.leftView(state.camera as Camera);
      state.viewMode = "left";
    },

    setFrontView: (state) => {
      cameraViews.frontView(state.camera as Camera);
      state.viewMode = "front";
    },

    setTopView: (state) => {
      cameraViews.topView(state.camera as Camera);
      state.viewMode = "top";
    },

    setBottomView: (state) => {
      cameraViews.bottomView(state.camera as Camera);
      state.viewMode = "bottom";
    },

    setRightView: (state) => {
      cameraViews.rightView(state.camera as Camera);
      state.viewMode = "right";
    },

    setIsoView: (state) => {
      cameraViews.isoView(state.camera as Camera);
      state.viewMode = "iso";
    },

    setBackView: (state) => {
      cameraViews.backView(state.camera as Camera);
      state.viewMode = "iso";
    },

    setDroneMode: (state, action: PayloadAction<DroneTypes>) => {
      state.droneType = action.payload;
      const handleFinish = (): boolean => eventsEmitter.emit("stopDrone");

      if (cameraViews.isActive) {
        cameraViews.stop();
      }

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

    triggerCameraEffect: (
      state,
      action: PayloadAction<ICameraSettings["triggerCameraEffect"]>
    ) => {
      state.triggerCameraEffect = action.payload;
    },

    setCameraType: (
      state,
      action: PayloadAction<"perspective" | "orthographic">
    ) => {
      state.cameraType = action.payload;
    }
  }
});

export default cameraSlice.reducer;
export const {
  setLeftCameraView,
  setFrontView,
  setIsoView,
  setCamera,
  setDroneMode,
  setFlyModalState,
  setCameraType,
  setOrthographicCameraDimensions,
  setPerspectiveCameraDimensions,
  setCameraPosition,
  setBottomView,
  setRightView,
  setBackView,
  setTopView,
  triggerCameraEffect,
  setDefaultPosition,
  setStopCameraView,
  setControlRotationSpeed,
  setAmbientLightIntensity,
  setDirectionalLightIntensity
} = cameraSlice.actions;

export const selectDefaultCameraPosition = (
  state: RootState
): coordinates | undefined => state.camera.defaultPosition;

export const selectOrthographicCameraProps = (state: RootState): OrthographicProps =>
  state.camera.orthographicCameraProps;
export const selectPerspectiveCameraProps = (state: RootState): PerspectiveProps =>
  state.camera.perspectiveCameraProps;

export const selectRotationSpeed = (state: RootState): number =>
  state.camera.controlRotationSpeed;

export const selectAmbientLightIntensity = (state: RootState): number =>
  state.camera.ambientLightIntensity;

export const selectDirectionalLightIntensity = (state: RootState): number =>
  state.camera.directionalLightIntensity;

export const selectDroneState = (state: RootState): DroneTypes =>
  state.camera.droneType;
export const selectFlyModalState = (state: RootState): boolean =>
  state.camera.showFlyModal;
export const selectCameraEffect = (
  state: RootState
): ICameraSettings["triggerCameraEffect"] => state.camera.triggerCameraEffect;
export const selectCameraViewMode = (state: RootState): ViewModes =>
  state.camera.viewMode;
export const selectCameraType = (state: RootState): CameraTypes =>
  state.camera.cameraType;

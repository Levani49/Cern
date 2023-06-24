import { Camera } from "@react-three/fiber";
import { useMemo } from "react";

import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";

import { useAppSelector } from "@store/hooks";

import {
  selectCameraType,
  selectOrthographicCameraProps,
  selectPerspectiveCameraProps,
  setCamera,
  setCameraPosition,
  setCameraType,
  SetOrthoArgs,
  setOrthographicCameraDimensions,
  setPerspectiveCameraDimensions
} from "@features/camera/cameraSlice";
import {
  CameraTypes,
  OrthographicProps,
  PerspectiveProps
} from "@features/camera/cameraSlice.types";

export default function useCamera(): UseCamera {
  const cameraType = useAppSelector(selectCameraType);
  const orthographicCameraProps = useAppSelector(selectOrthographicCameraProps);
  const perspectiveCameraProps = useAppSelector(selectPerspectiveCameraProps);

  const payload = useMemo(
    (): UseCamera => ({
      cameraType,
      setCameraType,
      orthographicCameraProps,
      perspectiveCameraProps,
      setCamera,
      setCameraPosition,
      setOrthographicCameraDimensions,
      setPerspectiveCameraDimensions
    }),
    [cameraType, orthographicCameraProps, perspectiveCameraProps]
  );

  return payload;
}

interface UseCamera {
  cameraType: CameraTypes;
  orthographicCameraProps: OrthographicProps;
  perspectiveCameraProps: PerspectiveProps;
  setCamera: ActionCreatorWithPayload<WritableDraft<Camera>, "camera/setCamera">;
  setCameraPosition: ActionCreatorWithPayload<
    [x: number, y: number, z: number],
    "camera/setCameraPosition"
  >;
  setOrthographicCameraDimensions: ActionCreatorWithPayload<
    SetOrthoArgs,
    "camera/setOrthographicCameraDimensions"
  >;
  setPerspectiveCameraDimensions: ActionCreatorWithPayload<
    SetOrthoArgs,
    "camera/setPerspectiveCameraDimensions"
  >;
  setCameraType: ActionCreatorWithPayload<
    "perspective" | "orthographic",
    "camera/setCameraType"
  >;
}

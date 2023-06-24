import { useMemo } from "react";

import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

import { DroneTypes } from "@type/app.types";

import { useAppSelector } from "@store/hooks";

import {
  selectDroneState,
  selectFlyModalState,
  setDroneMode,
  setFlyModalState
} from "@features/camera/cameraSlice";

export default function useDrone(): UseDrone {
  const currentMode = useAppSelector(selectDroneState);
  const showFlyModal = useAppSelector(selectFlyModalState);

  const payload = useMemo(
    (): UseDrone => ({
      currentMode,
      showFlyModal,
      setDroneMode,
      setFlyModalState
    }),
    [currentMode, showFlyModal]
  );

  return payload;
}

interface UseDrone {
  currentMode: DroneTypes;
  showFlyModal: boolean;
  setDroneMode: ActionCreatorWithPayload<DroneTypes, "camera/setDroneMode">;
  setFlyModalState: ActionCreatorWithPayload<boolean, "camera/setFlyModalState">;
}

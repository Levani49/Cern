import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

import { useMemo } from "react";

import type { DroneTypes } from "#/types/app.types";
import {
  selectDroneState,
  selectFlyModalState,
  setDroneMode,
  setFlyModalState,
} from "#/store/features/cameraSlice";
import { useAppSelector } from "#/store/hooks";

export default function useDrone(): UseDrone {
  const currentMode = useAppSelector(selectDroneState);
  const showFlyModal = useAppSelector(selectFlyModalState);

  const payload = useMemo(
    (): UseDrone => ({
      currentMode,
      showFlyModal,
      setDroneMode,
      setFlyModalState,
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

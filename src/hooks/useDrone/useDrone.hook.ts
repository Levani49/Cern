import { useMemo } from "react";

import { useAppSelector } from "@store/hooks";

import {
  selectDroneState,
  selectFlyModalState,
  setDroneMode,
  setFlyModalState
} from "@features/camera/cameraSlice";

import { UseDrone } from "@hooks/useDrone/useDrone.types";

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

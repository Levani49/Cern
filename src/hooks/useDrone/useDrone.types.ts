import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

import { DroneTypes } from "@type/app.types";

export interface UseDrone {
  currentMode: DroneTypes;
  showFlyModal: boolean;
  setDroneMode: ActionCreatorWithPayload<DroneTypes, "camera/setDroneMode">;
  setFlyModalState: ActionCreatorWithPayload<boolean, "camera/setFlyModalState">;
}

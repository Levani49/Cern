import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState, DroneTypes } from "../app/app.types";

interface IDroneSettings {
  droneType: DroneTypes;
}

const initialState: IDroneSettings = {
  droneType: "idle",
};

export const droneSlice = createSlice({
  name: "drone",
  initialState,
  reducers: {
    /**
     *
     * @param state
     * @param action
     */
    droneMode: (state, action: PayloadAction<DroneTypes>) => {
      state.droneType = action.payload;
    },
  },
});

export default droneSlice.reducer;
export const { droneMode } = droneSlice.actions;
/**
 *
 * @param state
 */
export const selectDroneState = (state: RootState): DroneTypes => state.drone.droneType;

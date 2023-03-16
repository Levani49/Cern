import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/app.types";

import {
  // Node,
  GeometryState,
  GeometryTree,
  GEOMETRY_MENU_TREE,
} from "./geometryTree";

interface GeometryTreeSlice {
  show: boolean;
  tree: GeometryTree;
}

const initialState: GeometryTreeSlice = {
  show: true,
  tree: GEOMETRY_MENU_TREE,
};

// function updateObject(
//   obj: GeometryTree,
//   key: string,
//   value: GeometryState,
// ): GeometryTree {
//   for (const prop in obj) {
//     if (obj.hasOwnProperty(prop)) {
//       if (prop === key) {
//         obj[prop] = value;
//         return obj;
//       } else if (typeof obj[prop] === "object") {
//         obj[prop] = updateObject(obj[prop], key, value);
//       }
//     }
//   }
//   return obj;
// }

export const geometrySlice = createSlice({
  name: "tree",
  initialState,
  reducers: {
    updateState: (
      state,
      action: PayloadAction<{
        key: string;
        state: { id: string; state: GeometryState };
      }>,
    ) => {
      console.log(state);
      console.log(action);
      // console.log(JSON.stringify(state.tree));
    },
  },
});

export default geometrySlice.reducer;

export const { updateState } = geometrySlice.actions;

/**
 *
 * @param state
 */
export const selectGeometryTree = (state: RootState): GeometryTree =>
  state.tree.tree;

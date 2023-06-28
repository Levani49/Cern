import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { ActiveModel } from "@type/app.types";

import type { RootState } from "@store/store";

import { isMobile } from "@utils/isMobile.utils";

import {
  GEOMETRY_MENU_TREE,
  GeometryState,
  TreeNode
} from "@constants/geometryTree";

import {
  updateActiveModels,
  updateChildNode,
  updateNodeAndAncestors,
  updateParentNode
} from "./geometryMenuUtils";
import type { GeometryTreeSlice, UpdateNodePayloadAction } from "./treeSlice.types";

const showGeometryMenu = isMobile() === false;

const initialState: GeometryTreeSlice = {
  tree: GEOMETRY_MENU_TREE,
  activeModels: updateActiveModels(GEOMETRY_MENU_TREE),
  showGeometryMenu
};

export const geometrySlice = createSlice({
  name: "tree",
  initialState,
  reducers: {
    rehydrate: (state, action) => {
      return action.payload.tree || state;
    },
    updateParentNodeState: (state, action: UpdateNodePayloadAction) => {
      const { nodeId, propToChange, value, restrictAncestorsUpdate } =
        action.payload;

      if (restrictAncestorsUpdate) {
        const updatedTree = state.tree.map(
          (node: TreeNode): TreeNode =>
            updateParentNode(node, nodeId, propToChange, value, false)
        );

        state.tree = updateNodeAndAncestors(
          updatedTree,
          nodeId,
          value as GeometryState
        );
      } else {
        const updatedTree = state.tree.map(
          (node: TreeNode): TreeNode =>
            updateParentNode(node, nodeId, propToChange, value, true)
        );

        state.tree = updateNodeAndAncestors(
          updatedTree,
          nodeId,
          value as GeometryState
        );
      }
      state.activeModels = updateActiveModels(state.tree);
    },
    updateChildNodeState: (state, action: UpdateNodePayloadAction) => {
      const { nodeId, propToChange, value } = action.payload;

      const updatedTree = state.tree.map(
        (node: TreeNode): TreeNode =>
          updateChildNode(node, nodeId, propToChange, value)
      );

      state.tree = updateNodeAndAncestors(
        updatedTree,
        nodeId,
        value as GeometryState
      );

      state.activeModels = updateActiveModels(state.tree);
    },
    setGeometryMenuVisibility: (state, action: PayloadAction<boolean>) => {
      state.showGeometryMenu = action.payload;
    }
  }
});

export default geometrySlice.reducer;

export const {
  updateChildNodeState,
  updateParentNodeState,
  setGeometryMenuVisibility
} = geometrySlice.actions;
export const selectGeometryTree = (state: RootState): TreeNode[] => state.tree.tree;
export const selectActiveGeometries = (state: RootState): ActiveModel[] =>
  state.tree.activeModels;
export const selectGeometryMenu = (state: RootState): boolean =>
  state.tree.showGeometryMenu;

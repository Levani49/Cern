import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/app.types";
import {
  updateParentNode,
  updateNodeAndAncestors,
  updateChildNode,
} from "./geometryMenuUtils";

import { TreeNode, GeometryState, GEOMETRY_MENU_TREE } from "./geometryTree";

interface GeometryTreeSlice {
  show: boolean;
  tree: TreeNode[];
}

interface UpdateNodePayload {
  nodeId: string;
  propToChange: string;
  modelState: GeometryState;
}

type UpdateNodePayloadAction = PayloadAction<UpdateNodePayload>;

const initialState: GeometryTreeSlice = {
  show: true,
  tree: GEOMETRY_MENU_TREE,
};

export const geometrySlice = createSlice({
  name: "tree",
  initialState,
  reducers: {
    updateParentNodeState: (state, action: UpdateNodePayloadAction) => {
      const { nodeId, propToChange, modelState } = action.payload;

      const updatedTree = state.tree.map(
        (node: TreeNode): TreeNode =>
          updateParentNode(node, nodeId, propToChange, modelState),
      );

      state.tree = updateNodeAndAncestors(updatedTree, nodeId, modelState);
    },
    updateChildNodeState: (state, action: UpdateNodePayloadAction) => {
      const { nodeId, propToChange, modelState } = action.payload;

      const updatedTree = state.tree.map(
        (node: TreeNode): TreeNode =>
          updateChildNode(node, nodeId, propToChange, modelState),
      );

      state.tree = updateNodeAndAncestors(updatedTree, nodeId, modelState);
    },
  },
});

export default geometrySlice.reducer;

export const { updateChildNodeState, updateParentNodeState } =
  geometrySlice.actions;

/**
 *
 * @param state
 */
export const selectGeometryTree = (state: RootState): TreeNode[] =>
  state.tree.tree;

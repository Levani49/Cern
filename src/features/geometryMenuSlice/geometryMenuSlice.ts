import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/app.types";

import { TreeNode, GeometryState, GEOMETRY_MENU_TREE } from "./geometryTree";

interface GeometryTreeSlice {
  show: boolean;
  tree: TreeNode[];
}

const initialState: GeometryTreeSlice = {
  show: true,
  tree: GEOMETRY_MENU_TREE,
};

export const geometrySlice = createSlice({
  name: "tree",
  initialState,
  reducers: {
    updateParentNodeState: (
      state,
      action: PayloadAction<{
        nodeId: string;
        propToChange: string;
        modelState: GeometryState;
      }>,
    ) => {
      const { nodeId, propToChange, modelState } = action.payload;
      console.log(nodeId, propToChange, modelState);

      const updateDescendandNodes = (node: TreeNode): TreeNode => {
        if (node.children) {
          return {
            ...node,
            [propToChange]: modelState,
            children: node.children.map(updateDescendandNodes),
          };
        } else {
          return {
            ...node,
            [propToChange]: modelState,
          };
        }
      };

      const updateNode = (node: TreeNode): TreeNode => {
        if (node.id === nodeId) {
          // Found the node with the matching ID, update its descendants
          const updatedNode = {
            ...node,
            [propToChange]: modelState,
            children: node.children
              ? node.children.map(updateDescendandNodes)
              : [],
          };
          return updatedNode;
        } else if (node.children) {
          // Node does not have the matching ID, update its children
          return {
            ...node,
            children: node.children.map(updateNode),
          };
        } else {
          // Node does not have children, return it without any changes
          return node;
        }
      };

      const updatedTree = state.tree.map(
        (node: TreeNode): TreeNode => updateNode(node),
      );

      state.tree = updatedTree;
    },
    updateChildNodeState: (
      state,
      action: PayloadAction<{
        nodeId: string;
        propToChange: string;
        modelState: GeometryState;
      }>,
    ) => {
      const { nodeId, propToChange, modelState } = action.payload;

      const updateNode = (node: TreeNode): TreeNode => {
        if (node.children) {
          return {
            ...node,
            children: node.children.map(updateNode),
          };
        }

        if (node.id === nodeId) {
          return {
            ...node,
            [propToChange]: modelState,
          };
        }
        return node;
      };

      const updatedTree = state.tree.map(
        (node: TreeNode): TreeNode => updateNode(node),
      );

      state.tree = updatedTree;
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

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/app.types";

import {
  Node,
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

// const findNodeById = (node: Node, nodeId: string): Node | undefined => {
//   if (node.id === nodeId) {
//     return node;
//   }
//   if (node.children) {
//     for (const childNode of node.children) {
//       const foundNode = findNodeById(childNode, nodeId);
//       if (foundNode) {
//         return foundNode;
//       }
//     }
//   }
//   return undefined;
// };

export const geometrySlice = createSlice({
  name: "tree",
  initialState,
  reducers: {
    updateParentNodeState: (
      state,
      action: PayloadAction<{
        nodeId: string;
        propToChange: keyof Node;
        modelState: GeometryState;
      }>,
    ) => {
      const { nodeId, propToChange, modelState } = action.payload;

      const updateDescendandNodes = (node: Node): Node => {
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

      const updateNode = (node: Node): Node => {
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

      const updatedTree: GeometryTree = {};
      Object.entries(state.tree).forEach(([key, node]) => {
        updatedTree[key] = updateNode(node);
      });

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
      const updateNode = (node: Node): Node => {
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
      const updatedTree: GeometryTree = {};
      Object.entries(state.tree).forEach(([key, node]) => {
        updatedTree[key] = updateNode(node);
      });

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
export const selectGeometryTree = (state: RootState): GeometryTree =>
  state.tree.tree;

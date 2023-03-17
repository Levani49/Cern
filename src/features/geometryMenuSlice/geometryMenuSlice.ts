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

// function updateTree(tree: TreeNode[]): TreeNode[] {
//   return tree.map((node) => {
//     if (node.children) {
//       const updatedChildren = updateTree(node.children);

//       const childrenStates = updatedChildren.map((child) => child.state);
//       const allLoaded = childrenStates.every((state) => state === "isLoaded");
//       const someLoaded = childrenStates.some((state) => state === "isLoaded");

//       let updatedState = "notLoaded";

//       if (allLoaded) {
//         updatedState = "isLoaded";
//       } else if (someLoaded) {
//         updatedState = "partialyLoaded";
//       }

//       // The parent node's state is updated based on its direct children only
//       return { ...node, state: updatedState, children: updatedChildren };
//     } else {
//       return node;
//     }
//   });
// }
function updateNodeAndAncestors(
  tree: TreeNode[],
  nodeId: string,
  modelState: GeometryState,
): TreeNode[] {
  const updateNode = (node: TreeNode): TreeNode | null => {
    if (node.id === nodeId) {
      return { ...node, state: modelState };
    }

    if (node.children) {
      const updatedChildren = node.children
        .map(updateNode)
        .filter(Boolean) as TreeNode[];

      if (updatedChildren.length > 0) {
        const newChildren = node.children.map((child) => {
          const updatedChild = updatedChildren.find(
            (updated) => updated.id === child.id,
          );
          return updatedChild ? updatedChild : child;
        });

        const childrenStates = newChildren.map((child) => child.state);
        const allLoaded = childrenStates.every((state) => state === "isLoaded");
        const someLoaded = childrenStates.some((state) => state === "isLoaded");
        const allNotLoaded = childrenStates.every(
          (state) => state === "notLoaded",
        );
        const somePartial = childrenStates.some(
          (state) => state === "partialyLoaded",
        );

        let updatedState = node.state;

        if (allLoaded) {
          updatedState = "isLoaded";
        } else if (someLoaded || somePartial) {
          updatedState = "partialyLoaded";
        } else if (allNotLoaded) {
          updatedState = "notLoaded";
        }

        return { ...node, state: updatedState, children: newChildren };
      }
    }

    return null;
  };

  return tree.map((node) => updateNode(node) || node);
}

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

      // const app = updateTree(updatedTree);
      // state.tree = app;
      // state.tree = app;

      state.tree = updateNodeAndAncestors(updatedTree, nodeId, modelState);
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

      // const app = updateTree(updatedTree);
      // state.tree = updatedTree;
      // state.tree = app;
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

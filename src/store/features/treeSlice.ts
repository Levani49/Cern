import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type {
  ActiveModel,
  GeometryTreeSlice,
  UpdateNodePayloadAction,
} from "#/types/app.types";
import { isMobile } from "#/utils/isMobile";
import {
  GEOMETRY_MENU_TREE,
  GeometryState,
  TreeNode,
} from "#/constants/geometryTree";
import type { RootState } from "#/store/store";

const showGeometryMenu = isMobile() === false;

const initialState: GeometryTreeSlice = {
  tree: GEOMETRY_MENU_TREE,
  activeModels: updateActiveModels(GEOMETRY_MENU_TREE),
  showGeometryMenu,
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
    },
  },
});

export default geometrySlice.reducer;

export const {
  updateChildNodeState,
  updateParentNodeState,
  setGeometryMenuVisibility,
} = geometrySlice.actions;
export const selectGeometryTree = (state: RootState): TreeNode[] => state.tree.tree;
export const selectActiveGeometries = (state: RootState): ActiveModel[] =>
  state.tree.activeModels;
export const selectGeometryMenu = (state: RootState): boolean =>
  state.tree.showGeometryMenu;

//   import type { ActiveModel } from "@type/app.types";

// import { GeometryState, TreeNode } from "@constants/geometryTree";

type UpdateNodeFunction = (
  node: TreeNode,
  nodeId: string,
  propToChange: string,
  value: string | boolean,
  updateDescendands?: boolean
) => TreeNode;

export function updateNodeAndAncestors(
  tree: TreeNode[],
  nodeId: string,
  modelState: GeometryState
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
            (updated) => updated.id === child.id
          );
          return updatedChild ? updatedChild : child;
        });

        const childrenStates = newChildren.map((child) => child.state);
        const allLoaded = childrenStates.every((state) => state === "isLoaded");
        const someLoaded = childrenStates.some((state) => state === "isLoaded");
        const allNotLoaded = childrenStates.every((state) => state === "notLoaded");
        const somePartial = childrenStates.some(
          (state) => state === "partialyLoaded"
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

const updateDescendandNodes = (
  node: TreeNode,
  propToChange: string,
  value: string | boolean
): TreeNode => {
  if (node.children) {
    return {
      ...node,
      [propToChange]: value,
      children: node.children.map((node) =>
        updateDescendandNodes(node, propToChange, value)
      ),
    };
  } else {
    return {
      ...node,
      [propToChange]: value,
    };
  }
};

export const updateParentNode: UpdateNodeFunction = (
  node,
  nodeId,
  propToChange,
  modelState,
  updateDescendands
): TreeNode => {
  if (node.id === nodeId) {
    if (updateDescendands) {
      // Found the node with the matching ID, update its descendants
      const updatedNode = {
        ...node,
        [propToChange]: modelState,
        children: node.children
          ? node.children.map((node) =>
              updateDescendandNodes(node, propToChange, modelState)
            )
          : [],
      };
      return updatedNode;
    } else {
      // Found the node with the matching ID, update its descendants
      const updatedNode = {
        ...node,
        [propToChange]: modelState,
        children: node.children
          ? node.children.map((node) =>
              updateParentNode(
                node,
                nodeId,
                propToChange,
                modelState,
                updateDescendands
              )
            )
          : [],
      };
      return updatedNode;
    }
  } else if (node.children) {
    // Node does not have the matching ID, update its children
    return {
      ...node,
      children: node.children.map((node) =>
        updateParentNode(node, nodeId, propToChange, modelState, updateDescendands)
      ),
    };
  } else {
    // Node does not have children, return it without any changes
    return node;
  }
};

export const updateChildNode: UpdateNodeFunction = (
  node,
  nodeId,
  propToChange,
  modelState
): TreeNode => {
  if (node.children) {
    return {
      ...node,
      children: node.children.map((node) =>
        updateChildNode(node, nodeId, propToChange, modelState)
      ),
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

export function updateActiveModels(tree: TreeNode[]): ActiveModel[] {
  const activeModels: ActiveModel[] = [];

  function traverse(node: TreeNode): void {
    if (node.children) {
      node.children.forEach((child) => traverse(child));
    }

    if (node.state === "isLoaded") {
      if (node.modelPath) {
        activeModels.push({
          uid: node.id,
          name: node.name,
          modelPath: node.modelPath,
          renderOrder: node.renderOrder,
        });
      }
    }
  }

  tree.forEach((node) => traverse(node));
  return activeModels;
}

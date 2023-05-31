import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../../app/store';
import type { ActiveModel } from '../../types/app.types';

import type { GeometryTreeSlice, UpdateNodePayloadAction } from './treeSlice.types';

import {
  updateParentNode,
  updateNodeAndAncestors,
  updateChildNode,
  updateActiveModels,
} from './geometryMenuUtils';

import { TreeNode, GeometryState, GEOMETRY_MENU_TREE } from '../../constants/geometryTree';

const initialState: GeometryTreeSlice = {
  show: true,
  tree: GEOMETRY_MENU_TREE,
  activeModels: updateActiveModels(GEOMETRY_MENU_TREE),
};

export const geometrySlice = createSlice({
  name: 'tree',
  initialState,
  reducers: {
    rehydrate: (state, action) => {
      return action.payload.tree || state;
    },
    updateParentNodeState: (state, action: UpdateNodePayloadAction) => {
      const { nodeId, propToChange, value, restrictAncestorsUpdate } = action.payload;

      if (restrictAncestorsUpdate) {
        const updatedTree = state.tree.map(
          (node: TreeNode): TreeNode => updateParentNode(node, nodeId, propToChange, value, false),
        );

        state.tree = updateNodeAndAncestors(updatedTree, nodeId, value as GeometryState);
      } else {
        const updatedTree = state.tree.map(
          (node: TreeNode): TreeNode => updateParentNode(node, nodeId, propToChange, value, true),
        );

        state.tree = updateNodeAndAncestors(updatedTree, nodeId, value as GeometryState);
      }
      state.activeModels = updateActiveModels(state.tree);
    },
    updateChildNodeState: (state, action: UpdateNodePayloadAction) => {
      const { nodeId, propToChange, value } = action.payload;

      const updatedTree = state.tree.map(
        (node: TreeNode): TreeNode => updateChildNode(node, nodeId, propToChange, value),
      );

      state.tree = updateNodeAndAncestors(updatedTree, nodeId, value as GeometryState);

      state.activeModels = updateActiveModels(state.tree);
    },
  },
});

export default geometrySlice.reducer;

export const { updateChildNodeState, updateParentNodeState } = geometrySlice.actions;
export const selectGeometryTree = (state: RootState): TreeNode[] => state.tree.tree;
export const selectActiveGeometries = (state: RootState): ActiveModel[] => state.tree.activeModels;

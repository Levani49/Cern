import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/app.types";
import {
  updateParentNode,
  updateNodeAndAncestors,
  updateChildNode,
  updateActiveModels,
} from "./geometryMenuUtils";

import { TreeNode, GeometryState, GEOMETRY_MENU_TREE } from "./geometryTree";

export interface ActiveModel {
  uid: string;
  name: string;
  modelPath: string;
}

interface UpdateNodePayload {
  nodeId: string;
  propToChange: string;
  value: string | boolean;
  restrictAncestorsUpdate?: boolean;
}

type UpdateNodePayloadAction = PayloadAction<UpdateNodePayload>;
export type ModelCut = "-cut1" | "-cut2" | "-cut3" | "-cut4" | null;
export type ModelLoadingStates = "idle" | "loading" | "failed";
export type selectedModel = string | null;

interface GeometryTreeSlice {
  show: boolean;
  tree: TreeNode[];
  activeModels: ActiveModel[];
  modelCut: ModelCut;
  modelsLoadingState: ModelLoadingStates;
  selectedModel: selectedModel;
  previousSelectedModel: selectedModel;
  modelOpacity: number;
  globalOpacity: number;
}

const initialState: GeometryTreeSlice = {
  show: true,
  tree: GEOMETRY_MENU_TREE,
  activeModels: updateActiveModels(GEOMETRY_MENU_TREE),
  modelCut: "-cut3",
  modelsLoadingState: "loading",
  selectedModel: null,
  previousSelectedModel: null,
  modelOpacity: 1,
  globalOpacity: 1,
};

export const geometrySlice = createSlice({
  name: "tree",
  initialState,
  reducers: {
    setGlobalOpacity: (state, action: PayloadAction<number>) => {
      state.globalOpacity = action.payload;
    },
    setModelsOpacity: (state, action: PayloadAction<number>) => {
      state.modelOpacity = action.payload;
    },
    setSelectedModel: (state, action: PayloadAction<selectedModel>) => {
      if (action.payload === null) {
        state.previousSelectedModel = state.selectedModel;
        state.selectedModel = action.payload;
      } else {
        state.selectedModel = action.payload;
      }
    },
    updateModelCut: (state, action: PayloadAction<ModelCut>) => {
      state.modelCut = action.payload;
    },
    updateLoadingState: (state, action: PayloadAction<ModelLoadingStates>) => {
      state.modelsLoadingState = action.payload;
    },
    updateParentNodeState: (state, action: UpdateNodePayloadAction) => {
      const { nodeId, propToChange, value, restrictAncestorsUpdate } =
        action.payload;

      if (restrictAncestorsUpdate) {
        const updatedTree = state.tree.map(
          (node: TreeNode): TreeNode =>
            updateParentNode(node, nodeId, propToChange, value, false),
        );

        state.tree = updateNodeAndAncestors(
          updatedTree,
          nodeId,
          value as GeometryState,
        );
      } else {
        const updatedTree = state.tree.map(
          (node: TreeNode): TreeNode =>
            updateParentNode(node, nodeId, propToChange, value, true),
        );

        state.tree = updateNodeAndAncestors(
          updatedTree,
          nodeId,
          value as GeometryState,
        );
      }
      state.activeModels = updateActiveModels(state.tree);
    },
    updateChildNodeState: (state, action: UpdateNodePayloadAction) => {
      const { nodeId, propToChange, value } = action.payload;

      const updatedTree = state.tree.map(
        (node: TreeNode): TreeNode =>
          updateChildNode(node, nodeId, propToChange, value),
      );

      state.tree = updateNodeAndAncestors(
        updatedTree,
        nodeId,
        value as GeometryState,
      );

      state.activeModels = updateActiveModels(state.tree);
    },
  },
});

export default geometrySlice.reducer;

export const {
  updateChildNodeState,
  updateParentNodeState,
  updateLoadingState,
  updateModelCut,
  setSelectedModel,
  setModelsOpacity,
  setGlobalOpacity,
} = geometrySlice.actions;

/**
 *
 * @param state
 */
export const selectGeometryTree = (state: RootState): TreeNode[] =>
  state.tree.tree;

export const selectActiveGeometries = (state: RootState): ActiveModel[] =>
  state.tree.activeModels;

export const selectGeometriesCutType = (state: RootState): ModelCut =>
  state.tree.modelCut;

export const selectLoadingState = (state: RootState): ModelLoadingStates =>
  state.tree.modelsLoadingState;

export const selectSelectedModel = (state: RootState): selectedModel =>
  state.tree.selectedModel;

export const selectPreviousSelectedModel = (state: RootState): selectedModel =>
  state.tree.previousSelectedModel;

export const selectModelsOpacity = (state: RootState): number =>
  state.tree.modelOpacity;

export const selectGlobalOpacity = (state: RootState): number =>
  state.tree.globalOpacity;

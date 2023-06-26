import { PayloadAction } from "@reduxjs/toolkit";

import { ActiveModel } from "@type/app.types";

import type { TreeNode } from "@constants/geometryTree";

export interface UpdateNodePayload {
  nodeId: string;
  propToChange: string;
  value: string | boolean;
  restrictAncestorsUpdate?: boolean;
}

export interface GeometryTreeSlice {
  tree: TreeNode[];
  activeModels: ActiveModel[];
  showGeometryMenu: boolean;
}

export type UpdateNodePayloadAction = PayloadAction<UpdateNodePayload>;

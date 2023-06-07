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
  show: boolean;
  tree: TreeNode[];
  activeModels: ActiveModel[];
}

export type UpdateNodePayloadAction = PayloadAction<UpdateNodePayload>;

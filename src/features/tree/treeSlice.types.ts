import { PayloadAction } from '@reduxjs/toolkit';

import type { TreeNode } from '../../constants/geometryTree';
import { ActiveModel } from '../../types/app.types';

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

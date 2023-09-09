import { uid } from "#/utils/uid.util";
import { TreeNode } from "#/constants/geometryTree";

export const BEAM_PIPE: TreeNode = {
  id: uid(),
  name: "beam pipe",
  state: "notLoaded",
  modelPath: "beam",
  nodeEnd: true,
};

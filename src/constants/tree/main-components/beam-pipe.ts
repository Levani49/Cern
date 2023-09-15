import { uid } from "#/utils/uid";
import { TreeNode } from "#/constants/geometryTree";

export const BEAM_PIPE: TreeNode = {
  id: uid(),
  name: "beam pipe",
  state: "notLoaded",
  modelPath: "main-components/beam-pipe/beam",
  nodeEnd: true,
};

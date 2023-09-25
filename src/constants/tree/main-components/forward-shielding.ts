import { uid } from "#/utils/uid";
import { TreeNode } from "#/constants/geometryTree";

export const FORWARD_SHIELDING: TreeNode = {
  id: uid(),
  name: "forward shielding",
  state: "notLoaded",
  showChildren: false,
  children: [
    {
      id: uid(),
      name: "side a",
      state: "notLoaded",
      modelPath:
        "core/main-components/forward-shielding/side-a/forward-shielding-sidea",
    },
    {
      id: uid(),
      name: "side c",
      state: "notLoaded",
      modelPath:
        "core/main-components/forward-shielding/side-c/forward-shielding-sidec",
      nodeEnd: true,
    },
  ],
};

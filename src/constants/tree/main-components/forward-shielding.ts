import { uid } from "@utils/uid.util";

import { TreeNode } from "@constants/geometryTree";

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
      modelPath: "forward-shielding-sidea"
    },
    {
      id: uid(),
      name: "side c",
      state: "notLoaded",
      modelPath: "forward-shielding-sidec",
      nodeEnd: true
    }
  ]
};

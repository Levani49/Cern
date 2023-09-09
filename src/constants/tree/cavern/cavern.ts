import { uid } from "#/utils/uid";
import { TreeNode } from "#/constants/geometryTree";

export const CAVERN: TreeNode = {
  id: uid(),
  name: "cavern",
  state: "notLoaded",
  showChildren: false,
  nodeEnd: true,
  children: [
    {
      id: uid(),
      name: "ux15",
      state: "notLoaded",
      modelPath: "ux15",
    },
    {
      id: uid(),
      name: "us15",
      state: "notLoaded",
      modelPath: "us15",
    },
    {
      id: uid(),
      name: "usa15",
      state: "notLoaded",
      modelPath: "usa15",
    },
    {
      id: uid(),
      name: "px14",
      state: "notLoaded",
      modelPath: "px14",
    },
    {
      id: uid(),
      name: "px15",
      state: "notLoaded",
      modelPath: "px15",
    },
    {
      id: uid(),
      name: "px16",
      state: "notLoaded",
      modelPath: "px16",
    },
    {
      id: uid(),
      name: "pm15",
      state: "notLoaded",
      modelPath: "pm15",
      nodeEnd: true,
    },
  ],
};

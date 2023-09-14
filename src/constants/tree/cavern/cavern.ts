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
      modelPath: "/cavern/ux15/ux15",
    },
    {
      id: uid(),
      name: "us15",
      state: "notLoaded",
      modelPath: "/cavern/us15/us15",
    },
    {
      id: uid(),
      name: "usa15",
      state: "notLoaded",
      modelPath: "/cavern/usa15/usa15",
    },
    {
      id: uid(),
      name: "px14",
      state: "notLoaded",
      modelPath: "/cavern/px14/px14",
    },
    {
      id: uid(),
      name: "px15",
      state: "notLoaded",
      modelPath: "/cavern/px15/px15",
    },
    {
      id: uid(),
      name: "px16",
      state: "notLoaded",
      modelPath: "/cavern/px16/px16",
    },
    {
      id: uid(),
      name: "pm15",
      state: "notLoaded",
      modelPath: "/cavern/pm15/pm15",
      nodeEnd: true,
    },
  ],
};

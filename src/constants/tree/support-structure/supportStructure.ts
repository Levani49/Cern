import { uid } from "#/utils/uid.util";
import { TreeNode } from "#/constants/geometryTree";

export const SUPPORT_STRUCTURE: TreeNode = {
  id: uid(),
  name: "support structure",
  state: "notLoaded",
  showChildren: false,
  children: [
    {
      id: uid(),
      name: "mechanical structure",
      state: "notLoaded",
      showChildren: false,
      nodeEnd: true,
      children: [
        {
          id: uid(),
          name: "feed and rails",
          state: "notLoaded",
          modelPath: "feet",
        },
        {
          id: uid(),
          name: "bt warm structure",
          state: "notLoaded",
          modelPath: "warm-structure",
        },
        {
          id: uid(),
          name: "hf truck",
          state: "notLoaded",
          showChildren: false,
          nodeEnd: true,
          children: [
            {
              id: uid(),
              name: "side a",
              state: "notLoaded",
              modelPath: "hf-truck-sidea",
            },
            {
              id: uid(),
              name: "side c",
              state: "notLoaded",
              modelPath: "hf-truck-sidec",
              nodeEnd: true,
            },
          ],
        },
      ],
    },
  ],
};

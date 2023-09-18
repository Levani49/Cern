import { uid } from "#/utils/uid";
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
          modelPath: "/core/support-structure/mechanical-structure/feet/feet",
        },
        {
          id: uid(),
          name: "bt warm structure",
          state: "notLoaded",
          modelPath:
            "/core/support-structure/mechanical-structure/warm-structure/warm-structure",
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
              modelPath:
                "/core/support-structure/mechanical-structure/hf-truck/side-a/hf-truck-sidea",
            },
            {
              id: uid(),
              name: "side c",
              state: "notLoaded",
              modelPath:
                "/core/support-structure/mechanical-structure/hf-truck/side-c/hf-truck-sidec",
              nodeEnd: true,
            },
          ],
        },
      ],
    },
  ],
};

import { uid } from "@utils/uid.util";

import { TreeNode } from "@constants/geometryTree";

export const INNER_DETECTOR: TreeNode = {
  id: uid(),
  name: "inner detector",
  state: "isLoaded",
  showChildren: false,
  children: [
    {
      id: uid(),
      name: "pixel",
      state: "isLoaded",
      modelPath: "pixel"
    },
    {
      id: uid(),
      name: "sct",
      state: "isLoaded",
      showChildren: false,
      children: [
        {
          id: uid(),
          name: "barrel",
          state: "isLoaded",
          modelPath: "sct-bar"
        },
        {
          id: uid(),
          name: "endcap",
          state: "isLoaded",
          showChildren: false,
          children: [
            {
              id: uid(),
              name: "side a",
              state: "isLoaded",
              modelPath: "sct-sidea"
            },
            {
              id: uid(),
              name: "side c",
              state: "isLoaded",
              modelPath: "sct-sidec",
              nodeEnd: true
            }
          ]
        }
      ]
    },
    {
      id: uid(),
      name: "trt",
      state: "isLoaded",
      showChildren: false,
      nodeEnd: true,
      children: [
        {
          id: uid(),
          name: "barrel",
          state: "isLoaded",
          modelPath: "trt-bar"
        },
        {
          id: uid(),
          name: "endcap",
          state: "isLoaded",
          showChildren: false,
          nodeEnd: true,
          children: [
            {
              id: uid(),
              name: "side a",
              state: "isLoaded",
              modelPath: "trt-sidea"
            },
            {
              id: uid(),
              name: "side c",
              state: "isLoaded",
              modelPath: "trt-sidec",
              nodeEnd: true
            }
          ]
        }
      ]
    }
  ]
};

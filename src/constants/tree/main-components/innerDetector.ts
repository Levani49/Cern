import { uid } from "#/utils/uid";
import { TreeNode } from "#/constants/geometryTree";

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
      modelPath: "pixel",
      renderOrder: 1,
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
          modelPath: "sct-bar",
          renderOrder: 1,
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
              modelPath: "sct-sidea",
              renderOrder: 1,
            },
            {
              id: uid(),
              name: "side c",
              state: "isLoaded",
              modelPath: "sct-sidec",
              renderOrder: 1,
              nodeEnd: true,
            },
          ],
        },
      ],
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
          modelPath: "trt-bar",
          renderOrder: 1,
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
              modelPath: "trt-sidea",
              renderOrder: 1,
            },
            {
              id: uid(),
              name: "side c",
              state: "isLoaded",
              modelPath: "trt-sidec",
              renderOrder: 1,
              nodeEnd: true,
            },
          ],
        },
      ],
    },
  ],
};

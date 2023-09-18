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
      modelPath: "core/main-components/inner-detector/pixel/pixel",
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
          modelPath: "core/main-components/inner-detector/sct/barrel/sct-bar",
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
              modelPath:
                "core/main-components/inner-detector/sct/endcap/side-a/sct-sidea",
              renderOrder: 1,
            },
            {
              id: uid(),
              name: "side c",
              state: "isLoaded",
              modelPath:
                "core/main-components/inner-detector/sct/endcap/side-c/sct-sidec",
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
          modelPath: "core/main-components/inner-detector/trt/barrel/trt-bar",
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
              modelPath:
                "core/main-components/inner-detector/trt/endcap/side-a/trt-sidea",
              renderOrder: 1,
            },
            {
              id: uid(),
              name: "side c",
              state: "isLoaded",
              modelPath:
                "core/main-components/inner-detector/trt/endcap/side-c/trt-sidec",
              renderOrder: 1,
              nodeEnd: true,
            },
          ],
        },
      ],
    },
  ],
};

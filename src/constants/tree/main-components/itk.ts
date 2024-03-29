import { uid } from "#/utils/uid";
import { TreeNode } from "#/constants/geometryTree";

export const ITK: TreeNode = {
  id: uid(),
  name: "itk",
  state: "notLoaded",
  showChildren: false,
  children: [
    {
      id: uid(),
      name: "pixel detector",
      state: "notLoaded",
      showChildren: false,
      nodeEnd: true,
      children: [
        {
          id: uid(),
          name: "pixel inner system",
          state: "notLoaded",
          showChildren: false,
          children: [
            {
              id: uid(),
              name: "barrel",
              state: "notLoaded",
              modelPath:
                "core/main-components/itk/pixel-detector/pixel-inner-detector/barrel/itk-pixel-layout-inner-barrel",
            },
            {
              id: uid(),
              name: "endcap",
              state: "notLoaded",
              showChildren: false,
              nodeEnd: true,
              children: [
                {
                  id: uid(),
                  name: "side a",
                  state: "notLoaded",
                  modelPath:
                    "core/main-components/itk/pixel-detector/pixel-inner-detector/endcap/side-a/itk-pixel-layout-inner-endcap-sidea",
                },
                {
                  id: uid(),
                  name: "side c",
                  state: "notLoaded",
                  modelPath:
                    "core/main-components/itk/pixel-detector/pixel-inner-detector/endcap/side-c/itk-pixel-layout-inner-endcap-sidec",
                  nodeEnd: true,
                },
              ],
            },
          ],
        },
        {
          id: uid(),
          name: "pixel outer system",
          state: "notLoaded",
          showChildren: false,
          nodeEnd: true,
          children: [
            {
              id: uid(),
              name: "barrel",
              state: "notLoaded",
              modelPath:
                "core/main-components/itk/pixel-detector/pixel-outer-detector/barrel/itk-pixel-layout-outer-barrel",
            },
            {
              id: uid(),
              name: "endcap",
              state: "notLoaded",
              showChildren: true,
              children: [
                {
                  id: uid(),
                  name: "side a",
                  state: "notLoaded",
                  modelPath:
                    "core/main-components/itk/pixel-detector/pixel-outer-detector/endcap/side-a/itk-pixel-layout-outer-endcap-sidea",
                },
                {
                  id: uid(),
                  name: "side c",
                  state: "notLoaded",
                  modelPath:
                    "core/main-components/itk/pixel-detector/pixel-outer-detector/endcap/side-c/itk-pixel-layout-outer-endcap-sidec",
                  nodeEnd: true,
                },
              ],
            },
            {
              id: uid(),
              name: "pixel pp1",
              state: "notLoaded",
              showChildren: false,
              nodeEnd: true,
              children: [
                {
                  id: uid(),
                  name: "side a",
                  state: "notLoaded",
                  modelPath:
                    "core/main-components/itk/pixel-detector/pixel-outer-detector/pixel-pp1/side-a/pixel-pp1-side-a",
                },
                {
                  id: uid(),
                  name: "side c",
                  state: "notLoaded",
                  modelPath:
                    "core/main-components/itk/pixel-detector/pixel-outer-detector/pixel-pp1/side-c/pixel-pp1-side-c",
                  nodeEnd: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

import { uid } from "#/utils/uid";
import { TreeNode } from "#/constants/geometryTree";

export const CALORIMETRY: TreeNode = {
  id: uid(),
  name: "calorimetry",
  state: "notLoaded",
  showChildren: false,
  children: [
    {
      id: uid(),
      name: "lar",
      state: "notLoaded",
      showChildren: false,
      children: [
        {
          id: uid(),
          name: "barrel",
          state: "notLoaded",
          modelPath: "main-components/calorimetry/lar/barrel/lar-barrel",
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
              showChildren: false,
              children: [
                {
                  id: uid(),
                  name: "lar emec",
                  state: "notLoaded",
                  modelPath:
                    "main-components/calorimetry/lar/endcap/side-a/lar-emec/lar-emec-sidea",
                },
                {
                  id: uid(),
                  name: "lar hec",
                  state: "notLoaded",
                  modelPath:
                    "main-components/calorimetry/lar/endcap/side-a/lar-hec/lar-hec-sidea",
                },
                {
                  id: uid(),
                  name: "lar fcal",
                  state: "notLoaded",
                  modelPath:
                    "main-components/calorimetry/lar/endcap/side-a/lar-fcal/lar-fcal-sidea",
                  nodeEnd: true,
                },
              ],
            },
            {
              id: uid(),
              name: "side c",
              state: "notLoaded",
              showChildren: false,
              nodeEnd: true,
              children: [
                {
                  id: uid(),
                  name: "lar emec",
                  state: "notLoaded",
                  modelPath:
                    "main-components/calorimetry/lar/endcap/side-c/lar-emec/lar-emec-sidec",
                },
                {
                  id: uid(),
                  name: "lar hec",
                  state: "notLoaded",
                  modelPath:
                    "main-components/calorimetry/lar/endcap/side-c/lar-hec/lar-hec-sidec",
                },
                {
                  id: uid(),
                  name: "lar fcal",
                  state: "notLoaded",
                  modelPath:
                    "main-components/calorimetry/lar/endcap/side-c/lar-fcal/lar-fcal-sidec",
                  nodeEnd: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: uid(),
      name: "tile",
      state: "notLoaded",
      showChildren: false,
      nodeEnd: true,
      children: [
        {
          id: uid(),
          name: "barrel",
          state: "notLoaded",
          modelPath: "tile-barrel",
        },
        {
          id: uid(),
          name: "barrel ext.",
          state: "notLoaded",
          showChildren: false,
          nodeEnd: true,
          children: [
            {
              id: uid(),
              name: "side a",
              state: "notLoaded",
              modelPath:
                "main-components/calorimetry/tile/barrel-extension/side-a/tile-end-cap-sidea",
            },
            {
              id: uid(),
              name: "side c",
              state: "notLoaded",
              modelPath:
                "main-components/calorimetry/tile/barrel-extension/side-c/tile-end-cap-sidec",
              nodeEnd: true,
            },
          ],
        },
      ],
    },
  ],
};

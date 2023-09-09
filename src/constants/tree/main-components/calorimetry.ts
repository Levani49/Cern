import { uid } from "#/utils/uid.util";
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
          modelPath: "lar-barrel",
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
                  modelPath: "lar-emec-sidea",
                },
                {
                  id: uid(),
                  name: "lar hec",
                  state: "notLoaded",
                  modelPath: "lar-hec-sidea",
                },
                {
                  id: uid(),
                  name: "lar fcal",
                  state: "notLoaded",
                  modelPath: "lar-fcal-sidea",
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
                  modelPath: "lar-emec-sidec",
                },
                {
                  id: uid(),
                  name: "lar hec",
                  state: "notLoaded",
                  modelPath: "lar-hec-sidec",
                },
                {
                  id: uid(),
                  name: "lar fcal",
                  state: "notLoaded",
                  modelPath: "lar-fcal-sidec",
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
              modelPath: "tile-end-cap-sidea",
            },
            {
              id: uid(),
              name: "side c",
              state: "notLoaded",
              modelPath: "tile-end-cap-sidec",
              nodeEnd: true,
            },
          ],
        },
      ],
    },
  ],
};

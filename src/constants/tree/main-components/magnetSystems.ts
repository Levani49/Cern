import { uid } from "#/utils/uid.util";
import { TreeNode } from "#/constants/geometryTree";

export const MAGNET_SYSTEMS: TreeNode = {
  id: uid(),
  name: "magnet systems",
  state: "notLoaded",
  showChildren: false,
  children: [
    {
      id: uid(),
      name: "toroid",
      state: "notLoaded",
      showChildren: false,
      nodeEnd: true,
      children: [
        {
          id: uid(),
          name: "barrel",
          state: "notLoaded",
          showChildren: false,
          children: [
            {
              id: uid(),
              name: "barrel toroid",
              state: "notLoaded",
              modelPath: "barrel-toroid",
              nodeEnd: true,
            },
          ],
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
              name: "sideA",
              state: "notLoaded",
              showChildren: false,
              children: [
                {
                  id: uid(),
                  name: "endcap toroid",
                  state: "notLoaded",
                  modelPath: "end-cap-toroid-sidea",
                },
                {
                  id: uid(),
                  name: "tower & turret",
                  state: "notLoaded",
                  modelPath: "tower-turret-sidea",
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
                  name: "endcap toroid",
                  state: "notLoaded",
                  modelPath: "end-cap-toroid-sidec",
                },
                {
                  id: uid(),
                  name: "tower & turret",
                  state: "notLoaded",
                  modelPath: "tower-turret-sidec",
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

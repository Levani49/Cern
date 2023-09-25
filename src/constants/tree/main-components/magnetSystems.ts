import { uid } from "#/utils/uid";
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
              modelPath:
                "core/main-components/magnet-systems/toroid/barrel/barrel-toroid/barrel-toroid",
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
                  modelPath:
                    "core/main-components/magnet-systems/toroid/endcap/side-a/endcap-toroid/end-cap-toroid-sidea",
                },
                {
                  id: uid(),
                  name: "tower & turret",
                  state: "notLoaded",
                  modelPath:
                    "core/main-components/magnet-systems/toroid/endcap/side-a/tower-and-turret/tower-turret-sidea",
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
                  modelPath:
                    "core/main-components/magnet-systems/toroid/endcap/side-c/endcap-toroid/end-cap-toroid-sidec",
                },
                {
                  id: uid(),
                  name: "tower & turret",
                  state: "notLoaded",
                  modelPath:
                    "core/main-components/magnet-systems/toroid/endcap/side-c/tower-and-turret/tower-turret-sidec",
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

import { uid } from "#/utils/uid.util";
import { TreeNode } from "#/constants/geometryTree";

export const PLATFORMS: TreeNode = {
  id: uid(),
  name: "platforms",
  state: "notLoaded",
  showChildren: false,
  nodeEnd: false,
  children: [
    {
      id: uid(),
      name: "even sectors",
      state: "notLoaded",
      modelPath: "access-platforms-even-sectors",
    },
    {
      id: uid(),
      name: "odd sectors",
      state: "notLoaded",
      modelPath: "access-platforms-odd-sectors",
    },
    {
      id: uid(),
      name: "hs platforms",
      state: "notLoaded",
      showChildren: false,
      children: [
        {
          id: uid(),
          name: "top platforms",
          state: "notLoaded",
          modelPath: "hs-arche",
        },
        {
          id: uid(),
          name: "central pit platforms",
          state: "notLoaded",
          modelPath: "hs-central-pit-structure",
        },
        {
          id: uid(),
          name: "us15 platforms",
          state: "notLoaded",
          modelPath: "hs-us",
        },
        {
          id: uid(),
          name: "usa15 platforms",
          state: "notLoaded",
          modelPath: "hs-usa",
          nodeEnd: true,
        },
      ],
    },
    {
      id: uid(),
      name: "ho platforms",
      state: "notLoaded",
      showChildren: false,
      nodeEnd: true,
      children: [
        {
          id: uid(),
          name: "side a",
          state: "notLoaded",
          modelPath: "ho-side-a-platforms",
        },
        {
          id: uid(),
          name: "side c",
          state: "notLoaded",
          modelPath: "ho-side-c-platforms",
          nodeEnd: true,
        },
      ],
    },
  ],
};

import { uid } from "#/utils/uid";
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
      modelPath:
        "core/main-components/platforms/even-sectors/access-platforms-even-sectors",
    },
    {
      id: uid(),
      name: "odd sectors",
      state: "notLoaded",
      modelPath:
        "core/main-components/platforms/odd-sectors/access-platforms-odd-sectors",
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
          modelPath:
            "core/main-components/platforms/hs-platforms/top-platforms/hs-arche",
        },
        {
          id: uid(),
          name: "central pit platforms",
          state: "notLoaded",
          modelPath:
            "core/main-components/platforms/hs-platforms/central-pit-platforms/hs-central-pit-structure",
        },
        {
          id: uid(),
          name: "us15 platforms",
          state: "notLoaded",
          modelPath:
            "core/main-components/platforms/hs-platforms/us15-platforms/hs-us",
        },
        {
          id: uid(),
          name: "usa15 platforms",
          state: "notLoaded",
          modelPath:
            "core/main-components/platforms/hs-platforms/usa15-platforms/hs-usa",
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
          modelPath:
            "core/main-components/platforms/ho-platforms/side-a/ho-side-a-platforms",
        },
        {
          id: uid(),
          name: "side c",
          state: "notLoaded",
          modelPath:
            "core/main-components/platforms/ho-platforms/side-c/ho-side-c-platforms",
          nodeEnd: true,
        },
      ],
    },
  ],
};

import { uid } from "#/utils/uid";
import { TreeNode } from "#/constants/geometryTree";

export const SERVICES: TreeNode = {
  id: uid(),
  name: "services",
  state: "notLoaded",
  showChildren: false,
  children: [
    {
      id: uid(),
      name: "calorimeter services",
      state: "notLoaded",
      showChildren: false,
      children: [
        {
          id: uid(),
          name: "flexible chain S.9",
          state: "notLoaded",
          modelPath:
            "main-components/services/calorimeter-services/flexible-chain-s9/flex-chain-sec9",
        },
        {
          id: uid(),
          name: "flexible chain s.11",
          state: "notLoaded",
          modelPath:
            "main-components/services/calorimeter-services/flexible-chain-s11/flex-chain-sec11",
        },
        {
          id: uid(),
          name: "flexible chain s.15",
          state: "notLoaded",
          modelPath:
            "main-components/services/calorimeter-services/flexible-chain-s15/flex-chain-sec15",
        },
        {
          id: uid(),
          name: "gap region",
          state: "notLoaded",
          modelPath:
            "main-components/services/calorimeter-services/gap-region/gap-region-serv",
          nodeEnd: true,
        },
      ],
    },
    {
      id: uid(),
      name: "muon services",
      state: "notLoaded",
      showChildren: false,
      children: [
        {
          id: uid(),
          name: "patch panels",
          state: "notLoaded",
          modelPath: "nan",
        },
        {
          id: uid(),
          name: "sw services",
          state: "notLoaded",
          modelPath:
            "main-components/services/muon-services/sw-services/serv-muon-sw",
        },
        {
          id: uid(),
          name: "cable trays",
          state: "notLoaded",
          modelPath:
            "main-components/services/muon-services/cable-trays/serv-muon-cable-trays",
        },
        {
          id: uid(),
          name: "cable trays inside barrel",
          state: "notLoaded",
          modelPath:
            "main-components/services/muon-services/cable-trays-inside-barrel/serv-muon-cable-trays-inside-barrel",
        },
        {
          id: uid(),
          name: "ele boxes",
          state: "notLoaded",
          modelPath:
            "main-components/services/muon-services/ele-boxes/serv-muon-barrel-calo-ele-boxes",
          nodeEnd: true,
        },
      ],
    },
    {
      id: uid(),
      name: "z0",
      state: "notLoaded",
      showChildren: false,
      children: [
        {
          id: uid(),
          name: "sector1",
          state: "notLoaded",
          modelPath: "main-components/services/z0/sector-1/serv-z0-sec1",
        },
        {
          id: uid(),
          name: "sector-3",
          state: "notLoaded",
          modelPath: "main-components/services/z0/sector-3/serv-z0-sec3",
        },
        {
          id: uid(),
          name: "sector-5",
          state: "notLoaded",
          modelPath: "main-components/services/z0/sector-5/serv-z0-sec5",
        },
        {
          id: uid(),
          name: "sector-7",
          state: "notLoaded",
          modelPath: "main-components/services/z0/sector-7/serv-z0-sec7",
        },
        {
          id: uid(),
          name: "sector-9",
          state: "notLoaded",
          modelPath: "main-components/services/z0/sector-9/serv-z0-sec9",
        },
        {
          id: uid(),
          name: "sector-11",
          state: "notLoaded",
          modelPath: "main-components/services/z0/sector-11/serv-z0-sec11",
        },
        {
          id: uid(),
          name: "sector-13",
          state: "notLoaded",
          modelPath: "main-components/services/z0/sector-13/serv-z0-sec13",
        },
        {
          id: uid(),
          name: "sector-15",
          state: "notLoaded",
          modelPath: "main-components/services/z0/sector-15/serv-z0-sec15",
          nodeEnd: true,
        },
      ],
    },
    {
      id: uid(),
      name: "ho",
      state: "notLoaded",
      showChildren: false,
      children: [
        {
          id: uid(),
          name: "side a",
          state: "notLoaded",
          modelPath: "main-components/services/h0/side-a/ho-side-a-services",
        },
        {
          id: uid(),
          name: "side c",
          state: "notLoaded",
          modelPath: "main-components/services/h0/side-c/ho-side-c-services",
          nodeEnd: true,
        },
      ],
    },
    {
      id: uid(),
      name: "hs",
      state: "notLoaded",
      showChildren: false,
      nodeEnd: true,
      children: [
        {
          id: uid(),
          name: "us15",
          state: "notLoaded",
          modelPath: "main-components/services/hs/us15/hs-us15-serv",
        },
        {
          id: uid(),
          name: "usa15",
          state: "notLoaded",
          modelPath: "main-components/services/hs/usa15/hs-usa-serv",
          nodeEnd: true,
        },
      ],
    },
  ],
};

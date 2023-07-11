import { uid } from "@utils/uid.util";

import { TreeNode } from "@constants/geometryTree";

export const MUON_SPECTROMETER: TreeNode = {
  id: uid(),
  name: "muon spectrometer",
  state: "notLoaded",
  showChildren: false,
  children: [
    {
      id: uid(),
      name: "barrel",
      state: "notLoaded",
      showChildren: false,
      children: [
        {
          id: uid(),
          name: "bi inner",
          state: "notLoaded",
          modelPath: "muon-barrel-inner"
        },
        {
          id: uid(),
          name: "bi middle",
          state: "notLoaded",
          modelPath: "muon-barrel-middle"
        },
        {
          id: uid(),
          name: "bi outer",
          state: "notLoaded",
          modelPath: "muon-barrel-outer",
          nodeEnd: true
        }
      ]
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
              name: "ei small wheel",
              state: "notLoaded",
              showChildren: false,
              children: [
                {
                  id: uid(),
                  name: "sw chambers",
                  state: "notLoaded",
                  modelPath: "small-wheel-chambers-sidea"
                },
                {
                  id: uid(),
                  name: "njd shielding",
                  state: "notLoaded",
                  modelPath: "small-wheel-njd-sidea"
                },
                {
                  id: uid(),
                  name: "hub",
                  state: "notLoaded",
                  modelPath: "small-wheel-hub-sidea",
                  nodeEnd: true
                }
              ]
            },
            {
              id: uid(),
              name: "em big wheel",
              state: "notLoaded",
              showChildren: false,
              children: [
                {
                  id: uid(),
                  name: "tgc1",
                  state: "notLoaded",
                  modelPath: "tgc-sidea"
                },
                {
                  id: uid(),
                  name: "mdt",
                  state: "notLoaded",
                  modelPath: "muon-big-wheel-mdt-sidea"
                },
                {
                  id: uid(),
                  name: "tgc2",
                  state: "notLoaded",
                  modelPath: "tgc2-sidea"
                },
                {
                  id: uid(),
                  name: "tgc3",
                  state: "notLoaded",
                  modelPath: "tgc3-sidea",
                  nodeEnd: true
                }
              ]
            },
            {
              id: uid(),
              name: "ex extra wheel",
              state: "notLoaded",
              modelPath: "extra-wheel-sidea"
            },
            {
              id: uid(),
              name: "eo outer wheel",
              state: "notLoaded",
              modelPath: "outer-wheel-sidea",
              nodeEnd: true
            }
          ]
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
              name: "ei small wheel",
              state: "notLoaded",
              showChildren: false,
              children: [
                {
                  id: uid(),
                  name: "sw chambers",
                  state: "notLoaded",
                  modelPath: "small-wheel-chambers-sidec"
                },
                {
                  id: uid(),
                  name: "njd shielding",
                  state: "notLoaded",
                  modelPath: "small-wheel-njd-sidec"
                },
                {
                  id: uid(),
                  name: "hub",
                  state: "notLoaded",
                  modelPath: "small-wheel-hub-sidec",
                  nodeEnd: true
                }
              ]
            },
            {
              id: uid(),
              name: "em big wheel",
              state: "notLoaded",
              showChildren: false,
              children: [
                {
                  id: uid(),
                  name: "tgc1",
                  state: "notLoaded",
                  modelPath: "tgc-sidec"
                },
                {
                  id: uid(),
                  name: "mdt",
                  state: "notLoaded",
                  modelPath: "muon-big-wheel-mdt-sidec"
                },
                {
                  id: uid(),
                  name: "tgc2",
                  state: "notLoaded",
                  modelPath: "tgc2-sidec"
                },
                {
                  id: uid(),
                  name: "tgc3",
                  state: "notLoaded",
                  modelPath: "tgc3-sidec",
                  nodeEnd: true
                }
              ]
            },
            {
              id: uid(),
              name: "ex extra wheel",
              state: "notLoaded",
              modelPath: "extra-wheel-sidec"
            },
            {
              id: uid(),
              name: "eo outer wheel",
              state: "notLoaded",
              modelPath: "outer-wheel-sidec",
              nodeEnd: true
            }
          ]
        }
      ]
    }
  ]
};
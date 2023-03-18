export type GeometryState = "notLoaded" | "partialyLoaded" | "isLoaded";

export interface TreeNode {
  id: string;
  name: string;
  state: GeometryState;
  modelPath?: string;
  showChildren?: boolean;
  children?: TreeNode[];
  root?: boolean;
  nodeEnd?: boolean;
  borderImageSlice?: string;
}

function generateId(): string {
  return Math.floor(Math.random() * 1000000).toString();
}

export const GEOMETRY_MENU_TREE: TreeNode[] = [
  {
    id: generateId(),
    name: "atlas detector",
    state: "partialyLoaded",
    showChildren: true,
    root: true,
    children: [
      {
        id: generateId(),
        name: "main components",
        state: "partialyLoaded",
        showChildren: true,
        children: [
          {
            id: generateId(),
            name: "magnet_systems",
            state: "notLoaded",
            showChildren: false,
            children: [
              {
                id: generateId(),
                name: "toroid",
                state: "notLoaded",
                showChildren: false,
                children: [
                  {
                    id: generateId(),
                    name: "barrel",
                    state: "notLoaded",
                    showChildren: false,
                    children: [
                      {
                        id: generateId(),
                        name: "barrel toroid",
                        state: "notLoaded",
                        modelPath: "abc1",
                      },
                    ],
                  },
                  {
                    id: generateId(),
                    name: "endcap",
                    state: "notLoaded",
                    showChildren: false,
                    children: [
                      {
                        id: generateId(),
                        name: "sideA",
                        state: "notLoaded",
                        showChildren: false,
                        children: [
                          {
                            id: generateId(),
                            name: "endcap toroid",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                          {
                            id: generateId(),
                            name: "tower & turret",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                        ],
                      },
                      {
                        id: generateId(),
                        name: "side c",
                        state: "notLoaded",
                        showChildren: false,
                        children: [
                          {
                            id: generateId(),
                            name: "endcap toroid",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                          {
                            id: generateId(),
                            name: "tower & turret",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: generateId(),
            name: "inner_detector",
            state: "isLoaded",
            showChildren: true,
            children: [
              {
                id: generateId(),
                name: "pixel",
                state: "isLoaded",
                modelPath: "abc1",
              },
              {
                id: generateId(),
                name: "sct",
                state: "isLoaded",
                showChildren: true,
                children: [
                  {
                    id: generateId(),
                    name: "barrel",
                    state: "isLoaded",
                    modelPath: "abc2",
                  },
                  {
                    id: generateId(),
                    name: "endcap",
                    state: "isLoaded",
                    showChildren: true,
                    children: [
                      {
                        id: generateId(),
                        name: "side a",
                        state: "isLoaded",
                        modelPath: "abc2",
                      },
                      {
                        id: generateId(),
                        name: "side c",
                        state: "isLoaded",
                        modelPath: "abc2",
                        nodeEnd: true,
                      },
                    ],
                  },
                ],
              },
              {
                id: generateId(),
                name: "trt",
                state: "isLoaded",
                showChildren: true,
                nodeEnd: true,
                children: [
                  {
                    id: generateId(),
                    name: "barrel",
                    state: "isLoaded",
                    modelPath: "abc2",
                  },
                  {
                    id: generateId(),
                    name: "endcap",
                    state: "isLoaded",
                    showChildren: true,
                    nodeEnd: true,
                    children: [
                      {
                        id: generateId(),
                        name: "side a",
                        state: "isLoaded",
                        modelPath: "abc2",
                      },
                      {
                        id: generateId(),
                        name: "side c",
                        state: "isLoaded",
                        modelPath: "abc2",
                        nodeEnd: true,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: generateId(),
            name: "itk",
            state: "notLoaded",
            showChildren: false,
            children: [
              {
                id: generateId(),
                name: "pixel detector",
                state: "notLoaded",
                showChildren: false,
                nodeEnd: true,
                borderImageSlice: "4%",
                children: [
                  {
                    id: generateId(),
                    name: "pixel inner system",
                    state: "notLoaded",
                    showChildren: false,
                    children: [
                      {
                        id: generateId(),
                        name: "barrel",
                        state: "notLoaded",
                        modelPath: "abc1",
                      },
                      {
                        id: generateId(),
                        name: "endcap",
                        state: "notLoaded",
                        showChildren: false,
                        children: [
                          {
                            id: generateId(),
                            name: "side a",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                          {
                            id: generateId(),
                            name: "side c",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: generateId(),
                    name: "pixel outer system",
                    state: "notLoaded",
                    showChildren: false,
                    nodeEnd: true,
                    borderImageSlice: "12%",
                    children: [
                      {
                        id: generateId(),
                        name: "barrel",
                        state: "notLoaded",
                        modelPath: "abc1",
                      },
                      {
                        id: generateId(),
                        name: "endcap",
                        state: "notLoaded",
                        showChildren: true,
                        children: [
                          {
                            id: generateId(),
                            name: "side a",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                          {
                            id: generateId(),
                            name: "side b",
                            state: "notLoaded",
                            modelPath: "abc1",
                            nodeEnd: true,
                          },
                        ],
                      },
                      {
                        id: generateId(),
                        name: "pixel pp1",
                        state: "notLoaded",
                        showChildren: false,
                        borderImageSlice: "15%",
                        nodeEnd: true,
                        children: [
                          {
                            id: generateId(),
                            name: "side a",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                          {
                            id: generateId(),
                            name: "side c",
                            state: "notLoaded",
                            modelPath: "abc1",
                            nodeEnd: true,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: generateId(),
            name: "calorimetry",
            state: "notLoaded",
            showChildren: false,
            children: [
              {
                id: generateId(),
                name: "lar",
                state: "notLoaded",
                showChildren: false,
                children: [
                  {
                    id: generateId(),
                    name: "barrel",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                  {
                    id: generateId(),
                    name: "endcap",
                    state: "notLoaded",
                    showChildren: false,
                    children: [
                      {
                        id: generateId(),
                        name: "side a",
                        state: "notLoaded",
                        showChildren: false,
                        children: [
                          {
                            id: generateId(),
                            name: "lar emec",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                          {
                            id: generateId(),
                            name: "lar hec",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                          {
                            id: generateId(),
                            name: "lar fcal",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                        ],
                      },
                      {
                        id: generateId(),
                        name: "side c",
                        state: "notLoaded",
                        showChildren: false,
                        children: [
                          {
                            id: generateId(),
                            name: "lar emec",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                          {
                            id: generateId(),
                            name: "lar hec",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                          {
                            id: generateId(),
                            name: "lar fcal",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                id: generateId(),
                name: "tile",
                state: "notLoaded",
                showChildren: false,
                children: [
                  {
                    id: generateId(),
                    name: "barrel",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                  {
                    id: generateId(),
                    name: "barrel ext.",
                    state: "notLoaded",
                    showChildren: false,
                    children: [
                      {
                        id: generateId(),
                        name: "side a",
                        state: "notLoaded",
                        modelPath: "abc1",
                      },
                      {
                        id: generateId(),
                        name: "side c",
                        state: "notLoaded",
                        modelPath: "abc1",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: generateId(),
            name: "muon spectrometer",
            state: "notLoaded",
            showChildren: false,
            children: [
              {
                id: generateId(),
                name: "barrel",
                state: "notLoaded",
                showChildren: false,
                children: [
                  {
                    id: generateId(),
                    name: "bi inner",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                  {
                    id: generateId(),
                    name: "bi middle",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                  {
                    id: generateId(),
                    name: "bi outer",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                ],
              },
              {
                id: generateId(),
                name: "endcap",
                state: "notLoaded",
                showChildren: false,
                children: [
                  {
                    id: generateId(),
                    name: "side a",
                    state: "notLoaded",
                    showChildren: false,
                    children: [
                      {
                        id: generateId(),
                        name: "ei small wheel",
                        state: "notLoaded",
                        showChildren: false,
                        children: [
                          {
                            id: generateId(),
                            name: "sw chambers",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                          {
                            id: generateId(),
                            name: "njd shielding",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                          {
                            id: generateId(),
                            name: "hub",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                        ],
                      },
                      {
                        id: generateId(),
                        name: "em big wheel",
                        state: "notLoaded",
                        showChildren: false,
                        children: [
                          {
                            id: generateId(),
                            name: "tgc1",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                          {
                            id: generateId(),
                            name: "mdt",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                          {
                            id: generateId(),
                            name: "tgc2",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                          {
                            id: generateId(),
                            name: "tgc3",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                        ],
                      },
                      {
                        id: generateId(),
                        name: "ex extra wheel",
                        state: "notLoaded",
                        modelPath: "abc1",
                      },
                      {
                        id: generateId(),
                        name: "eo outer wheel",
                        state: "notLoaded",
                        modelPath: "abc1",
                      },
                    ],
                  },
                  {
                    id: generateId(),
                    name: "side c",
                    state: "notLoaded",
                    showChildren: false,
                    children: [
                      {
                        id: generateId(),
                        name: "ei small wheel",
                        state: "notLoaded",
                        showChildren: false,
                        children: [
                          {
                            id: generateId(),
                            name: "sw chambers",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                          {
                            id: generateId(),
                            name: "njd shielding",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                          {
                            id: generateId(),
                            name: "hub",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                        ],
                      },
                      {
                        id: generateId(),
                        name: "em big wheel",
                        state: "notLoaded",
                        showChildren: false,
                        children: [
                          {
                            id: generateId(),
                            name: "tgc1",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                          {
                            id: generateId(),
                            name: "mdt",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                          {
                            id: generateId(),
                            name: "tgc2",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                          {
                            id: generateId(),
                            name: "tgc3",
                            state: "notLoaded",
                            modelPath: "abc1",
                          },
                        ],
                      },
                      {
                        id: generateId(),
                        name: "ex extra wheel",
                        state: "notLoaded",
                        modelPath: "abc1",
                      },
                      {
                        id: generateId(),
                        name: "eo outer wheel",
                        state: "notLoaded",
                        modelPath: "abc1",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: generateId(),
            name: "forward shielding",
            state: "notLoaded",
            showChildren: false,
            children: [
              {
                id: generateId(),
                name: "side a",
                state: "notLoaded",
                modelPath: "abc1",
              },
              {
                id: generateId(),
                name: "side c",
                state: "notLoaded",
                modelPath: "abc1",
              },
            ],
          },
          {
            id: generateId(),
            name: "services",
            state: "notLoaded",
            showChildren: false,
            children: [
              {
                id: generateId(),
                name: "calorimeter services",
                state: "notLoaded",
                showChildren: false,
                children: [
                  {
                    id: generateId(),
                    name: "flexible chain S.9",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                  {
                    id: generateId(),
                    name: "flexible chain s.11",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                  {
                    id: generateId(),
                    name: "flexible chain s.15",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                  {
                    id: generateId(),
                    name: "gap region",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                ],
              },
              {
                id: generateId(),
                name: "muon services",
                state: "notLoaded",
                showChildren: false,
                children: [
                  {
                    id: generateId(),
                    name: "patch panels",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                  {
                    id: generateId(),
                    name: "sw services",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                  {
                    id: generateId(),
                    name: "cable trays",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                  {
                    id: generateId(),
                    name: "cable trays inside barrel",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                  {
                    id: generateId(),
                    name: "ele boxes",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                ],
              },
              {
                id: generateId(),
                name: "z0",
                state: "notLoaded",
                showChildren: false,
                children: [
                  {
                    id: generateId(),
                    name: "sector1",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                  {
                    id: generateId(),
                    name: "sector-3",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                  {
                    id: generateId(),
                    name: "sector-5",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                  {
                    id: generateId(),
                    name: "sector-7",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                  {
                    id: generateId(),
                    name: "sector-9",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                  {
                    id: generateId(),
                    name: "sector-11",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                  {
                    id: generateId(),
                    name: "sector-13",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                  {
                    id: generateId(),
                    name: "sector-15",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                ],
              },
              {
                id: generateId(),
                name: "ho",
                state: "notLoaded",
                showChildren: false,
                children: [
                  {
                    id: generateId(),
                    name: "side a",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                  {
                    id: generateId(),
                    name: "side c",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                ],
              },
              {
                id: generateId(),
                name: "hs",
                state: "notLoaded",
                showChildren: false,
                children: [
                  {
                    id: generateId(),
                    name: "us15",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                  {
                    id: generateId(),
                    name: "usa15",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                ],
              },
            ],
          },
          {
            id: generateId(),
            name: "platforms",
            state: "notLoaded",
            showChildren: false,
            nodeEnd: true,
            children: [
              {
                id: generateId(),
                name: "even sectors",
                state: "notLoaded",
                modelPath: "abc1",
              },
              {
                id: generateId(),
                name: "odd sectors",
                state: "notLoaded",
                modelPath: "abc1",
              },
              {
                id: generateId(),
                name: "hs platforms",
                state: "notLoaded",
                showChildren: false,
                children: [
                  {
                    id: generateId(),
                    name: "top platforms",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                  {
                    id: generateId(),
                    name: "central pit platforms",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                  {
                    id: generateId(),
                    name: "us15 platforms",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                  {
                    id: generateId(),
                    name: "usa15 platforms",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                ],
              },
              {
                id: generateId(),
                name: "ho platforms",
                state: "notLoaded",
                showChildren: false,
                children: [
                  {
                    id: generateId(),
                    name: "side a",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                  {
                    id: generateId(),
                    name: "side c",
                    state: "notLoaded",
                    modelPath: "abc1",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: generateId(),
        name: "support structure",
        state: "notLoaded",
        showChildren: false,
        children: [
          {
            id: generateId(),
            name: "mechanical structure",
            state: "notLoaded",
            showChildren: false,
            nodeEnd: true,
            children: [
              {
                id: generateId(),
                name: "feed and rails",
                state: "notLoaded",
                modelPath: "abc2",
              },
              {
                id: generateId(),
                name: "bt warm structure",
                state: "notLoaded",
                modelPath: "abc2",
              },
              {
                id: generateId(),
                name: "hf truck",
                state: "notLoaded",
                showChildren: false,
                nodeEnd: true,
                children: [
                  {
                    id: generateId(),
                    name: "side a",
                    state: "notLoaded",
                    modelPath: "abc2",
                  },
                  {
                    id: generateId(),
                    name: "side c",
                    state: "notLoaded",
                    modelPath: "abc2",
                    nodeEnd: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: generateId(),
        name: "cavern",
        state: "notLoaded",
        showChildren: false,
        nodeEnd: true,
        children: [
          {
            id: generateId(),
            name: "ux15",
            state: "notLoaded",
            modelPath: "abc3",
          },
          {
            id: generateId(),
            name: "us15",
            state: "notLoaded",
            modelPath: "abc3",
          },
          {
            id: generateId(),
            name: "usa15",
            state: "notLoaded",
            modelPath: "abc3",
          },
          {
            id: generateId(),
            name: "px14",
            state: "notLoaded",
            modelPath: "abc3",
          },
          {
            id: generateId(),
            name: "px15",
            state: "notLoaded",
            modelPath: "abc3",
          },
          {
            id: generateId(),
            name: "px16",
            state: "notLoaded",
            modelPath: "abc3",
          },
          {
            id: generateId(),
            name: "pm15",
            state: "notLoaded",
            modelPath: "abc3",
            nodeEnd: true,
          },
        ],
      },
    ],
  },
];

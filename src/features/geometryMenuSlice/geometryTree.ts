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
            name: "magnet systems",
            state: "notLoaded",
            showChildren: false,
            children: [
              {
                id: generateId(),
                name: "toroid",
                state: "notLoaded",
                showChildren: false,
                nodeEnd: true,
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
                        modelPath: "barrel-toroid",
                        nodeEnd: true,
                      },
                    ],
                  },
                  {
                    id: generateId(),
                    name: "endcap",
                    state: "notLoaded",
                    showChildren: false,
                    nodeEnd: true,
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
                            modelPath: "end-cap-toroid-sidea",
                          },
                          {
                            id: generateId(),
                            name: "tower & turret",
                            state: "notLoaded",
                            modelPath: "tower-turret-sidea",
                            nodeEnd: true,
                          },
                        ],
                      },
                      {
                        id: generateId(),
                        name: "side c",
                        state: "notLoaded",
                        showChildren: false,
                        nodeEnd: true,
                        children: [
                          {
                            id: generateId(),
                            name: "endcap toroid",
                            state: "notLoaded",
                            modelPath: "end-cap-toroid-sidec",
                          },
                          {
                            id: generateId(),
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
          },
          {
            id: generateId(),
            name: "inner detector",
            state: "isLoaded",
            showChildren: false,
            children: [
              {
                id: generateId(),
                name: "pixel",
                state: "isLoaded",
                modelPath: "pixel",
              },
              {
                id: generateId(),
                name: "sct",
                state: "isLoaded",
                showChildren: false,
                children: [
                  {
                    id: generateId(),
                    name: "barrel",
                    state: "isLoaded",
                    modelPath: "sct-bar",
                  },
                  {
                    id: generateId(),
                    name: "endcap",
                    state: "isLoaded",
                    showChildren: false,
                    children: [
                      {
                        id: generateId(),
                        name: "side a",
                        state: "isLoaded",
                        modelPath: "sct-sidea",
                      },
                      {
                        id: generateId(),
                        name: "side c",
                        state: "isLoaded",
                        modelPath: "sct-sidec",
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
                showChildren: false,
                nodeEnd: true,
                children: [
                  {
                    id: generateId(),
                    name: "barrel",
                    state: "isLoaded",
                    modelPath: "trt-bar",
                  },
                  {
                    id: generateId(),
                    name: "endcap",
                    state: "isLoaded",
                    showChildren: false,
                    nodeEnd: true,
                    children: [
                      {
                        id: generateId(),
                        name: "side a",
                        state: "isLoaded",
                        modelPath: "trt-sidea",
                      },
                      {
                        id: generateId(),
                        name: "side c",
                        state: "isLoaded",
                        modelPath: "trt-sidec",
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
                        modelPath: "itk-pixel-layout-inner-barrel",
                      },
                      {
                        id: generateId(),
                        name: "endcap",
                        state: "notLoaded",
                        showChildren: false,
                        nodeEnd: true,
                        children: [
                          {
                            id: generateId(),
                            name: "side a",
                            state: "notLoaded",
                            modelPath: "itk-pixel-layout-inner-endcap-sidea",
                          },
                          {
                            id: generateId(),
                            name: "side c",
                            state: "notLoaded",
                            modelPath: "itk-pixel-layout-inner-endcap-sidec",
                            nodeEnd: true,
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
                    children: [
                      {
                        id: generateId(),
                        name: "barrel",
                        state: "notLoaded",
                        modelPath: "itk-pixel-layout-outer-barrel",
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
                            modelPath: "itk-pixel-layout-outer-endcap-sidea",
                          },
                          {
                            id: generateId(),
                            name: "side c",
                            state: "notLoaded",
                            modelPath: "itk-pixel-layout-outer-endcap-sidec",
                            nodeEnd: true,
                          },
                        ],
                      },
                      {
                        id: generateId(),
                        name: "pixel pp1",
                        state: "notLoaded",
                        showChildren: false,
                        nodeEnd: true,
                        children: [
                          {
                            id: generateId(),
                            name: "side a",
                            state: "notLoaded",
                            modelPath: "pixel-pp1-side-a",
                          },
                          {
                            id: generateId(),
                            name: "side c",
                            state: "notLoaded",
                            modelPath: "pixel-pp1-side-c",
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
                    modelPath: "lar-barrel",
                  },
                  {
                    id: generateId(),
                    name: "endcap",
                    state: "notLoaded",
                    showChildren: false,
                    nodeEnd: true,
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
                            modelPath: "lar-emec-sidea",
                          },
                          {
                            id: generateId(),
                            name: "lar hec",
                            state: "notLoaded",
                            modelPath: "lar-hec-sidea",
                          },
                          {
                            id: generateId(),
                            name: "lar fcal",
                            state: "notLoaded",
                            modelPath: "lar-fcal-sidea",
                            nodeEnd: true,
                          },
                        ],
                      },
                      {
                        id: generateId(),
                        name: "side c",
                        state: "notLoaded",
                        showChildren: false,
                        nodeEnd: true,
                        children: [
                          {
                            id: generateId(),
                            name: "lar emec",
                            state: "notLoaded",
                            modelPath: "lar-emec-sidec",
                          },
                          {
                            id: generateId(),
                            name: "lar hec",
                            state: "notLoaded",
                            modelPath: "lar-hec-sidec",
                          },
                          {
                            id: generateId(),
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
                id: generateId(),
                name: "tile",
                state: "notLoaded",
                showChildren: false,
                nodeEnd: true,
                children: [
                  {
                    id: generateId(),
                    name: "barrel",
                    state: "notLoaded",
                    modelPath: "tile-barrel",
                  },
                  {
                    id: generateId(),
                    name: "barrel ext.",
                    state: "notLoaded",
                    showChildren: false,
                    nodeEnd: true,
                    children: [
                      {
                        id: generateId(),
                        name: "side a",
                        state: "notLoaded",
                        modelPath: "tile-end-cap-sidea",
                      },
                      {
                        id: generateId(),
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
                    modelPath: "muon-barrel-inner",
                  },
                  {
                    id: generateId(),
                    name: "bi middle",
                    state: "notLoaded",
                    modelPath: "muon-barrel-middle",
                  },
                  {
                    id: generateId(),
                    name: "bi outer",
                    state: "notLoaded",
                    modelPath: "muon-barrel-outer",
                    nodeEnd: true,
                  },
                ],
              },
              {
                id: generateId(),
                name: "endcap",
                state: "notLoaded",
                showChildren: false,
                nodeEnd: true,
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
                            modelPath: "small-wheel-chambers-sidea",
                          },
                          {
                            id: generateId(),
                            name: "njd shielding",
                            state: "notLoaded",
                            modelPath: "small-wheel-njd-sidea",
                          },
                          {
                            id: generateId(),
                            name: "hub",
                            state: "notLoaded",
                            modelPath: "small-wheel-hub-sidea",
                            nodeEnd: true,
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
                            modelPath: "tgc-sidea",
                          },
                          {
                            id: generateId(),
                            name: "mdt",
                            state: "notLoaded",
                            modelPath: "muon-big-wheel-mdt-sidea",
                          },
                          {
                            id: generateId(),
                            name: "tgc2",
                            state: "notLoaded",
                            modelPath: "tgc2-sidea",
                          },
                          {
                            id: generateId(),
                            name: "tgc3",
                            state: "notLoaded",
                            modelPath: "tgc3-sidea",
                            nodeEnd: true,
                          },
                        ],
                      },
                      {
                        id: generateId(),
                        name: "ex extra wheel",
                        state: "notLoaded",
                        modelPath: "extra-wheel-sidea",
                      },
                      {
                        id: generateId(),
                        name: "eo outer wheel",
                        state: "notLoaded",
                        modelPath: "outer-wheel-sidea",
                        nodeEnd: true,
                      },
                    ],
                  },
                  {
                    id: generateId(),
                    name: "side c",
                    state: "notLoaded",
                    showChildren: false,
                    nodeEnd: true,
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
                            modelPath: "small-wheel-chambers-sidec",
                          },
                          {
                            id: generateId(),
                            name: "njd shielding",
                            state: "notLoaded",
                            modelPath: "small-wheel-njd-sidec",
                          },
                          {
                            id: generateId(),
                            name: "hub",
                            state: "notLoaded",
                            modelPath: "small-wheel-hub-sidec",
                            nodeEnd: true,
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
                            modelPath: "tgc-sidec",
                          },
                          {
                            id: generateId(),
                            name: "mdt",
                            state: "notLoaded",
                            modelPath: "muon-big-wheel-mdt-sidec",
                          },
                          {
                            id: generateId(),
                            name: "tgc2",
                            state: "notLoaded",
                            modelPath: "tgc2-sidec",
                          },
                          {
                            id: generateId(),
                            name: "tgc3",
                            state: "notLoaded",
                            modelPath: "tgc3-sidec",
                            nodeEnd: true,
                          },
                        ],
                      },
                      {
                        id: generateId(),
                        name: "ex extra wheel",
                        state: "notLoaded",
                        modelPath: "extra-wheel-sidec",
                      },
                      {
                        id: generateId(),
                        name: "eo outer wheel",
                        state: "notLoaded",
                        modelPath: "outer-wheel-sidec",
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
            name: "forward shielding",
            state: "notLoaded",
            showChildren: false,
            children: [
              {
                id: generateId(),
                name: "side a",
                state: "notLoaded",
                modelPath: "forward-shielding-sidea",
              },
              {
                id: generateId(),
                name: "side c",
                state: "notLoaded",
                modelPath: "forward-shielding-sidec",
                nodeEnd: true,
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
                    modelPath: "flex-chain-sec9",
                  },
                  {
                    id: generateId(),
                    name: "flexible chain s.11",
                    state: "notLoaded",
                    modelPath: "flex-chain-sec11",
                  },
                  {
                    id: generateId(),
                    name: "flexible chain s.15",
                    state: "notLoaded",
                    modelPath: "flex-chain-sec15",
                  },
                  {
                    id: generateId(),
                    name: "gap region",
                    state: "notLoaded",
                    modelPath: "gap-region-serv",
                    nodeEnd: true,
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
                    modelPath: "nan",
                  },
                  {
                    id: generateId(),
                    name: "sw services",
                    state: "notLoaded",
                    modelPath: "serv-muon-sw",
                  },
                  {
                    id: generateId(),
                    name: "cable trays",
                    state: "notLoaded",
                    modelPath: "serv-muon-cable-trays",
                  },
                  {
                    id: generateId(),
                    name: "cable trays inside barrel",
                    state: "notLoaded",
                    modelPath: "serv-muon-cable-trays-inside-barrel",
                  },
                  {
                    id: generateId(),
                    name: "ele boxes",
                    state: "notLoaded",
                    modelPath: "serv-muon-barrel-calo-ele-boxes",
                    nodeEnd: true,
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
                    modelPath: "serv-z0-sec1",
                  },
                  {
                    id: generateId(),
                    name: "sector-3",
                    state: "notLoaded",
                    modelPath: "serv-z0-sec3",
                  },
                  {
                    id: generateId(),
                    name: "sector-5",
                    state: "notLoaded",
                    modelPath: "serv-z0-sec5",
                  },
                  {
                    id: generateId(),
                    name: "sector-7",
                    state: "notLoaded",
                    modelPath: "serv-z0-sec7",
                  },
                  {
                    id: generateId(),
                    name: "sector-9",
                    state: "notLoaded",
                    modelPath: "serv-z0-sec9",
                  },
                  {
                    id: generateId(),
                    name: "sector-11",
                    state: "notLoaded",
                    modelPath: "serv-z0-sec11",
                  },
                  {
                    id: generateId(),
                    name: "sector-13",
                    state: "notLoaded",
                    modelPath: "serv-z0-sec13",
                  },
                  {
                    id: generateId(),
                    name: "sector-15",
                    state: "notLoaded",
                    modelPath: "serv-z0-sec15",
                    nodeEnd: true,
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
                    modelPath: "ho-side-a-services",
                  },
                  {
                    id: generateId(),
                    name: "side c",
                    state: "notLoaded",
                    modelPath: "ho-side-c-services",
                    nodeEnd: true,
                  },
                ],
              },
              {
                id: generateId(),
                name: "hs",
                state: "notLoaded",
                showChildren: false,
                nodeEnd: true,
                children: [
                  {
                    id: generateId(),
                    name: "us15",
                    state: "notLoaded",
                    modelPath: "hs-us15-serv",
                  },
                  {
                    id: generateId(),
                    name: "usa15",
                    state: "notLoaded",
                    modelPath: "hs-usa-serv",
                    nodeEnd: true,
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
            nodeEnd: false,
            children: [
              {
                id: generateId(),
                name: "even sectors",
                state: "notLoaded",
                modelPath: "access-platforms-even-sectors",
              },
              {
                id: generateId(),
                name: "odd sectors",
                state: "notLoaded",
                modelPath: "access-platforms-odd-sectors",
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
                    modelPath: "hs-arche",
                  },
                  {
                    id: generateId(),
                    name: "central pit platforms",
                    state: "notLoaded",
                    modelPath: "hs-central-pit-structure",
                  },
                  {
                    id: generateId(),
                    name: "us15 platforms",
                    state: "notLoaded",
                    modelPath: "hs-us",
                  },
                  {
                    id: generateId(),
                    name: "usa15 platforms",
                    state: "notLoaded",
                    modelPath: "hs-usa",
                    nodeEnd: true,
                  },
                ],
              },
              {
                id: generateId(),
                name: "ho platforms",
                state: "notLoaded",
                showChildren: false,
                nodeEnd: true,
                children: [
                  {
                    id: generateId(),
                    name: "side a",
                    state: "notLoaded",
                    modelPath: "ho-side-a-platforms",
                  },
                  {
                    id: generateId(),
                    name: "side c",
                    state: "notLoaded",
                    modelPath: "ho-side-c-platforms",
                    nodeEnd: true,
                  },
                ],
              },
            ],
          },
          {
            id: generateId(),
            name: "beam pipe",
            state: "notLoaded",
            modelPath: "beam",
            nodeEnd: true,
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
                modelPath: "feet",
              },
              {
                id: generateId(),
                name: "bt warm structure",
                state: "notLoaded",
                modelPath: "warm-structure",
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
                    modelPath: "hf-truck-sidea",
                  },
                  {
                    id: generateId(),
                    name: "side c",
                    state: "notLoaded",
                    modelPath: "hf-truck-sidec",
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
            modelPath: "ux15",
          },
          {
            id: generateId(),
            name: "us15",
            state: "notLoaded",
            modelPath: "us15",
          },
          {
            id: generateId(),
            name: "usa15",
            state: "notLoaded",
            modelPath: "usa15",
          },
          {
            id: generateId(),
            name: "px14",
            state: "notLoaded",
            modelPath: "px14",
          },
          {
            id: generateId(),
            name: "px15",
            state: "notLoaded",
            modelPath: "px15",
          },
          {
            id: generateId(),
            name: "px16",
            state: "notLoaded",
            modelPath: "px16",
          },
          {
            id: generateId(),
            name: "pm15",
            state: "notLoaded",
            modelPath: "pm15",
            nodeEnd: true,
          },
        ],
      },
    ],
  },
];

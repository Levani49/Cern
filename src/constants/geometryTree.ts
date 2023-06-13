import { uid } from "@utils/uid.util";

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

export const GEOMETRY_MENU_TREE: TreeNode[] = [
  {
    id: uid(),
    name: "atlas detector",
    state: "partialyLoaded",
    showChildren: true,
    root: true,
    children: [
      {
        id: uid(),
        name: "main components",
        state: "partialyLoaded",
        showChildren: true,
        children: [
          {
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
                        name: "sideA",
                        state: "notLoaded",
                        showChildren: false,
                        children: [
                          {
                            id: uid(),
                            name: "endcap toroid",
                            state: "notLoaded",
                            modelPath: "end-cap-toroid-sidea"
                          },
                          {
                            id: uid(),
                            name: "tower & turret",
                            state: "notLoaded",
                            modelPath: "tower-turret-sidea",
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
                            name: "endcap toroid",
                            state: "notLoaded",
                            modelPath: "end-cap-toroid-sidec"
                          },
                          {
                            id: uid(),
                            name: "tower & turret",
                            state: "notLoaded",
                            modelPath: "tower-turret-sidec",
                            nodeEnd: true
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: uid(),
            name: "inner detector",
            state: "isLoaded",
            showChildren: false,
            children: [
              {
                id: uid(),
                name: "pixel",
                state: "isLoaded",
                modelPath: "pixel"
              },
              {
                id: uid(),
                name: "sct",
                state: "isLoaded",
                showChildren: false,
                children: [
                  {
                    id: uid(),
                    name: "barrel",
                    state: "isLoaded",
                    modelPath: "sct-bar"
                  },
                  {
                    id: uid(),
                    name: "endcap",
                    state: "isLoaded",
                    showChildren: false,
                    children: [
                      {
                        id: uid(),
                        name: "side a",
                        state: "isLoaded",
                        modelPath: "sct-sidea"
                      },
                      {
                        id: uid(),
                        name: "side c",
                        state: "isLoaded",
                        modelPath: "sct-sidec",
                        nodeEnd: true
                      }
                    ]
                  }
                ]
              },
              {
                id: uid(),
                name: "trt",
                state: "isLoaded",
                showChildren: false,
                nodeEnd: true,
                children: [
                  {
                    id: uid(),
                    name: "barrel",
                    state: "isLoaded",
                    modelPath: "trt-bar"
                  },
                  {
                    id: uid(),
                    name: "endcap",
                    state: "isLoaded",
                    showChildren: false,
                    nodeEnd: true,
                    children: [
                      {
                        id: uid(),
                        name: "side a",
                        state: "isLoaded",
                        modelPath: "trt-sidea"
                      },
                      {
                        id: uid(),
                        name: "side c",
                        state: "isLoaded",
                        modelPath: "trt-sidec",
                        nodeEnd: true
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: uid(),
            name: "itk",
            state: "notLoaded",
            showChildren: false,
            children: [
              {
                id: uid(),
                name: "pixel detector",
                state: "notLoaded",
                showChildren: false,
                nodeEnd: true,
                children: [
                  {
                    id: uid(),
                    name: "pixel inner system",
                    state: "notLoaded",
                    showChildren: false,
                    children: [
                      {
                        id: uid(),
                        name: "barrel",
                        state: "notLoaded",
                        modelPath: "itk-pixel-layout-inner-barrel"
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
                            modelPath: "itk-pixel-layout-inner-endcap-sidea"
                          },
                          {
                            id: uid(),
                            name: "side c",
                            state: "notLoaded",
                            modelPath: "itk-pixel-layout-inner-endcap-sidec",
                            nodeEnd: true
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: uid(),
                    name: "pixel outer system",
                    state: "notLoaded",
                    showChildren: false,
                    nodeEnd: true,
                    children: [
                      {
                        id: uid(),
                        name: "barrel",
                        state: "notLoaded",
                        modelPath: "itk-pixel-layout-outer-barrel"
                      },
                      {
                        id: uid(),
                        name: "endcap",
                        state: "notLoaded",
                        showChildren: true,
                        children: [
                          {
                            id: uid(),
                            name: "side a",
                            state: "notLoaded",
                            modelPath: "itk-pixel-layout-outer-endcap-sidea"
                          },
                          {
                            id: uid(),
                            name: "side c",
                            state: "notLoaded",
                            modelPath: "itk-pixel-layout-outer-endcap-sidec",
                            nodeEnd: true
                          }
                        ]
                      },
                      {
                        id: uid(),
                        name: "pixel pp1",
                        state: "notLoaded",
                        showChildren: false,
                        nodeEnd: true,
                        children: [
                          {
                            id: uid(),
                            name: "side a",
                            state: "notLoaded",
                            modelPath: "pixel-pp1-side-a"
                          },
                          {
                            id: uid(),
                            name: "side c",
                            state: "notLoaded",
                            modelPath: "pixel-pp1-side-c",
                            nodeEnd: true
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
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
                    modelPath: "lar-barrel"
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
                            modelPath: "lar-emec-sidea"
                          },
                          {
                            id: uid(),
                            name: "lar hec",
                            state: "notLoaded",
                            modelPath: "lar-hec-sidea"
                          },
                          {
                            id: uid(),
                            name: "lar fcal",
                            state: "notLoaded",
                            modelPath: "lar-fcal-sidea",
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
                            name: "lar emec",
                            state: "notLoaded",
                            modelPath: "lar-emec-sidec"
                          },
                          {
                            id: uid(),
                            name: "lar hec",
                            state: "notLoaded",
                            modelPath: "lar-hec-sidec"
                          },
                          {
                            id: uid(),
                            name: "lar fcal",
                            state: "notLoaded",
                            modelPath: "lar-fcal-sidec",
                            nodeEnd: true
                          }
                        ]
                      }
                    ]
                  }
                ]
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
                    modelPath: "tile-barrel"
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
                        modelPath: "tile-end-cap-sidea"
                      },
                      {
                        id: uid(),
                        name: "side c",
                        state: "notLoaded",
                        modelPath: "tile-end-cap-sidec",
                        nodeEnd: true
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
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
          },
          {
            id: uid(),
            name: "forward shielding",
            state: "notLoaded",
            showChildren: false,
            children: [
              {
                id: uid(),
                name: "side a",
                state: "notLoaded",
                modelPath: "forward-shielding-sidea"
              },
              {
                id: uid(),
                name: "side c",
                state: "notLoaded",
                modelPath: "forward-shielding-sidec",
                nodeEnd: true
              }
            ]
          },
          {
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
                    modelPath: "flex-chain-sec9"
                  },
                  {
                    id: uid(),
                    name: "flexible chain s.11",
                    state: "notLoaded",
                    modelPath: "flex-chain-sec11"
                  },
                  {
                    id: uid(),
                    name: "flexible chain s.15",
                    state: "notLoaded",
                    modelPath: "flex-chain-sec15"
                  },
                  {
                    id: uid(),
                    name: "gap region",
                    state: "notLoaded",
                    modelPath: "gap-region-serv",
                    nodeEnd: true
                  }
                ]
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
                    modelPath: "nan"
                  },
                  {
                    id: uid(),
                    name: "sw services",
                    state: "notLoaded",
                    modelPath: "serv-muon-sw"
                  },
                  {
                    id: uid(),
                    name: "cable trays",
                    state: "notLoaded",
                    modelPath: "serv-muon-cable-trays"
                  },
                  {
                    id: uid(),
                    name: "cable trays inside barrel",
                    state: "notLoaded",
                    modelPath: "serv-muon-cable-trays-inside-barrel"
                  },
                  {
                    id: uid(),
                    name: "ele boxes",
                    state: "notLoaded",
                    modelPath: "serv-muon-barrel-calo-ele-boxes",
                    nodeEnd: true
                  }
                ]
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
                    modelPath: "serv-z0-sec1"
                  },
                  {
                    id: uid(),
                    name: "sector-3",
                    state: "notLoaded",
                    modelPath: "serv-z0-sec3"
                  },
                  {
                    id: uid(),
                    name: "sector-5",
                    state: "notLoaded",
                    modelPath: "serv-z0-sec5"
                  },
                  {
                    id: uid(),
                    name: "sector-7",
                    state: "notLoaded",
                    modelPath: "serv-z0-sec7"
                  },
                  {
                    id: uid(),
                    name: "sector-9",
                    state: "notLoaded",
                    modelPath: "serv-z0-sec9"
                  },
                  {
                    id: uid(),
                    name: "sector-11",
                    state: "notLoaded",
                    modelPath: "serv-z0-sec11"
                  },
                  {
                    id: uid(),
                    name: "sector-13",
                    state: "notLoaded",
                    modelPath: "serv-z0-sec13"
                  },
                  {
                    id: uid(),
                    name: "sector-15",
                    state: "notLoaded",
                    modelPath: "serv-z0-sec15",
                    nodeEnd: true
                  }
                ]
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
                    modelPath: "ho-side-a-services"
                  },
                  {
                    id: uid(),
                    name: "side c",
                    state: "notLoaded",
                    modelPath: "ho-side-c-services",
                    nodeEnd: true
                  }
                ]
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
                    modelPath: "hs-us15-serv"
                  },
                  {
                    id: uid(),
                    name: "usa15",
                    state: "notLoaded",
                    modelPath: "hs-usa-serv",
                    nodeEnd: true
                  }
                ]
              }
            ]
          },
          {
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
                modelPath: "access-platforms-even-sectors"
              },
              {
                id: uid(),
                name: "odd sectors",
                state: "notLoaded",
                modelPath: "access-platforms-odd-sectors"
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
                    modelPath: "hs-arche"
                  },
                  {
                    id: uid(),
                    name: "central pit platforms",
                    state: "notLoaded",
                    modelPath: "hs-central-pit-structure"
                  },
                  {
                    id: uid(),
                    name: "us15 platforms",
                    state: "notLoaded",
                    modelPath: "hs-us"
                  },
                  {
                    id: uid(),
                    name: "usa15 platforms",
                    state: "notLoaded",
                    modelPath: "hs-usa",
                    nodeEnd: true
                  }
                ]
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
                    modelPath: "ho-side-a-platforms"
                  },
                  {
                    id: uid(),
                    name: "side c",
                    state: "notLoaded",
                    modelPath: "ho-side-c-platforms",
                    nodeEnd: true
                  }
                ]
              }
            ]
          },
          {
            id: uid(),
            name: "beam pipe",
            state: "notLoaded",
            modelPath: "beam",
            nodeEnd: true
          }
        ]
      },
      {
        id: uid(),
        name: "support structure",
        state: "notLoaded",
        showChildren: false,
        children: [
          {
            id: uid(),
            name: "mechanical structure",
            state: "notLoaded",
            showChildren: false,
            nodeEnd: true,
            children: [
              {
                id: uid(),
                name: "feed and rails",
                state: "notLoaded",
                modelPath: "feet"
              },
              {
                id: uid(),
                name: "bt warm structure",
                state: "notLoaded",
                modelPath: "warm-structure"
              },
              {
                id: uid(),
                name: "hf truck",
                state: "notLoaded",
                showChildren: false,
                nodeEnd: true,
                children: [
                  {
                    id: uid(),
                    name: "side a",
                    state: "notLoaded",
                    modelPath: "hf-truck-sidea"
                  },
                  {
                    id: uid(),
                    name: "side c",
                    state: "notLoaded",
                    modelPath: "hf-truck-sidec",
                    nodeEnd: true
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: uid(),
        name: "cavern",
        state: "notLoaded",
        showChildren: false,
        nodeEnd: true,
        children: [
          {
            id: uid(),
            name: "ux15",
            state: "notLoaded",
            modelPath: "ux15"
          },
          {
            id: uid(),
            name: "us15",
            state: "notLoaded",
            modelPath: "us15"
          },
          {
            id: uid(),
            name: "usa15",
            state: "notLoaded",
            modelPath: "usa15"
          },
          {
            id: uid(),
            name: "px14",
            state: "notLoaded",
            modelPath: "px14"
          },
          {
            id: uid(),
            name: "px15",
            state: "notLoaded",
            modelPath: "px15"
          },
          {
            id: uid(),
            name: "px16",
            state: "notLoaded",
            modelPath: "px16"
          },
          {
            id: uid(),
            name: "pm15",
            state: "notLoaded",
            modelPath: "pm15",
            nodeEnd: true
          }
        ]
      }
    ]
  }
];

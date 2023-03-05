interface Node {
  title: string;
  pathToModel?: string;
  children?: Node[];
}

export const TREE: Node[] = [
  {
    title: "ATLAS DETECTOR",
    children: [
      {
        title: "MAIN COMPONENT",
        children: [
          {
            title: "MAGNET SYSTEMS",
            children: [
              {
                title: "TOROID",
                children: [
                  {
                    title: "BARREL",
                    children: [
                      {
                        title: "BARREL TOROID",
                        pathToModel: "whatever1",
                      },
                    ],
                  },
                  {
                    title: "END CAP",
                    children: [
                      {
                        title: "SIDE A",
                        children: [
                          {
                            title: "END & TOROID",
                            pathToModel: "whatever",
                          },
                          {
                            title: "TOWER & TURRET",
                            pathToModel: "whatever",
                          },
                        ],
                      },
                      {
                        title: "SIDE C",
                        children: [
                          {
                            title: "END & TOROID",
                            pathToModel: "whatever",
                          },
                          {
                            title: "TOWER & TURRET",
                            pathToModel: "whatever",
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
            title: "INNER DETECTOR",
            children: [
              {
                title: "PIXEL",
                pathToModel: "whatever",
              },
              {
                title: "SCT",
                children: [
                  {
                    title: "BARREL",
                    pathToModel: "whatever",
                  },
                  {
                    title: "END CAP",
                    children: [
                      {
                        title: "SIDE A",
                        pathToModel: "Whatever",
                      },
                      {
                        title: "SIDE C",
                        pathToModel: "Whatever",
                      },
                    ],
                  },
                ],
              },
              {
                title: "TRT",
                children: [
                  {
                    title: "BARREL",
                    pathToModel: "whatever",
                  },
                  {
                    title: "END CAP",
                    children: [
                      {
                        title: "SIDE A",
                        pathToModel: "Whatever",
                      },
                      {
                        title: "SIDE C",
                        pathToModel: "Whatever",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const TREE2 = {
  ATLAS_DETECTOR: {
    MAIN_COMPONENT: {
      MAGNET_SYSTEMS: {
        TOROID: {
          BARREL: {
            BARREL_TOROID: "geometry1",
          },
          ENDCAP: {
            SIDE_A: {
              ENDCAP_TOROID: "geometry2",
              TOWER_AND_TURRET: "geometry3",
            },
            SIDE_C: {
              ENDCAP_TOROID: "geometry4",
              TOWER_AND_TURRET: "geometry5",
            },
          },
        },
      },
    },
    INNER_DETECTOR: {
      PIXEL: "pixel-geo",
      SCT: {
        BARREL: "barel-geo",
        END_CAP: {
          SIDE_A: "sideA",
          SIDE_C: "SideC",
        },
      },
      TRT: {
        BARREL: "barel-geo2",
        END_CAP: {
          SIDE_A: "sideA2",
          SIDE_C: "SideC2",
        },
      },
    },
  },
  SUPPORT_STRUCTURE: {
    MECHANICAL_STRUCTURE: {
      FEET_AND_RAILS: "FEET.geo",
      BT_WARM_STRUCTURE: "Warm.geo",
      HF_TRUCK: {
        SIDE_A: "Side-A.",
        SIDE_C: "Side-C",
      },
    },
  },
};

// export interface ITREE {
//   ATLAS_DETECTOR: {
//     MAIN_COMPONENT: {
//       MAGNET_SYSTEMS: {
//         TOROID: {
//           BARREL: {
//             BARREL_TOROID: string;
//           };
//           ENDCAP: {
//             SIDE_A: {
//               ENDCAP_TOROID: string;
//               TOWER_AND_TURRET: string;
//             };
//             SIDE_C: {
//               ENDCAP_TOROID: string;
//               TOWER_AND_TURRET: string;
//             };
//           };
//         };
//       };
//     };
//     INNER_DETECTOR: {
//       PIXEL: string;
//       SCT: {
//         BARREL: string;
//         END_CAP: {
//           SIDE_A: string;
//           SIDE_C: string;
//         };
//       };
//       TRT: {
//         BARREL: string;
//         END_CAP: {
//           SIDE_A: string;
//           SIDE_C: string;
//         };
//       };
//     };
//   };
//   SUPPORT_STRUCTURE: {
//     MECHANICAL_STRUCTURE: {
//       FEET_AND_RAILS: string;
//       BT_WARM_STRUCTURE: string;
//       HF_TRUCK: {
//         SIDE_A: string;
//         SIDE_C: string;
//       };
//     };
//   };
// }

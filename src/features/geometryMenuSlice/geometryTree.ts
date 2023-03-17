export type GeometryState = "notLoaded" | "partialyLoaded" | "isLoaded";

export interface TreeNode {
  id: string;
  name: string;
  state: GeometryState;
  modelPath?: string;
  showChildren?: boolean;
  children?: TreeNode[];
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
            showChildren: false,
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
                showChildren: false,
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
                    showChildren: false,
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
                    showChildren: false,
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
        name: "support structure",
        state: "notLoaded",
        showChildren: false,
        children: [
          {
            id: generateId(),
            name: "mechanical structure",
            state: "notLoaded",
            showChildren: false,
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
        state: "isLoaded",
        showChildren: true,
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
          },
        ],
      },
    ],
  },
];

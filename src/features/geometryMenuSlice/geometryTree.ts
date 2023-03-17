export type GeometryState = "notLoaded" | "partialyLoaded" | "isLoaded";

export interface TreeNode {
  id: string;
  name: string;
  state: GeometryState;
  modelPath?: string;
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
    children: [
      {
        id: generateId(),
        name: "main components",
        state: "partialyLoaded",
        children: [
          {
            id: generateId(),
            name: "magnet_systems",
            state: "notLoaded",
            children: [],
          },
          {
            id: generateId(),
            name: "inner_detector",
            state: "isLoaded",
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
        children: [],
      },
      {
        id: generateId(),
        name: "cavern",
        state: "notLoaded",
        children: [
          {
            id: generateId(),
            name: "ux15",
            state: "notLoaded",
            modelPath: "abc3",
          },
          {
            id: generateId(),
            name: "ux18",
            state: "notLoaded",
            modelPath: "abc3",
          },
        ],
      },
    ],
  },
];

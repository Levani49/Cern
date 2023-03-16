export type GeometryState = "notLoaded" | "partialyLoaded" | "isLoaded";

export interface Node {
  id: string;
  name: string;
  state: GeometryState;
  modelPath?: string;
  children?: Node[];
}

export interface GeometryTree {
  [key: string]: Node;
}

export type NodeKeys = keyof Node;

export const GEOMETRY_MENU_TREE: GeometryTree = {
  atlas_detector: {
    id: "1",
    name: "atlas detector",
    state: "partialyLoaded",
    children: [
      {
        id: "2",
        name: "main components",
        state: "partialyLoaded",
        children: [
          {
            id: "3",
            name: "magnet_systems",
            state: "notLoaded",
          },
          {
            id: "4",
            name: "inner_detector",
            state: "isLoaded",
            children: [
              {
                id: "5",
                name: "pixel",
                state: "isLoaded",
                modelPath: "abc1",
              },
              {
                id: "6",
                name: "sct",
                state: "isLoaded",
                children: [
                  {
                    id: "7",
                    name: "barrel",
                    state: "isLoaded",
                    modelPath: "abc2",
                  },
                  {
                    id: "8",
                    name: "endcap",
                    state: "isLoaded",
                    children: [
                      {
                        id: "9",
                        name: "side a",
                        state: "isLoaded",
                        modelPath: "abc2",
                      },
                      {
                        id: "10",
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
        id: "11",
        name: "support structure",
        state: "notLoaded",
        children: [],
      },
      {
        id: "12",
        name: "cavern",
        state: "notLoaded",
        children: [
          {
            id: "13",
            name: "ux15",
            state: "notLoaded",
            modelPath: "abc3",
          },
        ],
      },
    ],
  },
};

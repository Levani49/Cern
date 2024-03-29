import { uid } from "#/utils/uid";
import { CAVERN } from "#/constants/tree/cavern/cavern";
import { MAIN_COMPONENTS } from "#/constants/tree/main-components/main-components";
import { SUPPORT_STRUCTURE } from "#/constants/tree/support-structure/supportStructure";

// import { CAVERN } from "#/constants/tree/core/cavern/cavern";
// import { MAIN_COMPONENTS } from "#/constants/tree/core/main-components/main-components";
// import { SUPPORT_STRUCTURE } from "#/constants/tree/core/support-structure/supportStructure";

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
  renderOrder?: number;
}

export const GEOMETRY_MENU_TREE: TreeNode[] = [
  {
    id: uid(),
    name: "atlas detector",
    state: "partialyLoaded",
    showChildren: true,
    root: true,
    children: [MAIN_COMPONENTS, SUPPORT_STRUCTURE, CAVERN],
  },
];

import type { ActiveModel } from "@type/app.types";

import { GeometryState, TreeNode } from "@constants/geometryTree";

type UpdateNodeFunction = (
  node: TreeNode,
  nodeId: string,
  propToChange: string,
  value: string | boolean,
  updateDescendands?: boolean
) => TreeNode;

export function updateNodeAndAncestors(
  tree: TreeNode[],
  nodeId: string,
  modelState: GeometryState
): TreeNode[] {
  const updateNode = (node: TreeNode): TreeNode | null => {
    if (node.id === nodeId) {
      return { ...node, state: modelState };
    }

    if (node.children) {
      const updatedChildren = node.children
        .map(updateNode)
        .filter(Boolean) as TreeNode[];

      if (updatedChildren.length > 0) {
        const newChildren = node.children.map((child) => {
          const updatedChild = updatedChildren.find(
            (updated) => updated.id === child.id
          );
          return updatedChild ? updatedChild : child;
        });

        const childrenStates = newChildren.map((child) => child.state);
        const allLoaded = childrenStates.every((state) => state === "isLoaded");
        const someLoaded = childrenStates.some((state) => state === "isLoaded");
        const allNotLoaded = childrenStates.every(
          (state) => state === "notLoaded"
        );
        const somePartial = childrenStates.some(
          (state) => state === "partialyLoaded"
        );

        let updatedState = node.state;

        if (allLoaded) {
          updatedState = "isLoaded";
        } else if (someLoaded || somePartial) {
          updatedState = "partialyLoaded";
        } else if (allNotLoaded) {
          updatedState = "notLoaded";
        }

        return { ...node, state: updatedState, children: newChildren };
      }
    }

    return null;
  };

  return tree.map((node) => updateNode(node) || node);
}

const updateDescendandNodes = (
  node: TreeNode,
  propToChange: string,
  value: string | boolean
): TreeNode => {
  if (node.children) {
    return {
      ...node,
      [propToChange]: value,
      children: node.children.map((node) =>
        updateDescendandNodes(node, propToChange, value)
      )
    };
  } else {
    return {
      ...node,
      [propToChange]: value
    };
  }
};

export const updateParentNode: UpdateNodeFunction = (
  node,
  nodeId,
  propToChange,
  modelState,
  updateDescendands
): TreeNode => {
  if (node.id === nodeId) {
    if (updateDescendands) {
      // Found the node with the matching ID, update its descendants
      const updatedNode = {
        ...node,
        [propToChange]: modelState,
        children: node.children
          ? node.children.map((node) =>
              updateDescendandNodes(node, propToChange, modelState)
            )
          : []
      };
      return updatedNode;
    } else {
      // Found the node with the matching ID, update its descendants
      const updatedNode = {
        ...node,
        [propToChange]: modelState,
        children: node.children
          ? node.children.map((node) =>
              updateParentNode(
                node,
                nodeId,
                propToChange,
                modelState,
                updateDescendands
              )
            )
          : []
      };
      return updatedNode;
    }
  } else if (node.children) {
    // Node does not have the matching ID, update its children
    return {
      ...node,
      children: node.children.map((node) =>
        updateParentNode(
          node,
          nodeId,
          propToChange,
          modelState,
          updateDescendands
        )
      )
    };
  } else {
    // Node does not have children, return it without any changes
    return node;
  }
};

export const updateChildNode: UpdateNodeFunction = (
  node,
  nodeId,
  propToChange,
  modelState
): TreeNode => {
  if (node.children) {
    return {
      ...node,
      children: node.children.map((node) =>
        updateChildNode(node, nodeId, propToChange, modelState)
      )
    };
  }

  if (node.id === nodeId) {
    return {
      ...node,
      [propToChange]: modelState
    };
  }
  return node;
};

export function updateActiveModels(tree: TreeNode[]): ActiveModel[] {
  const activeModels: ActiveModel[] = [];

  function traverse(node: TreeNode): void {
    if (node.children) {
      node.children.forEach((child) => traverse(child));
    }

    if (node.state === "isLoaded") {
      if (node.modelPath) {
        activeModels.push({
          uid: node.id,
          name: node.name,
          modelPath: node.modelPath
        });
      }
    }
  }

  tree.forEach((node) => traverse(node));
  return activeModels;
}

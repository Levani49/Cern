import { memo } from "react";

import { TreeNode } from "#/constants/geometryTree";

import ChildNode from "../childNode/ChildNode";
import ParentNode from "../parentNode/ParentNode";

interface Props {
  tree: TreeNode[];
}

const RecursiveTree = memo(
  function RecursiveT({ tree }: Props) {
    if (!tree) {
      return <></>;
    }

    const elements = tree.map((node: TreeNode): JSX.Element => {
      const { id, name, state, showChildren, root, nodeEnd } = node;
      if (!node.children) {
        return (
          <ChildNode
            key={id}
            uid={id}
            name={name}
            modelState={state}
            nodeEnd={nodeEnd}
          />
        );
      } else {
        const show = showChildren ? (showChildren === true ? true : false) : false;
        return (
          <ParentNode
            key={id}
            uid={id}
            name={name}
            modelState={state}
            showChildren={show}
            root={root}
            nodeEnd={nodeEnd}
          >
            <RecursiveTree tree={node.children} />
          </ParentNode>
        );
      }
    });

    return <>{elements}</>;
  },
  (prevProps, nextProps) => {
    return prevProps.tree === nextProps.tree;
  }
);

export default RecursiveTree;

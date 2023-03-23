import { TreeNode } from "../../features/geometryMenuSlice/geometryTree";
import ChildNode from "./ChildNode.component";
import ParentNode from "./ParentNode.component";

interface Props {
  tree: TreeNode[];
}

/**
 *
 * @param root0
 * @param root0.tree
 * @param root0.state
 */
export default function RecursiveTree({ tree }: Props): JSX.Element {
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
      const show = showChildren
        ? showChildren === true
          ? true
          : false
        : false;
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
}

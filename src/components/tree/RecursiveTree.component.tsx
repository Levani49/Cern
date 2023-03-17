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
    const { id, name, state } = node;
    if (!node.children) {
      return <ChildNode key={id} uid={id} name={name} modelState={state} />;
    } else {
      return (
        <ParentNode key={id} uid={id} name={name} modelState={state}>
          <RecursiveTree tree={node.children} />
        </ParentNode>
      );
    }
  });

  return <ul className="select-none">{elements}</ul>;
}

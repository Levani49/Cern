import { GeometryTree } from "../../features/geometryMenuSlice/geometryTree";
import ChildNode from "./ChildNode.component";
import ParentNode from "./ParentNode.component";

interface Props {
  tree: GeometryTree;
}

/**
 *
 * @param root0
 * @param root0.tree
 * @param root0.state
 */
export default function RecursiveTree({ tree }: Props): JSX.Element {
  const elements = Object.keys(tree).map((key: string): JSX.Element => {
    const node = tree[key];

    if (!node.children) {
      return (
        <ChildNode
          key={`${node.name}-${node.id}`}
          uid={node.id}
          name={node.name}
          modelState={node.state}
        />
      );
    } else {
      return (
        <ParentNode
          key={`${node.name}-${node.id}`}
          uid={node.id}
          name={node.name}
          modelState={node.state}
        >
          <RecursiveTree tree={node.children as unknown as GeometryTree} />
        </ParentNode>
      );
    }
  });

  return <ul>{elements}</ul>;
}

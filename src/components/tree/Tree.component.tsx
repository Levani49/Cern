import { useAppSelector } from "../../app/hooks";
import { selectGeometryTree } from "../../features/geometryMenuSlice/geometryMenuSlice";
import RecursiveTree from "./RecursiveTree.component";

/**
 *
 * @param root0
 * @param root0.tree
 */
export default function Tree(): JSX.Element {
  const GeometriesTree = useAppSelector(selectGeometryTree);

  return <RecursiveTree tree={GeometriesTree} />;
}

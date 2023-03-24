import { useMemo } from "react";
import { useAppSelector } from "../../app/hooks";
import {
  selectGeometryTree,
  selectLoadingState,
} from "../../features/geometryMenuSlice/geometryMenuSlice";
import RecursiveTree from "./RecursiveTree.component";

export default function Tree(): JSX.Element {
  const isLoading = useAppSelector(selectLoadingState);
  const geometryTree = useAppSelector(selectGeometryTree);

  const disablePointerEvents =
    isLoading === "loading" ? "pointer-events-none" : null;

  const GeometriesTree = useMemo(() => {
    return <RecursiveTree tree={geometryTree} />;
  }, [geometryTree]);

  return (
    <ul
      className={`select-none overflow-y-auto h-[60%] ${disablePointerEvents}`}
    >
      {GeometriesTree}
    </ul>
  );
}

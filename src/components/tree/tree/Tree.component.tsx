import { useMemo } from "react";

import { useAppSelector } from "@store/hooks";

import { selectModelsLoadingState } from "@features/model/modelSlice";
import { selectGeometryMenu, selectGeometryTree } from "@features/tree/treeSlice";

import RecursiveTree from "../recursiveTree/RecursiveTree.component";

export default function Tree(): JSX.Element {
  const isLoading = useAppSelector(selectModelsLoadingState);
  const geometryTree = useAppSelector(selectGeometryTree);
  const showGeometryMenu = useAppSelector(selectGeometryMenu);

  const disablePointerEvents = isLoading === "loading" ? "pointer-events-none" : null;

  const GeometriesTree = useMemo(() => {
    return <RecursiveTree tree={geometryTree} />;
  }, [geometryTree]);

  return (
    <>
      {showGeometryMenu && (
        <ul className={`select-none ${disablePointerEvents}`}>{GeometriesTree}</ul>
      )}
    </>
  );
}

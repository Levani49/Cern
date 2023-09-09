import { useEffect, useMemo } from "react";

import {
  selectModelsLoadingState,
  updateModelsLoadingState,
} from "#/store/features/modelSlice";
import { selectGeometryMenu, selectGeometryTree } from "#/store/features/treeSlice";
import { useAppDispatch, useAppSelector } from "#/store/hooks";
import useLoadingStatus from "#/hooks/useLoading";

import RecursiveTree from "../recursiveTree/RecursiveTree.component";

export default function Tree() {
  const dispatch = useAppDispatch();
  const { isLoading, isLoaded } = useLoadingStatus();
  const loadedStatus = useAppSelector(selectModelsLoadingState);
  const geometryTree = useAppSelector(selectGeometryTree);
  const showGeometryMenu = useAppSelector(selectGeometryMenu);

  useEffect(() => {
    if (isLoading) {
      dispatch(updateModelsLoadingState("loading"));
    } else if (isLoaded) {
      dispatch(updateModelsLoadingState("idle"));
    }
  }, [isLoading, isLoaded, dispatch]);

  const disablePointerEvents =
    loadedStatus === "loading" ? "pointer-events-none" : null;

  const GeometriesTree = useMemo(() => {
    return <RecursiveTree tree={geometryTree} />;
  }, [geometryTree]);

  return (
    <div
      id="geometry-tree"
      className="absolute top-20 z-20 max-h-[80%]  overflow-y-auto bg-transparent"
    >
      {showGeometryMenu && (
        <ul className={`select-none ${disablePointerEvents}`}>{GeometriesTree}</ul>
      )}
    </div>
  );
}

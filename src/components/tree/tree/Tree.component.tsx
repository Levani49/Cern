import { useEffect, useMemo } from "react";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import {
  selectModelsLoadingState,
  updateModelsLoadingState
} from "@features/model/modelSlice";
import { selectGeometryMenu, selectGeometryTree } from "@features/tree/treeSlice";

import useLoadingStatus from "@hooks/useLoading/useLoading";

import RecursiveTree from "../recursiveTree/RecursiveTree.component";

export default function Tree(): JSX.Element {
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
    <>
      {showGeometryMenu && (
        <ul className={`select-none ${disablePointerEvents}`}>{GeometriesTree}</ul>
      )}
    </>
  );
}

import { useMemo } from "react";

import { useAppSelector } from "@store/hooks";

import { selectGeometriesCutType, selectLocalGeometryCutType } from "@features/model/modelSlice";
import { selectActiveGeometries } from "@features/tree/treeSlice";

import type { UseDetectorState } from "./useDetectorState.types";

export function useDetectorState(): UseDetectorState {
  const models = useAppSelector(selectActiveGeometries);
  const cutType = useAppSelector(selectGeometriesCutType);
  const localCutType = useAppSelector(selectLocalGeometryCutType);

  return useMemo(
    () => ({
      models,
      cutType,
      localCutType
    }),
    [models, cutType, localCutType]
  );
}

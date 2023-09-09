import { useMemo } from "react";

import type { ActiveModel, ModelCut } from "#/types/app.types";
import { useAppSelector } from "#/store/hooks";
import {
  selectGeometriesCutType,
  selectLocalGeometryCutType,
} from "#/features/model/modelSlice";
import { selectActiveGeometries } from "#/features/tree/treeSlice";

export function useDetectorState(): UseDetectorState {
  const models = useAppSelector(selectActiveGeometries);
  const cutType = useAppSelector(selectGeometriesCutType);
  const localCutType = useAppSelector(selectLocalGeometryCutType);

  return useMemo(
    (): UseDetectorState => ({
      models,
      cutType,
      localCutType,
    }),
    [models, cutType, localCutType]
  );
}

interface UseDetectorState {
  models: ActiveModel[];
  cutType: ModelCut;
  localCutType: ModelCut;
}

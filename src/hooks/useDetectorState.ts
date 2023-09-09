import { useMemo } from "react";

import type { ActiveModel, ModelCut } from "#/types/app.types";
import {
  selectGeometriesCutType,
  selectLocalGeometryCutType,
} from "#/store/features/modelSlice";
import { selectActiveGeometries } from "#/store/features/treeSlice";
import { useAppSelector } from "#/store/hooks";

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

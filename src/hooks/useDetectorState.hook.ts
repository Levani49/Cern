import { useMemo } from "react";
import { useAppSelector } from "../app/hooks";

import {
  selectActiveGeometries,
  selectGeometriesCutType,
  type ActiveModel,
  type ModelCut,
} from "../features/geometryMenuSlice/geometryMenuSlice";

interface UseDetectorState {
  models: ActiveModel[];
  modelCut: ModelCut;
}

export function useDetectorState(): UseDetectorState {
  const models = useAppSelector(selectActiveGeometries);
  const modelCut = useAppSelector(selectGeometriesCutType);

  return useMemo(
    () => ({
      models,
      modelCut,
    }),
    [models, modelCut],
  );
}

import { useMemo } from "react";
import { useAppSelector } from "../app/hooks";

import {
  selectActiveGeometries,
  selectGeometriesCutType,
} from "../features/geometryMenuSlice/geometryMenuSlice";

import type { ModelCut, ActiveModel } from "../types/app.types";

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

import { useMemo } from 'react';
import { useAppSelector } from '../../app/hooks';

import { selectActiveGeometries } from '../../features/tree/treeSlice';
import { selectGeometriesCutType } from '../../features/global/globalsSlice';

import type { ModelCut, ActiveModel } from '../../types/app.types';

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

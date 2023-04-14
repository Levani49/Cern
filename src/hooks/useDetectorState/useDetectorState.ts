import { useMemo } from 'react';
import { useAppSelector } from '../../app/hooks';

import { selectActiveGeometries } from '../../features/tree/treeSlice';
import { selectGeometriesCutType } from '../../features/model/modelSlice';

import type { UseDetectorState } from './useDetectorState.types';

export function useDetectorState(): UseDetectorState {
  const models = useAppSelector(selectActiveGeometries);
  const cutType = useAppSelector(selectGeometriesCutType);

  return useMemo(
    () => ({
      models,
      cutType,
    }),
    [models, cutType],
  );
}

import { useMemo } from 'react';
import { useAppSelector } from '../../app/hooks';

import { selectActiveGeometries } from '../../features/tree/treeSlice';
import {
  selectGeometriesCutType,
  selectLocalGeometryCutType,
} from '../../features/model/modelSlice';

import type { UseDetectorState } from './useDetectorState.types';

export function useDetectorState(): UseDetectorState {
  const models = useAppSelector(selectActiveGeometries);
  const cutType = useAppSelector(selectGeometriesCutType);
  const localCutType = useAppSelector(selectLocalGeometryCutType);

  return useMemo(
    () => ({
      models,
      cutType,
      localCutType,
    }),
    [models, cutType, localCutType],
  );
}

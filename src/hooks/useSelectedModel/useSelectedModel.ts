import { useMemo } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectGlobalOpacity, selectGlobalWireframe } from '../../features/global/globalsSlice';
import {
  selectSelectedModel,
  selectModelsOpacity,
  selectModelWireframe,
  selectLocalGeometryCutType,
} from '../../features/model/modelSlice';
import type { UseSelectedModel } from './useSelectedModel.types';

export default function useSelectedModel(): UseSelectedModel {
  const {
    cutType,
    selectedModel,
    modelOpacityLevel,
    globalOpacityLevel,
    modelWireframe,
    globalWireframe,
  } = useAppSelector((state) => ({
    selectedModel: selectSelectedModel(state),
    modelOpacityLevel: selectModelsOpacity(state),
    globalOpacityLevel: selectGlobalOpacity(state),
    modelWireframe: selectModelWireframe(state),
    globalWireframe: selectGlobalWireframe(state),
    cutType: selectLocalGeometryCutType(state),
  }));

  return useMemo(
    () => ({
      selectedModel,
      modelOpacityLevel,
      globalOpacityLevel,
      modelWireframe,
      globalWireframe,
      cutType,
    }),
    [
      cutType,
      selectedModel,
      modelOpacityLevel,
      globalOpacityLevel,
      modelWireframe,
      globalWireframe,
    ],
  );
}

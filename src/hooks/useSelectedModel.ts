import { useMemo } from "react";

import type { ModelCut, selectedModel } from "#/types/app.types";
import {
  selectGlobalOpacity,
  selectGlobalWireframe,
} from "#/store/features/globalsSlice";
import {
  selectLocalGeometryCutType,
  selectModelsOpacity,
  selectModelWireframe,
  selectSelectedModel,
} from "#/store/features/modelSlice";
import { useAppSelector } from "#/store/hooks";

export default function useSelectedModel(): UseSelectedModel {
  const selectedModel = useAppSelector(selectSelectedModel);
  const modelOpacityLevel = useAppSelector(selectModelsOpacity);
  const globalOpacityLevel = useAppSelector(selectGlobalOpacity);
  const modelWireframe = useAppSelector(selectModelWireframe);
  const globalWireframe = useAppSelector(selectGlobalWireframe);
  const cutType = useAppSelector(selectLocalGeometryCutType);

  return useMemo(
    (): UseSelectedModel => ({
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
    ]
  );
}

interface UseSelectedModel {
  selectedModel: selectedModel;
  modelOpacityLevel: number;
  globalOpacityLevel: number;
  modelWireframe: boolean;
  globalWireframe: boolean;
  cutType: ModelCut;
}

import type { ModelCut, ActiveModel } from '../../types/app.types';

export interface UseDetectorState {
  models: ActiveModel[];
  modelCut: ModelCut;
}

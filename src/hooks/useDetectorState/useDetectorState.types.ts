import type { ActiveModel, ModelCut } from "@type/app.types";

export interface UseDetectorState {
  models: ActiveModel[];
  cutType: ModelCut;
  localCutType: ModelCut;
}

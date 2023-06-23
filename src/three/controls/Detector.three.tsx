import { useEffect, useState } from "react";

import { ActiveModel, ModelCut } from "@type/app.types";

import { useAppSelector } from "@store/hooks";

import { selectSelectedModel } from "@features/model/modelSlice";

import Model from "@three/model/Model.three";

import { useDetectorState } from "@hooks/useDetectorState/useDetectorState";

interface LocalModel extends ActiveModel {
  cutType: ModelCut;
}

export default function Detector(): JSX.Element {
  const [localModels, setLocalModels] = useState<LocalModel[]>([]);
  const { models, cutType, localCutType } = useDetectorState();
  const selectedModel = useAppSelector(selectSelectedModel);

  useEffect(() => {
    const activeModels = models
      .filter((model) => model.modelPath !== "nan")
      .map((model: ActiveModel): LocalModel => {
        // Check if a model with the same ID exists in localModels
        const existingLocalModel = localModels.find(
          (localModel) => localModel.uid === model.uid
        );

        if (existingLocalModel) {
          // If found, return the existing localModel
          return existingLocalModel;
        } else {
          // Otherwise, return the new model with the cutType
          return {
            ...model,
            cutType
          };
        }
      });

    setLocalModels(activeModels);
  }, [models]);

  useEffect(() => {
    if (localModels.length) {
      const updatedLocalModels = localModels.map((model: LocalModel): LocalModel => {
        let modelCutType;

        if (selectedModel) {
          modelCutType =
            selectedModel?.id === model.uid ? localCutType : model.cutType;
        } else {
          modelCutType = cutType;
        }

        return {
          ...model,
          cutType: modelCutType
        };
      });

      setLocalModels(updatedLocalModels);
    }
  }, [cutType, localCutType]);

  const activeModels = localModels.map((model: LocalModel): JSX.Element => {
    const { modelPath, uid, name, cutType: modelCutType } = model;
    const path = modelCutType ? modelPath + modelCutType : modelPath;

    return (
      <Model key={uid} cutType={modelCutType} src={path} name={name} id={uid} />
    );
  });

  return <>{activeModels}</>;
}

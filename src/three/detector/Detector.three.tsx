import { Suspense, useEffect, useState } from "react";

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
        const existingLocalModel = localModels.find(
          (localModel) => localModel.uid === model.uid
        );

        if (existingLocalModel) {
          return existingLocalModel;
        } else {
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

  return (
    <>
      {localModels.map((model: LocalModel): JSX.Element => {
        const { modelPath, uid, name, cutType: modelCutType } = model;
        const path = modelCutType ? modelPath + modelCutType : modelPath;

        return (
          <Suspense key={uid} fallback={null}>
            <Model cutType={modelCutType} src={path} name={name} id={uid} />
          </Suspense>
        );
      })}
    </>
  );
}

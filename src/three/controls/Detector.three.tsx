import { useEffect, useState } from "react";

import { selectSelectedModel } from "../../features/model/modelSlice";
import { useDetectorState } from "../../hooks/useDetectorState/useDetectorState";
import { useAppSelector } from "../../store/hooks";
import { ActiveModel, ModelCut } from "../../types/app.types";
import Model from "../model/Model.three";

interface LocalModel extends ActiveModel {
  cutType: ModelCut;
}

/**
 * Detector
 *
 * @returns { JSX.Element } JSX.Element
 */
export default function Detector(): JSX.Element {
  const { models, cutType, localCutType } = useDetectorState();
  const selectedModel = useAppSelector(selectSelectedModel);
  const [localModels, setLocalModels] = useState<LocalModel[]>([]);

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
      const activeModels = localModels.map((model: LocalModel): LocalModel => {
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
      setLocalModels(activeModels);
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

/* 

interface LocalModelProps {
  key: string;
  cutType: ModelCut;
  src: string;
  name: string;
  id: string;
}

export default function Detector(): JSX.Element {
  const { models, cutType } = useDetectorState();
  const [localeModels, setLocaleModels] = useState<LocalModelProps[]>([]);
  const selectedModel = useAppSelector(selectSelectedModel)
  const [localCutType, setLocalCutType] = useState<ModelCut>(cutType)

  useEffect(() => {
    const activeModels = models
      .filter((model) => model.modelPath !== 'nan')
      .map((model) => {
        const { modelPath, uid, name } = model;
        const path = modelPath + cutType;

        return {
          key: uid,
          cutType: cutType,
          src: path,
          name: name,
          id: uid
        }

      });

    setLocaleModels(activeModels)

  }, [models, selectedModel])

  const activeModels = localeModels.map((model) => {
    const { key, cutType, src, name, id } = model;

    return (
      <Model
        key={key}
        cutType={cutType}
        src={src}
        name={name}
        id={id}
      />
    );
  });

  return <>{activeModels}</>;
};

*/

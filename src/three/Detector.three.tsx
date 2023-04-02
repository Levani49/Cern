import { memo } from 'react';

import { useDetectorState } from '../hooks/useDetectorState/useDetectorState';

import Model from './Model.three';

/**
 * Detector
 *
 * @returns { JSX.Element } JSX.Element
 */
const Detector = memo(function Detector(): JSX.Element {
  const { models, modelCut } = useDetectorState();

  const activeModels = models
    .filter((model) => model.modelPath !== 'nan')
    .map((model) => {
      const { modelPath, uid, name } = model;
      const path = modelCut ? modelPath + modelCut : modelPath;

      return <Model key={`${uid}${name}${modelCut}`} src={path} name={modelPath} id={uid} />;
    });

  return <>{activeModels}</>;
});

export default Detector;

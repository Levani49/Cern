// import { useAppSelector } from '../app/hooks';
// import { selectSelectedModel } from '../features/model/modelSlice';
import { useDetectorState } from '../hooks/useDetectorState/useDetectorState';
import Model from './Model.three';

/**
 * Detector
 *
 * @returns { JSX.Element } JSX.Element
 */
export default function Detector(): JSX.Element {
  const { models, cutType } = useDetectorState();
  // const selectedModel = useAppSelector(selectSelectedModel)

  const activeModels = models
    .filter((model) => model.modelPath !== 'nan')
    .map((model) => {
      const { modelPath, uid, name } = model;
      const path = cutType ? modelPath + cutType : modelPath;

      return <Model key={uid} cutType={cutType} src={path} name={name} id={uid} />;
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

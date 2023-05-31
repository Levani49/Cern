import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectModelModal, setModelModal } from '../../../features/model/modelSlice';
import useSelectedModel from '../../../hooks/useSelectedModel/useSelectedModel';
import Modal from '../Modal.component';
import ModelAttribute from './ModelAttribute.component';

export default function ModelInfo(): JSX.Element {
  const dispatch = useAppDispatch();

  const show = useAppSelector(selectModelModal);
  const { selectedModel, modelOpacityLevel, modelWireframe } = useSelectedModel();

  const handleClick = (): void => {
    dispatch(setModelModal(false));
  };

  return (
    <Modal title="model info" show={show} onCloseHandler={handleClick}>
      <div className="flex justify-center flex-col">
        <ModelAttribute title="name" value={selectedModel?.name} />
        <ModelAttribute title="cut type" value={selectedModel?.cutType?.replace('-', '')} />
        <ModelAttribute title="opacity" value={modelOpacityLevel} />
        <ModelAttribute title="wireframe" value={modelWireframe === true ? 'true' : 'false'} />
      </div>
    </Modal>
  );
}

import { ReactComponent as WireframeIcon } from '../../../assets/svg/wireframe.svg';

import { selectGlobalWireframe, setGlobalWireframe } from '../../../features/global/globalsSlice';
import {
  selectModelWireframe,
  selectSelectedModel,
  setModelWireframe,
} from '../../../features/model/modelSlice';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';

import NavIcon from '../navIcon/navIcon.component';

export default function WireframeMenu(): JSX.Element {
  const dispatch = useAppDispatch();

  const { globalWireframe, modelWireframe, isModelSelected } = useAppSelector((state) => ({
    globalWireframe: selectGlobalWireframe(state),
    modelWireframe: selectModelWireframe(state),
    isModelSelected: selectSelectedModel(state),
  }));

  const handleModelWireframe = (): void => {
    dispatch(setModelWireframe(!modelWireframe));
  };

  const handleGlobalWireframe = (): void => {
    dispatch(setGlobalWireframe(!globalWireframe));
  };

  const wireframe = isModelSelected ? modelWireframe : globalWireframe;

  const onClickhandler = isModelSelected ? handleModelWireframe : handleGlobalWireframe;

  return (
    <NavIcon
      onClick={onClickhandler}
      Icon={WireframeIcon}
      title="Toggle Geometry Wireframe"
      active={wireframe}
    />
  );
}

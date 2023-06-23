import { ReactComponent as WireframeIcon } from "@assets/svg/wireframe.svg";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import {
  selectGlobalWireframe,
  setGlobalWireframe
} from "@features/global/globalsSlice";
import {
  selectModelWireframe,
  selectSelectedModel,
  setModelWireframe
} from "@features/model/modelSlice";

import NavIcon from "../navIcon/navIcon";

export default function WireframeMenu(): JSX.Element {
  const dispatch = useAppDispatch();

  const globalWireframe = useAppSelector(selectGlobalWireframe);
  const modelWireframe = useAppSelector(selectModelWireframe);
  const isModelSelected = useAppSelector(selectSelectedModel);

  const handleModelWireframe = (): void => {
    dispatch(setModelWireframe(!modelWireframe));
  };

  const handleGlobalWireframe = (): void => {
    dispatch(setGlobalWireframe(!globalWireframe));
  };

  const wireframe = isModelSelected ? modelWireframe : globalWireframe;

  const onClickhandler = isModelSelected
    ? handleModelWireframe
    : handleGlobalWireframe;

  return (
    <NavIcon
      onClick={onClickhandler}
      Icon={WireframeIcon}
      title="Toggle Geometry Wireframe"
      active={wireframe}
    />
  );
}

import { ReactComponent as WireframeIcon } from "../../assets/svg/wireframe.svg";

import MenuIcon from "./MenuIcon.component";

import {
  selectGlobalWireframe,
  selectModelWireframe,
  selectSelectedModel,
  setGlobalWireframe,
  setModelWireframe,
} from "../../features/geometryMenuSlice/geometryMenuSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export default function WireframeMenu(): JSX.Element {
  const dispatch = useAppDispatch();

  const { globalWireframe, modelWireframe, isModelSelected } = useAppSelector(
    (state) => ({
      globalWireframe: selectGlobalWireframe(state),
      modelWireframe: selectModelWireframe(state),
      isModelSelected: selectSelectedModel(state),
    }),
  );

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
    <MenuIcon
      onClick={onClickhandler}
      Icon={WireframeIcon}
      title="Wireframe of geometry"
      active={wireframe}
    />
  );
}

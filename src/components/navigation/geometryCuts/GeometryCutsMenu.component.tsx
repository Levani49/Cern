import { ReactComponent as GeometryCoreIcon } from "../../../assets/svg/geometry-core.svg";
import { ReactComponent as LeftWallIcon } from "../../../assets/svg/left-wall.svg";
import { ReactComponent as RightWallIcon } from "../../../assets/svg/right-wall.svg";
import { ReactComponent as ScissorIcon } from "../../../assets/svg/scissor.svg";
import { ReactComponent as StairsIcon } from "../../../assets/svg/stairs.svg";
import {
  selectGeometriesCutType,
  selectLocalGeometryCutType,
  selectSelectedModel,
  updateLocalModelCut,
  updateModelCut
} from "../../../features/model/modelSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import type { ModelCut } from "../../../types/app.types";
import MenuDropdown from "../dropdown/MenuDropdown.component";
import NavIcon from "../navIcon/navIcon";

export default function GeometryCutsMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const cutType = useAppSelector(selectGeometriesCutType);
  const localCutType = useAppSelector(selectLocalGeometryCutType);
  const selectedModel = useAppSelector(selectSelectedModel);

  const onClickHandler = (modelCut: ModelCut): void => {
    if (selectedModel) {
      if (localCutType === modelCut) {
        dispatch(updateLocalModelCut(null));
      } else {
        dispatch(updateLocalModelCut(modelCut));
      }
    } else {
      if (cutType === modelCut) {
        dispatch(updateModelCut(null));
      } else {
        dispatch(updateModelCut(modelCut));
      }
    }
  };

  let Icon;

  if (selectedModel) {
    Icon =
      localCutType === "-cut1"
        ? LeftWallIcon
        : localCutType === "-cut2"
        ? RightWallIcon
        : localCutType === "-cut3"
        ? StairsIcon
        : localCutType === "-cut4"
        ? GeometryCoreIcon
        : ScissorIcon;
  } else {
    Icon =
      cutType === "-cut1"
        ? LeftWallIcon
        : cutType === "-cut2"
        ? RightWallIcon
        : cutType === "-cut3"
        ? StairsIcon
        : cutType === "-cut4"
        ? GeometryCoreIcon
        : ScissorIcon;
  }

  return (
    <div className="group inline-flex">
      <NavIcon Icon={Icon} title="Geometry Cut Options" active />
      <MenuDropdown>
        <NavIcon
          Icon={LeftWallIcon}
          title="1'st cut"
          onClick={(): void => onClickHandler("-cut1")}
        />
        <NavIcon
          Icon={RightWallIcon}
          title="2'nd cut"
          onClick={(): void => onClickHandler("-cut2")}
        />
        <NavIcon
          Icon={StairsIcon}
          title="3'rd cut"
          onClick={(): void => onClickHandler("-cut3")}
        />
        <NavIcon
          Icon={GeometryCoreIcon}
          title="full cut"
          onClick={(): void => onClickHandler("-cut4")}
        />
        <NavIcon
          Icon={ScissorIcon}
          title="Cutom cut"
          onClick={(): void => onClickHandler(null)}
        />
      </MenuDropdown>
    </div>
  );
}

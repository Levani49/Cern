import { ReactComponent as ScissorIcon } from '../../assets/svg/scissor.svg';
import { ReactComponent as LeftWallIcon } from '../../assets/svg/left-wall.svg';
import { ReactComponent as RightWallIcon } from '../../assets/svg/right-wall.svg';
import { ReactComponent as StairsIcon } from '../../assets/svg/stairs.svg';
import { ReactComponent as GeometryCoreIcon } from '../../assets/svg/geometry-core.svg';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectGeometriesCutType,
  selectLocalGeometryCutType,
  selectSelectedModel,
  updateLocalModelCut,
  updateModelCut,
} from '../../features/model/modelSlice';

import MenuIcon from './MenuIcon.component';
import MenuDropdown from './MenuDropdown.component';

import type { ModelCut } from '../../types/app.types';

/**
 * Renders a GeometryCutsMenu component that displays a dropdown menu of geometry cut options.
 *
 * @function
 * @name GeometryCutsMenu
 * @returns {JSX.Element} - A JSX element representing the GeometryCutsMenu component.
 */
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
      localCutType === '-cut1'
        ? LeftWallIcon
        : localCutType === '-cut2'
        ? RightWallIcon
        : localCutType === '-cut3'
        ? StairsIcon
        : localCutType === '-cut4'
        ? GeometryCoreIcon
        : ScissorIcon;
  } else {
    Icon =
      cutType === '-cut1'
        ? LeftWallIcon
        : cutType === '-cut2'
        ? RightWallIcon
        : cutType === '-cut3'
        ? StairsIcon
        : cutType === '-cut4'
        ? GeometryCoreIcon
        : ScissorIcon;
  }

  return (
    <div className="inline-flex group">
      <MenuIcon
        Icon={Icon}
        title="Provides different type of cuts for geometry"
        active
      />
      <MenuDropdown>
        <MenuIcon
          Icon={LeftWallIcon}
          title="1'st cut"
          onClick={(): void => onClickHandler('-cut1')}
        />
        <MenuIcon
          Icon={RightWallIcon}
          title="2'nd cut"
          onClick={(): void => onClickHandler('-cut2')}
        />
        <MenuIcon
          Icon={StairsIcon}
          title="3'rd cut"
          onClick={(): void => onClickHandler('-cut3')}
        />
        <MenuIcon
          Icon={GeometryCoreIcon}
          title="full cut"
          onClick={(): void => onClickHandler('-cut4')}
        />
        <MenuIcon
          Icon={ScissorIcon}
          title="Cutom cut"
          onClick={(): void => onClickHandler(null)}
        />
      </MenuDropdown>
    </div>
  );
}

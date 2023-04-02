/* eslint-disable */
import { ReactComponent as ScissorIcon } from '../../assets/svg/scissor.svg';
import { ReactComponent as LeftWallIcon } from '../../assets/svg/left-wall.svg';
import { ReactComponent as RightWallIcon } from '../../assets/svg/right-wall.svg';
import { ReactComponent as StairsIcon } from '../../assets/svg/stairs.svg';
import { ReactComponent as GeometryCoreIcon } from '../../assets/svg/geometry-core.svg';

import MenuIcon from './MenuIcon.component';
import MenuDropdown from './MenuDropdown.component';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectGeometriesCutType, updateModelCut } from '../../features/model/modelSlice';

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

  const onClickHandler = (modelCut: ModelCut) => {
    if (cutType === modelCut) {
      dispatch(updateModelCut(null));
    } else {
      dispatch(updateModelCut(modelCut));
    }
  };

  return (
    <div className="inline-flex group">
      <MenuIcon Icon={StairsIcon} title="Provides different type of cuts for geometry" active />
      <MenuDropdown>
        <MenuIcon Icon={LeftWallIcon} title="1'st cut" onClick={() => onClickHandler('-cut1')} />
        <MenuIcon Icon={RightWallIcon} title="2'st cut" onClick={() => onClickHandler('-cut2')} />
        <MenuIcon Icon={StairsIcon} title="3'st cut" onClick={() => onClickHandler('-cut3')} />
        <MenuIcon
          Icon={GeometryCoreIcon}
          title="full cut"
          onClick={() => onClickHandler('-cut4')}
        />
        <MenuIcon Icon={ScissorIcon} title="Cutom cut" onClick={() => onClickHandler(null)} />
      </MenuDropdown>
    </div>
  );
}

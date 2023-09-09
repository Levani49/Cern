import { useState } from "react";

import type { ModelCut } from "#/types/app.types";
import { ReactComponent as GeometryCoreIcon } from "#/assets/svg/geometry-core.svg";
import { ReactComponent as LeftWallIcon } from "#/assets/svg/left-wall.svg";
import { ReactComponent as RightWallIcon } from "#/assets/svg/right-wall.svg";
import { ReactComponent as ScissorIcon } from "#/assets/svg/scissor.svg";
import { ReactComponent as StairsIcon } from "#/assets/svg/stairs.svg";
import { useAppDispatch, useAppSelector } from "#/store/hooks";
import {
  selectClippingPlanesNormal,
  selectGeometriesCutType,
  selectLocalGeometryCutType,
  selectSelectedModel,
  setClippingPlanesNormal,
  updateLocalModelCut,
  updateModelCut,
} from "#/features/model/modelSlice";

import MenuDropdown from "../dropdown/MenuDropdown.component";
import NavIcon from "../navIcon/navIcon";

export default function GeometryCutsMenu() {
  const dispatch = useAppDispatch();
  const cutType = useAppSelector(selectGeometriesCutType);
  const localCutType = useAppSelector(selectLocalGeometryCutType);
  const selectedModel = useAppSelector(selectSelectedModel);
  const clippingPlanesVal = useAppSelector(selectClippingPlanesNormal);
  const [visible, setVisible] = useState(false);

  const switchExpression = selectedModel ? localCutType : cutType;
  let Icon;

  switch (switchExpression) {
    case "-cut1":
      Icon = LeftWallIcon;
      break;
    case "-cut2":
      Icon = RightWallIcon;
      break;
    case "-cut3":
      Icon = StairsIcon;
      break;
    case "-cut4":
      Icon = GeometryCoreIcon;
      break;
    default:
      Icon = ScissorIcon;
  }

  const handleModeChange = (modelCut: ModelCut): void => {
    if (modelCut === null) {
      // hide dropdown if clicked doesn't matter what visible state is, this basically used to detect update in parent component
      // via use effect..
      setVisible(!visible);
    }

    if (selectedModel) {
      if (localCutType === modelCut) {
        dispatch(updateLocalModelCut(""));
      } else {
        dispatch(updateLocalModelCut(modelCut));
      }
    } else {
      if (cutType === null && modelCut === null) {
        dispatch(updateModelCut("-cut3"));
      } else if (cutType === modelCut) {
        dispatch(updateModelCut(""));
      } else {
        dispatch(updateModelCut(modelCut));
      }
    }
  };

  const handleClippingPlanes = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setClippingPlanesNormal(+e.target.value));
  };

  const menuItems = [
    { Icon: LeftWallIcon, mode: "-cut1", title: "1'st cut" },
    { Icon: RightWallIcon, mode: "-cut2", title: "2'nd cut" },
    { Icon: StairsIcon, mode: "-cut3", title: "3'rd cut" },
    { Icon: GeometryCoreIcon, mode: "-cut4", title: "4'th cut" },
    { Icon: ScissorIcon, mode: null, title: "Custom cut" },
  ];

  const innerHtml = menuItems.map((item) => {
    return (
      <NavIcon
        active={switchExpression === item.mode}
        key={item.title}
        Icon={item.Icon}
        title={item.title}
        onClick={(): void => handleModeChange(item.mode as ModelCut)}
      />
    );
  });

  return (
    <>
      <div className="group relative inline-flex">
        <NavIcon Icon={Icon} title="Geometry Cut Options" active />
        <MenuDropdown isVisible={visible}>{innerHtml}</MenuDropdown>
      </div>
      {cutType === null && (
        <div className="absolute bottom-[35px] left-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center rounded bg-dark1 p-4 sm:top-[68px] ">
          <input
            min={-3.14159265}
            max={3.14159265}
            step={0.0001}
            value={clippingPlanesVal}
            onChange={handleClippingPlanes}
            type="range"
            className="range-sm h-[3px] w-auto cursor-pointer appearance-none rounded-lg bg-highlight1 accent-accent2 dark:accent-accent1"
          />
        </div>
      )}
    </>
  );
}

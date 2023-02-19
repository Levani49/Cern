import { ReactComponent as BoxIcon } from "../../assets/svg/box.svg";
import { ReactComponent as LeftSideBox } from "../../assets/svg/left-side-box.svg";
import { ReactComponent as RightSideBox } from "../../assets/svg/right-side-box.svg";

import MenuIcon from "./MenuIcon.component";
import MenuDropdown from "./MenuDropdown.component";

import { useAppDispatch } from "../../app/hooks";
import { setDefaultView, setLeftCameraView, setRightCameraView } from "../../features/cameraSlice";

/**
 * Provides different views of the scene
 *
 * @returns {JSX.Element} ReactElement
 */
export default function CameraViewMenu(): JSX.Element {
  const dispatch = useAppDispatch();

  /**
   *
   */
  const defaultViewHandler = (): void => {
    dispatch(setDefaultView());
  };

  /**
   *
   */
  const leftSideViewHandler = (): void => {
    dispatch(setLeftCameraView());
  };

  /**
   *
   */
  const rightSideViewHandler = (): void => {
    dispatch(setRightCameraView());
  };

  return (
    <div className="inline-flex group">
      <MenuIcon Icon={BoxIcon} />
      <MenuDropdown>
        <MenuIcon Icon={BoxIcon} onClick={defaultViewHandler} />
        <MenuIcon Icon={LeftSideBox} onClick={leftSideViewHandler} />
        <MenuIcon Icon={RightSideBox} onClick={rightSideViewHandler} />
      </MenuDropdown>
    </div>
  );
}

import { ReactComponent as BoxIcon } from "../../assets/svg/box.svg";
import { ReactComponent as LeftSideBox } from "../../assets/svg/left-side-box.svg";
import { ReactComponent as RightSideBox } from "../../assets/svg/right-side-box.svg";

import MenuIcon from "./MenuIcon.component";
import MenuDropdown from "./MenuDropdown.component";

import { useAppDispatch } from "../../app/hooks";
import { setDefaultView, setLeftCameraView, setRightCameraView } from "../../features/cameraSlice";

/**
 * Renders a CameraViewMenu component that displays a dropdown menu of camera view options.
 *
 * @function
 * @name CameraViewMenu
 * @returns {JSX.Element} - A JSX element representing the CameraViewMenu component.
 */
export default function CameraViewMenu(): JSX.Element {
  const dispatch = useAppDispatch();

  /**
   * Event handler for setting the default camera view.
   *
   * @function
   * @name defaultViewHandler
   *@returns {void}
   */
  const defaultViewHandler = (): void => {
    dispatch(setDefaultView());
  };

  /**
   * Event handler for setting the left side camera view.
   *
   * @function
   * @name leftSideViewHandler
   *@returns {void}
   */
  const leftSideViewHandler = (): void => {
    dispatch(setLeftCameraView());
  };

  /**
   * Event handler for setting the right side camera view.
   *
   * @function
   * @name rightSideViewHandler
   *@returns {void}
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

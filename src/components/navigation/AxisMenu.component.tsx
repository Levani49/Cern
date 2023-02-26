import { ReactComponent as AxisIcon } from "../../assets/svg/axis.svg";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectRendererAxisState,
  showAxis,
} from "../../features/rendererSlice";

import MenuIcon from "./MenuIcon.component";

/**
 *
 */
export default function AxisMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectRendererAxisState);

  /**
   *
   */
  const toggler = (): void => {
    show ? dispatch(showAxis(false)) : dispatch(showAxis(true));
  };

  return <MenuIcon Icon={AxisIcon} active={show} onClick={toggler} />;
}

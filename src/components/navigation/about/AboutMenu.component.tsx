import { ReactComponent as InfoIcon } from "../../../assets/svg/info.svg";
import {
  selectAboutModalState,
  showAboutModal
} from "../../../features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import AboutModal from "../../modal/about/About.modal";
import NavIcon from "../navIcon/navIcon";

export default function AboutMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectAboutModalState);

  const toggleModal = (): void => {
    dispatch(showAboutModal(!show));
  };

  return (
    <>
      <NavIcon Icon={InfoIcon} onClick={toggleModal} title="About" />
      <AboutModal />
    </>
  );
}

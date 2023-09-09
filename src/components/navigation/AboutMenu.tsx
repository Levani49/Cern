import Icons from "#/utils/icons";
import { selectAboutModalState, showAboutModal } from "#/store/features/modalSlice";
import { useAppDispatch, useAppSelector } from "#/store/hooks";
import AboutModal from "#/components/modals/about/About.modal";
import NavIcon from "#/components/navigation/NavIcon";

export default function AboutMenu() {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectAboutModalState);

  const toggleModal = (): void => {
    dispatch(showAboutModal(!show));
  };

  return (
    <>
      <NavIcon Icon={Icons.InfoIcon} onClick={toggleModal} title="About" />
      <AboutModal />
    </>
  );
}

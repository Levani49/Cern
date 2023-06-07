import { ReactComponent as SnapIcon } from "../../../assets/svg/snap.svg";
import {
  selectSnapModal,
  setSnapModal
} from "../../../features/global/globalsSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import SnapModal from "../../modal/snap/Snap.modal";
import NavIcon from "../navIcon/navIcon";

export default function SnapMenu(): JSX.Element {
  const showModal = useAppSelector(selectSnapModal);
  const dispatch = useAppDispatch();

  const handleToggle = (e: boolean): void => {
    dispatch(setSnapModal(e));
  };

  return (
    <>
      <NavIcon
        Icon={SnapIcon}
        active={showModal}
        onClick={(): void => handleToggle(!showModal)}
      />
      <SnapModal open={showModal} onClose={handleToggle} />
    </>
  );
}

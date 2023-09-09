import { ReactComponent as SnapIcon } from "#/assets/svg/snap.svg";
import { useAppDispatch, useAppSelector } from "#/store/hooks";
import { selectSnapModal, setSnapModal } from "#/features/global/globalsSlice";
import SnapModal from "#/components/modal/snap/Snap.modal";

import NavIcon from "../navIcon/navIcon";

export default function SnapMenu() {
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
        title="Import export snap file"
      />
      <SnapModal open={showModal} onClose={handleToggle} />
    </>
  );
}

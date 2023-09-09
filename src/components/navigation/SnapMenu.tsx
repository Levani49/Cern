import Icons from "#/utils/icons";
import { selectSnapModal, setSnapModal } from "#/store/features/globalsSlice";
import { useAppDispatch, useAppSelector } from "#/store/hooks";
import SnapModal from "#/components/modals/snap/Snap.modal";
import NavIcon from "#/components/navigation/NavIcon";

export default function SnapMenu() {
  const showModal = useAppSelector(selectSnapModal);
  const dispatch = useAppDispatch();

  const handleToggle = (e: boolean): void => {
    dispatch(setSnapModal(e));
  };

  return (
    <>
      <NavIcon
        Icon={Icons.SnapIcon}
        active={showModal}
        onClick={(): void => handleToggle(!showModal)}
        title="Import export snap file"
      />
      <SnapModal open={showModal} onClose={handleToggle} />
    </>
  );
}

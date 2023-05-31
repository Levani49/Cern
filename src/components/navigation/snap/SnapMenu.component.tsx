import NavIcon from '../navIcon/navIcon.component';

import { ReactComponent as SnapIcon } from '../../../assets/svg/snap.svg';
import SnapModal from '../../modal/snap/Snap.modal';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectSnapModal, setSnapModal } from '../../../features/global/globalsSlice';

export default function SnapMenu(): JSX.Element {
  const showModal = useAppSelector(selectSnapModal);
  const dispatch = useAppDispatch();

  const handleToggle = (e: boolean): void => {
    dispatch(setSnapModal(e));
  };

  return (
    <>
      <NavIcon Icon={SnapIcon} active={showModal} onClick={(): void => handleToggle(!showModal)} />
      <SnapModal open={showModal} onClose={handleToggle} />
    </>
  );
}

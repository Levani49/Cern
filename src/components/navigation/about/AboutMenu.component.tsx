import { ReactComponent as InfoIcon } from '../../../assets/svg/info.svg';

import { selectAboutModalState, showAboutModal } from '../../../features/modal/modalSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

import NavIcon from '../navIcon/navIcon.component';
import AboutModal from '../../modal/about/About.modal';

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

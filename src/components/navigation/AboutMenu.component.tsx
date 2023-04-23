import { useIntl } from 'react-intl';
import { ReactComponent as InfoIcon } from '../../assets/svg/info.svg';

import { selectAboutModalState, showAboutModal } from '../../features/modal/modalSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import MenuIcon from './MenuIcon.component';
import AboutModal from '../modal/about/About.modal';

/**
 * Renders an InfoMenu component that displays an icon for opening a modal with more information.
 *
 * @function
 * @name InfoMenu
 * @returns {JSX.Element} - A JSX element representing the InfoMenu component.
 */
export default function AboutMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectAboutModalState);

  const intl = useIntl();
  const title = intl.formatMessage({ id: 'navigation.about.title' });

  /**
   * Toggles the visibility of the info modal.
   *
   * @function
   * @name toggleModal
   * @returns {void}
   */
  const toggleModal = (): void => {
    show ? dispatch(showAboutModal(false)) : dispatch(showAboutModal(true));
  };

  return (
    <>
      <MenuIcon Icon={InfoIcon} onClick={toggleModal} title={title} />
      <AboutModal />
    </>
  );
}

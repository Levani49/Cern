import { useIntl } from 'react-intl';

import { ReactComponent as EventsIcon } from '../../assets/svg/events.svg';
import { selectEventsModalState, showEventsModal } from '../../features/modal/modalSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import MenuIcon from './MenuIcon.component';
import EventsModal from '../modal/events/Events.modal';

export default function EventsMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const active = useAppSelector(selectEventsModalState);
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'navigation.events.title' });

  const toggleEventsModal = (): void => {
    active ? dispatch(showEventsModal(false)) : dispatch(showEventsModal(true));
  };

  return (
    <>
      <MenuIcon active={active} onClick={toggleEventsModal} Icon={EventsIcon} title={title} />
      <EventsModal />
    </>
  );
}

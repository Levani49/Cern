import { ReactComponent as EventsIcon } from '../../../assets/svg/events.svg';
import { selectEventsModalState, showEventsModal } from '../../../features/modal/modalSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

import NavIcon from '../navIcon/navIcon.component';
import EventsModal from '../../modal/event/Event.modal';

export default function EventsMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const active = useAppSelector(selectEventsModalState);

  const toggleEventsModal = (): void => {
    active ? dispatch(showEventsModal(false)) : dispatch(showEventsModal(true));
  };

  return (
    <>
      <NavIcon active={active} onClick={toggleEventsModal} Icon={EventsIcon} title="Events Menu" />
      <EventsModal />
    </>
  );
}

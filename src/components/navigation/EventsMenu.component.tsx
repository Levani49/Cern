import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ReactComponent as EventsIcon } from "../../assets/svg/events.svg";
import {
  selectEventsModalState,
  showEventsModal,
} from "../../features/modalsSlice";

import MenuIcon from "./MenuIcon.component";
import EventsModal from "../modals/events/Events.modal";

/**
 *
 */
export default function EventsMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const active = useAppSelector(selectEventsModalState);

  /**
   *
   */
  const toggleEventsModal = (): void => {
    active ? dispatch(showEventsModal(false)) : dispatch(showEventsModal(true));
  };

  return (
    <>
      <MenuIcon
        active={active}
        onClick={toggleEventsModal}
        Icon={EventsIcon}
        title="Events menu"
      />
      <EventsModal />
    </>
  );
}

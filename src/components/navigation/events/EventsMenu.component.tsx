import { ReactComponent as EventsIcon } from "@assets/svg/events.svg";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import { selectEventsModalState, showEventsModal } from "@features/modal/modalSlice";

import EventsModal from "../../modal/event/Event.modal";
import NavIcon from "../navIcon/navIcon";

export default function EventsMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const active = useAppSelector(selectEventsModalState);

  const toggleEventsModal = (): void => {
    active ? dispatch(showEventsModal(false)) : dispatch(showEventsModal(true));
  };

  return (
    <>
      <NavIcon
        active={active}
        onClick={toggleEventsModal}
        Icon={EventsIcon}
        title="Events Menu"
      />
      <EventsModal />
    </>
  );
}

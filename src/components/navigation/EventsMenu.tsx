import Icons from "#/utils/icons";
import {
  selectEventsModalState,
  showEventsModal,
} from "#/store/features/modalSlice";
import { useAppDispatch, useAppSelector } from "#/store/hooks";
import EventsModal from "#/components/modals/event/Event.modal";
import NavIcon from "#/components/navigation/NavIcon";

export default function EventsMenu() {
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
        Icon={Icons.EventsIcon}
        title="Events Menu"
      />
      <EventsModal />
    </>
  );
}

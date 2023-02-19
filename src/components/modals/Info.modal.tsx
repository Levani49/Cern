import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectInfoSettingsStatus, closeInfoModal } from "../../features/infoSlice";

import Modal from "../Modal";
import Slot from "../info/Slot.component";

type Employee = { id: string; name: string; src: string; role: string };

const TEMP_INFO: Employee[] = [
  {
    id: "1",
    name: "Albert Einstein",
    src: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-3091504.jpg?resize=1200:*",
    role: "Scientist",
  },
  {
    id: "2",
    name: "Albert Einstein",
    src: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-3091504.jpg?resize=1200:*",
    role: "Scientist",
  },
  {
    id: "3",
    name: "Albert Einstein",
    src: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-3091504.jpg?resize=1200:*",
    role: "Scientist",
  },
  {
    id: "4",
    name: "Albert Einstein",
    src: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-3091504.jpg?resize=1200:*",
    role: "Scientist",
  },
  {
    id: "5¡",
    name: "Albert Einstein",
    src: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-3091504.jpg?resize=1200:*",
    role: "Scientist",
  },
  {
    id: "5",
    name: "Albert Einstein",
    src: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-3091504.jpg?resize=1200:*",
    role: "Scientist",
  },
  {
    id: "6",
    name: "Albert Einstein",
    src: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-3091504.jpg?resize=1200:*",
    role: "Scientist",
  },
  {
    id: "7",
    name: "Albert Einstein",
    src: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-3091504.jpg?resize=1200:*",
    role: "Scientist",
  },
  {
    id: "8",
    name: "Albert Einstein",
    src: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-3091504.jpg?resize=1200:*",
    role: "Scientist",
  },
];

/**
 * Settings component that displays different settings options in a modal.
 *
 * @param {Props} props - The props of the component.
 * @param {boolean} props.show - Whether the modal should be displayed or not.
 * @param {Function} props.onClose - The callback function to close the modal.
 * @returns {JSX.Element} ReactElement
 */
export default function InfoModal(): JSX.Element {
  const show = useAppSelector(selectInfoSettingsStatus);
  const dispatch = useAppDispatch();

  /**
   *
   */
  const closeModalHandler = (): void => {
    dispatch(closeInfoModal());
  };

  return (
    <Modal title="About" show={show} onCloseHandler={closeModalHandler}>
      <div className="w-full shadow-md rounded p-1 ">
        <div className="grid grid-cols-2 max-h-80 overflow-y-auto md:overflow-y-hidden md:max-h-auto md:grid-cols-3 gap-4 justify-between">
          {TEMP_INFO.map((employee: Employee) => {
            const { id, ...rest } = employee;
            return <Slot key={id} {...rest} />;
          })}
        </div>
      </div>
    </Modal>
  );
}

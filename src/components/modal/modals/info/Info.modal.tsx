import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { selectInfoSettingsStatus, closeInfoModal } from "../../../../features/infoSlice";

import Modal from "../../Modal";

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
        <div className="grid grid-cols-3 gap-8 justify-between">
          <div className="flex justify-center items-center flex-col">
            <img
              className="h-16 w-16 rounded-full"
              src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-3091504.jpg?resize=1200:*"
              alt="Einstein"
            />
            <h4>Albert Einstein</h4>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img
              className="h-16 w-16 rounded-full"
              src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-3091504.jpg?resize=1200:*"
              alt="Einstein"
            />
            <h4>Albert Einstein</h4>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img
              className="h-16 w-16 rounded-full"
              src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-3091504.jpg?resize=1200:*"
              alt="Einstein"
            />
            <h4>Albert Einstein</h4>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img
              className="h-16 w-16 rounded-full"
              src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-3091504.jpg?resize=1200:*"
              alt="Einstein"
            />
            <h4>Albert Einstein</h4>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img
              className="h-16 w-16 rounded-full"
              src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-3091504.jpg?resize=1200:*"
              alt="Einstein"
            />
            <h4>Albert Einstein</h4>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img
              className="h-16 w-16 rounded-full"
              src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-3091504.jpg?resize=1200:*"
              alt="Einstein"
            />
            <h4>Albert Einstein</h4>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img
              className="h-16 w-16 rounded-full"
              src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-3091504.jpg?resize=1200:*"
              alt="Einstein"
            />
            <h4>Albert Einstein</h4>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img
              className="h-16 w-16 rounded-full"
              src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-3091504.jpg?resize=1200:*"
              alt="Einstein"
            />
            <h4>Albert Einstein</h4>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img
              className="h-16 w-16 rounded-full"
              src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-3091504.jpg?resize=1200:*"
              alt="Einstein"
            />
            <h4>Albert Einstein</h4>
          </div>
        </div>
      </div>
    </Modal>
  );
}

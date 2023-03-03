import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectDroneState,
  selectFlyModalState,
  setFlyModalState,
} from "../../features/cameraSlice";

/**
 * A component that displays an overlay with instructions for controlling the drone camera
 * when in free-fly mode.
 *
 * @returns {JSX.Element} A JSX element that displays the overlay.
 */
export default function FlyOverlay(): JSX.Element {
  const dispatch = useAppDispatch();

  const { showFlyModal, droneMode } = useAppSelector((state) => ({
    showFlyModal: selectFlyModalState(state),
    droneMode: selectDroneState(state),
  }));

  const isFreeFLy = droneMode === "fly";

  /**
   * Handles the user clicking on the overlay. Dispatches an action to set the `showFlyModal`
   * state to false.
   *
   * @returns {void} void
   */
  const handleClick = (): void => {
    dispatch(setFlyModalState(false));
  };

  if (isFreeFLy) {
    return (
      <>
        {!showFlyModal && (
          <h1 className="info-graph text-white text-sm top-1/4">
            Press
            <span className="font-bold text-yellow-500"> W | A | S | D </span>
            to move, use your mouse to rotate
            <span className="font-bold text-yellow-500"> CAMERA </span>, Press{" "}
            <span className="font-bold text-yellow-500"> ESC </span> to exit
            from mode.
          </h1>
        )}
        {showFlyModal && (
          <div
            role="presentation"
            className="z-[5000] fixed inset-0 bg-black/70 flex items-center justify-center"
            onClick={handleClick}
          >
            <h1 className="text-white self-center">Click anywhere to start</h1>
          </div>
        )}
      </>
    );
  } else {
    return <></>;
  }
}

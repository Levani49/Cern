import { useAppDispatch, useAppSelector } from "@store/hooks";

import {
  selectDroneState,
  selectFlyModalState,
  setFlyModalState
} from "@features/camera/cameraSlice";

export default function FlyOverlay(): JSX.Element {
  const dispatch = useAppDispatch();

  const { showFlyModal, droneMode } = useAppSelector((state) => ({
    showFlyModal: selectFlyModalState(state),
    droneMode: selectDroneState(state)
  }));

  const isFreeFLy = droneMode === "fly";

  const handleClick = (): void => {
    dispatch(setFlyModalState(false));
  };

  if (isFreeFLy) {
    return (
      <>
        {!showFlyModal && (
          <h1 className="info-graph top-1/4 z-[5000] text-sm text-white">
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
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70"
            onClick={handleClick}
          >
            <h1 className="self-center text-white">Click anywhere to start</h1>
          </div>
        )}
      </>
    );
  } else {
    return <></>;
  }
}

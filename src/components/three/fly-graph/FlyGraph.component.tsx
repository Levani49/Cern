import { useAppDispatch } from "@store/hooks";

import useDrone from "@hooks/useDrone/useDrone.hook";

export default function FlyOverlay(): JSX.Element {
  const dispatch = useAppDispatch();
  const { currentMode, setFlyModalState, showFlyModal } = useDrone();

  const isFreeFLy = currentMode === "fly";

  const handleClick = (): void => {
    dispatch(setFlyModalState(false));
  };

  if (isFreeFLy) {
    return (
      <>
        {!showFlyModal && (
          <p className="info-graph top-1/4 z-[5000] text-sm text-white">
            Pressdown
            <span className="font-bold text-yellow-500"> W | A | S | D </span>
            to move, use your mouse to rotate
            <span className="font-bold text-yellow-500"> CAMERA </span>, Press{" "}
            <span className="font-bold text-yellow-500"> ESC </span> to exit from
            mode.
          </p>
        )}
        {showFlyModal && (
          <div
            role="presentation"
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70"
            onClick={handleClick}
          >
            <p className="self-center text-white">Click anywhere to start</p>
          </div>
        )}
      </>
    );
  } else {
    return <></>;
  }
}

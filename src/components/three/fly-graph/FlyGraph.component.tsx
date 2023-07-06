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
          <div className="info-graph z-20 text-center text-xs text-white">
            <b className="text-yellow-500">Pressdown your mouse </b> to fly
            <br />
            <b className="text-yellow-500">WASD</b> to move
            <br />
            <b className="text-yellow-500">R|F</b> up | down
            <br />
            <b className="text-yellow-500">Q|E</b> roll
            <br />
            <b className="text-yellow-500">←↑↓→</b> rotation
            <br />
            <b className="text-yellow-500">Space</b> correct axis
          </div>
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

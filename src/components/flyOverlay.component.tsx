import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectFlyModalState, setFlyModalState } from "../features/cameraSlice";

/**
 *
 */
export default function FlyOverlay(): JSX.Element {
  const showFlyModal = useAppSelector(selectFlyModalState);
  const dispatch = useAppDispatch();

  /**
   *
   */
  const handleClick = (): void => {
    dispatch(setFlyModalState(false));
  };

  if (!showFlyModal) return <></>;

  return (
    <div
      role="presentation"
      className="z-[5000] fixed inset-0 bg-black/70 flex items-center justify-center"
      onClick={handleClick}
    >
      <h1 className="text-white self-center">Click anywhere to start</h1>
    </div>
  );
}

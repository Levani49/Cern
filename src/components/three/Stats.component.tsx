import { useAppSelector } from "../../app/hooks";
import {
  selectRendererStats,
  selectRendererStatsState,
} from "../../features/rendererSlice";

/**
 *
 */
export default function Stats(): JSX.Element {
  const { triangles, fps, memory } = useAppSelector(selectRendererStats);
  const show = useAppSelector(selectRendererStatsState);

  if (!show) {
    return <></>;
  }

  return (
    <div className="absolute flex gap-3 bottom-2 left-2 text-white font-normal text-xs">
      <span>TRIANGLES: {triangles}</span>
      {memory ? <span>MEMORY: {memory} MB</span> : null}
      <span>FPS: {fps} </span>
    </div>
  );
}

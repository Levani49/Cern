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
    <div className="absolute flex gap-3 bottom-2 left-2 text-white font-medium text-sm">
      <span>TRIANGLES: {triangles}</span>
      <span>MEMORY: {memory} MB</span>
      <span>FPS: {fps} </span>
    </div>
  );
}

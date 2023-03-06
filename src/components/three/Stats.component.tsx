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
    <div className="absolute flex left-1/2 bottom-[1px] gap-3 transform -translate-x-1/2 -translate-y-1/2 text-white font-normal text-xs">
      <span>TRIANGLES: {triangles}</span>
      {memory ? <span>MEMORY: {memory} MB</span> : null}
      <span>FPS: {fps} </span>
    </div>
  );
}

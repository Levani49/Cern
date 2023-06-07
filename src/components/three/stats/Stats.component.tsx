import { useAppSelector } from "@store/hooks";

import { selectStats } from "@features/global/globalsSlice";
import { selectRendererStats } from "@features/renderer/rendererSlice";

export default function Stats(): JSX.Element {
  const { triangles, fps, memory } = useAppSelector(selectRendererStats);
  const show = useAppSelector(selectStats);

  return (
    <>
      {show && (
        <div className="absolute bottom-[1px] left-1/2 z-[9999] flex -translate-x-1/2 -translate-y-1/2 transform select-none gap-3 text-xs font-normal text-white">
          <span>TRIANGLES: {triangles}</span>
          {memory ? <span>MEMORY: {memory} MB</span> : null}
          <span>FPS: {fps} </span>
        </div>
      )}
    </>
  );
}

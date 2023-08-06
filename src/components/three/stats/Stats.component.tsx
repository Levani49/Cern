import { useAppSelector } from "@store/hooks";

import { selectStats } from "@features/global/globalsSlice";
import { selectRendererStats } from "@features/renderer/rendererSlice";

export default function Stats(): JSX.Element {
  const { triangles, fps, memory } = useAppSelector(selectRendererStats);
  const show = useAppSelector(selectStats);

  return (
    <>
      {show && (
        <div className="absolute bottom-auto left-2 top-2 z-[9999] flex flex transform select-none flex-col gap-2 text-xs font-normal text-white sm:bottom-[1px] sm:left-1/2 sm:left-auto sm:top-auto sm:-translate-x-1/2 sm:-translate-y-1/2 sm:flex-row">
          <span>TRIANGLES: {triangles}</span>
          {memory ? (
            <span className="hidden sm:block">MEMORY: {memory} MB</span>
          ) : null}
          <span>FPS: {fps} </span>
        </div>
      )}
    </>
  );
}

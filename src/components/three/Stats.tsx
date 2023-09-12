import { selectStats } from "#/store/features/globalsSlice";
import { selectRendererStats } from "#/store/features/rendererSlice";
import { useAppSelector } from "#/store/hooks";

export default function Stats() {
  const { triangles, fps, memory } = useAppSelector(selectRendererStats);
  const show = useAppSelector(selectStats);

  return (
    <>
      {show && (
        <div className="absolute bottom-auto left-2 top-2 z-[9999] flex transform select-none flex-col gap-2 text-xs font-normal text-white sm:bottom-[1px] sm:left-1/2  sm:top-auto sm:-translate-x-1/2 sm:-translate-y-1/2 sm:flex-row">
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

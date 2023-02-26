import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

import { useAppDispatch } from "../app/hooks";
import { setRendererStats } from "../features/rendererSlice";
import StatsUtils from "../utils/stats.utils";

const stats = new StatsUtils();

/**
 *
 */
export default function StatsDispatcher(): JSX.Element {
  const dispatch = useAppDispatch();
  const statsRef = useRef<{ triangles: number; fps: number; memory: number }>({
    triangles: 0,
    fps: 0,
    memory: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(
        setRendererStats({
          triangles: statsRef.current.triangles,
          fps: statsRef.current.fps,
          memory: statsRef.current.memory,
        }),
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  useFrame(({ gl }) => {
    stats.update();
    statsRef.current.triangles = gl.info.render.triangles;
    statsRef.current.fps = stats.fps;
    statsRef.current.memory = stats.memory;
  });

  return <></>;
}

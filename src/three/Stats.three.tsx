import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

import StatsUtils from "#/utils/stats";
import { selectStats } from "#/store/features/globalsSlice";
import { setRendererStats } from "#/store/features/rendererSlice";
import { useAppDispatch, useAppSelector } from "#/store/hooks";

const stats = new StatsUtils();

export default function StatsDispatcher() {
  const dispatch = useAppDispatch();
  const { scene } = useThree();
  const showStats = useAppSelector(selectStats);
  const statsRef = useRef<{ triangles: number; fps: number; memory: number }>({
    triangles: 0,
    fps: 0,
    memory: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!showStats) {
        return;
      }
      let triangleCount = 0;
      scene.traverse((object) => {
        if (object.type === "Mesh") {
          const mesh = object as THREE.Mesh;
          const geometry = mesh.geometry as THREE.BufferGeometry;
          const index = geometry.getIndex();

          if (index !== null) {
            const numTriangles = index.array.length / 3;
            triangleCount += numTriangles;
          }
        }
      });

      statsRef.current.triangles = triangleCount;
      statsRef.current.fps = stats.fps;
      statsRef.current.memory = stats.memory;

      dispatch(
        setRendererStats({
          triangles: statsRef.current.triangles,
          fps: statsRef.current.fps,
          memory: statsRef.current.memory,
        })
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [dispatch, scene, showStats]);

  useFrame(() => {
    stats.update();
  });

  return <></>;
}

import { BufferGeometry, Mesh } from "three";

import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";

import StatsUtils from "#/utils/stats";
import { selectStats } from "#/store/features/globalsSlice";
import { setRendererStats } from "#/store/features/rendererSlice";
import { useAppDispatch, useAppSelector } from "#/store/hooks";

const stats = new StatsUtils();

export default function StatsDispatcher() {
  const dispatch = useAppDispatch();
  const { scene } = useThree();
  const showStats = useAppSelector(selectStats);

  useEffect(() => {
    if (!showStats) {
      return;
    }

    const intervalId = setInterval(() => {
      let triangles = 0;

      scene.traverse((object) => {
        if (object.type === "Mesh") {
          const mesh = object as Mesh;
          const geometry = mesh.geometry as BufferGeometry;
          const index = geometry.getIndex();

          if (index !== null) {
            const numberOfTriangles = index.array.length / 3;
            triangles += numberOfTriangles;
          } else {
            triangles += geometry.attributes.position.count / 3;
          }
        }
      });

      dispatch(
        setRendererStats({
          triangles: triangles,
          fps: stats.fps,
          memory: stats.memory,
        })
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, [dispatch, scene, showStats]);

  useFrame(() => {
    stats.update();
  });

  return <></>;
}

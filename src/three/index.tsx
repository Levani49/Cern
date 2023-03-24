import { Suspense, lazy, useEffect } from "react";
import { NoToneMapping } from "three";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Loader } from "@react-three/drei";

import Lights from "./Light.three";
import Fog from "./Fog.three";
import StatsDispatcher from "./Stats.three";
import { useAppDispatch } from "../app/hooks";
import useLoadingStatus from "../hooks/useLoading.hook";
import { updateLoadingState } from "../features/geometryMenuSlice/geometryMenuSlice";
import SceneUtils from "./SceneUtils.three";

const Detector = lazy(() => import("./Detector.three"));
const Environment = lazy(() => import("./Environment.three"));
const ParticleSystem = lazy(() => import("./particle-system/index.three"));
const Controls = lazy(() => import("./Controls.three"));
const Axis = lazy(() => import("./Axis.three"));
const Grid = lazy(() => import("./Grid.three"));

/**
 * Main scene of application
 *
 * @returns { JSX.Element } JSX.ELement
 */
export default function Scene(): JSX.Element {
  const dispatch = useAppDispatch();
  const { isLoading, hasLoaded } = useLoadingStatus();

  useEffect(() => {
    if (isLoading) {
      dispatch(updateLoadingState("loading"));
    } else if (hasLoaded) {
      dispatch(updateLoadingState("idle"));
    }
  }, [isLoading, hasLoaded, dispatch]);

  return (
    <>
      <Canvas
        gl={{
          pixelRatio: window.devicePixelRatio * 0.5,
          alpha: true,
          toneMapping: NoToneMapping,
        }}
        linear
      >
        <Physics gravity={[0, 0, 0]}>
          <Lights />
          <Suspense fallback={null}>
            <Detector />
          </Suspense>
          <Fog />
          <Suspense>
            <Grid />
            <Environment />
            <ParticleSystem />
            <Controls />
            <Axis />
          </Suspense>
          <StatsDispatcher />
          <SceneUtils />
        </Physics>
      </Canvas>
      <Loader />
    </>
  );
}

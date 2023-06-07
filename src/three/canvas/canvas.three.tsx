import { Physics } from "@react-three/cannon";
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { lazy, Suspense, useEffect } from "react";

import { NoToneMapping } from "three";

import { updateModelsLoadingState } from "../../features/model/modelSlice";
import useLoadingStatus from "../../hooks/useLoading/useLoading";
import { useAppDispatch } from "../../store/hooks";
import Background from "../background/Background.three";
import Camera from "../camera/OrthographicCamera.three";
import Fog from "../fog/Fog.three";
import Lights from "../light/Light.three";
import StatsDispatcher from "../stats/Stats.three";

const Detector = lazy(() => import("../controls/Detector.three"));
const ParticleSystem = lazy(() => import("../particle-system/ParticleSystem"));
const Controls = lazy(() => import("../controls/Controls.three"));
const Axis = lazy(() => import("../axis/Axis.three"));
const Grid = lazy(() => import("../grid/Grid.three"));
const Event = lazy(() => import("../event/event/Event.three"));

/**
 * Main scene of application
 *
 * @returns { JSX.Element } JSX.ELement
 */
export default function Scene(): JSX.Element {
  const dispatch = useAppDispatch();
  const { isLoading, isLoaded } = useLoadingStatus();

  useEffect(() => {
    if (isLoading) {
      dispatch(updateModelsLoadingState("loading"));
    } else if (isLoaded) {
      dispatch(updateModelsLoadingState("idle"));
    }
  }, [isLoading, isLoaded, dispatch]);

  return (
    <>
      <Canvas
        gl={{
          pixelRatio: window.devicePixelRatio * 0.5,
          alpha: true,
          toneMapping: NoToneMapping
        }}
        linear
        frameloop="demand"
        id="canvas"
      >
        <Physics gravity={[0, 0, 0]}>
          <Suspense fallback={null}>
            <Detector />
            <Axis />
          </Suspense>
          <Background />
          <Fog />
          <StatsDispatcher />
          <Event />
          <Lights />
          <Camera />
          <Grid />
          {/* <Environment /> */}
          <Controls />
          <ParticleSystem />
        </Physics>
      </Canvas>
      <Loader containerStyles={{ backgroundColor: "transparent" }} />
    </>
  );
}

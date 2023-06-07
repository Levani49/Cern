import { Physics } from "@react-three/cannon";
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { lazy, Suspense, useEffect } from "react";

import { NoToneMapping } from "three";

import { useAppDispatch } from "@store/hooks";

import { updateModelsLoadingState } from "@features/model/modelSlice";

import Background from "@three/background/Background.three";
import Camera from "@three/camera/OrthographicCamera.three";
import Fog from "@three/fog/Fog.three";
import Lights from "@three/light/Light.three";
import StatsDispatcher from "@three/stats/Stats.three";

import useLoadingStatus from "@hooks/useLoading/useLoading";

const Detector = lazy(() => import("@three/controls/Detector.three"));
const Controls = lazy(() => import("@three/controls/Controls.three"));
const Axis = lazy(() => import("@three/axis/Axis.three"));
const Grid = lazy(() => import("@three/grid/Grid.three"));
const Event = lazy(() => import("@three/event/event/Event.three"));
const ParticleSystem = lazy(
  () => import("@three/particle-system/ParticleSystem")
);

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

import { Physics } from "@react-three/cannon";
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { lazy, Suspense, useEffect } from "react";

import { NoToneMapping } from "three";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import {
  selectGeometriesCutType,
  selectSnapIsLoading,
  updateModelsLoadingState
} from "@features/model/modelSlice";

import Raycast from "@three/background/Background.three";
import Camera from "@three/camera/Camera.three";
import Lights from "@three/light/Light.three";
import StatsDispatcher from "@three/stats/Stats.three";

import useLoadingStatus from "@hooks/useLoading/useLoading";

const Detector = lazy(() => import("@three/controls/Detector.three"));
const Controls = lazy(() => import("@three/controls/Controls.three"));
const Axis = lazy(() => import("@three/axis/Axis.three"));
const Grid = lazy(() => import("@three/grid/Grid.three"));
const Event = lazy(() => import("@three/event/event/Event.three"));
const ParticleSystem = lazy(() => import("@three/particle-system/ParticleSystem"));

export default function Scene(): JSX.Element {
  const dispatch = useAppDispatch();
  const { isLoading, isLoaded } = useLoadingStatus();
  const cutType = useAppSelector(selectGeometriesCutType);

  useEffect(() => {
    if (isLoading) {
      dispatch(updateModelsLoadingState("loading"));
    } else if (isLoaded) {
      dispatch(updateModelsLoadingState("idle"));
    }
  }, [isLoading, isLoaded, dispatch]);

  const snapIsLoading = useAppSelector(selectSnapIsLoading);
  const localClippingEnabled = cutType === null;

  return (
    <>
      <Canvas
        gl={{
          pixelRatio: window.devicePixelRatio * 0.5,
          alpha: true,
          toneMapping: NoToneMapping,
          localClippingEnabled
        }}
        linear
        frameloop="demand"
        id="canvas"
        camera={{ manual: true }}
      >
        <Physics gravity={[0, 0, 0]}>
          <Suspense fallback={null}>
            {!snapIsLoading && <Detector />}
            <Axis />
          </Suspense>
          <Raycast />
          <StatsDispatcher />
          <Event />
          <Lights />
          <Camera />
          <Grid />
          <Controls />
          <ParticleSystem />
        </Physics>
      </Canvas>
      <Loader containerStyles={{ backgroundColor: "transparent" }} />
    </>
  );
}

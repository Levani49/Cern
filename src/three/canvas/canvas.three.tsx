import { Physics } from "@react-three/cannon";
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { lazy, Suspense } from "react";

import { NoToneMapping } from "three";

import { useAppSelector } from "@store/hooks";

import {
  selectGeometriesCutType,
  selectSnapIsLoading
} from "@features/model/modelSlice";

import Camera from "@three/camera/Camera.three";
import Lights from "@three/light/Light.three";
import Raycast from "@three/raycast/Raycast.three";

// import StatsDispatcher from "@three/stats/Stats.three";

const Detector = lazy(() => import("@/three/detector/Detector.three"));
const Controls = lazy(() => import("@three/controls/Controls.three"));
const Axis = lazy(() => import("@three/axis/Axis.three"));
const Grid = lazy(() => import("@three/grid/Grid.three"));
const Event = lazy(() => import("@three/event/event/Event.three"));
const ParticleSystem = lazy(() => import("@three/particle-system/ParticleSystem"));
const StatsDispatcher = lazy(() => import("@three/stats/Stats.three"));

export default function Scene(): JSX.Element {
  const cutType = useAppSelector(selectGeometriesCutType);
  const snapIsLoading = useAppSelector(selectSnapIsLoading);
  const localClippingEnabled = cutType === null;

  return (
    <>
      <Canvas
        gl={{
          pixelRatio: window.devicePixelRatio * 0.5,
          alpha: true,
          toneMapping: NoToneMapping,
          localClippingEnabled,
          preserveDrawingBuffer: true
        }}
        linear
        id="canvas"
        frameloop="demand"
        camera={{ manual: true, position: [3, 3, 3] }}
      >
        <Physics gravity={[0, 0, 0]}>
          <Suspense fallback={null}>{!snapIsLoading && <Detector />}</Suspense>
          <Suspense fallback={null}>
            <Axis />
            <Event />
            <Grid />
            <ParticleSystem />
            <StatsDispatcher />
          </Suspense>
          <Raycast />
          <Lights />
          <Camera />
          <Controls />
        </Physics>
      </Canvas>
      <Loader containerStyles={{ backgroundColor: "transparent" }} />
    </>
  );
}

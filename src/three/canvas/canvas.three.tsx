import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import { lazy, Suspense } from "react";

import { NoToneMapping } from "three";

import { useAppSelector } from "@store/hooks";

import { selectDefaultCameraPosition } from "@features/camera/cameraSlice";
import {
  selectGeometriesCutType,
  selectSnapIsLoading
} from "@features/model/modelSlice";

import Camera from "@three/camera/Camera.three";
import Loader from "@three/customLoader/customLoader.three";
import Lights from "@three/light/Light.three";
import Raycast from "@three/raycast/Raycast.three";

const Detector = lazy(() => import("@three/detector/Detector.three"));
const Controls = lazy(() => import("@three/controls/Controls.three"));
const Axis = lazy(() => import("@three/axis/Axis.three"));
const Grid = lazy(() => import("@three/grid/Grid.three"));
const Event = lazy(() => import("@three/event/event/Event.three"));
const ParticleSystem = lazy(() => import("@three/particle-system/ParticleSystem"));
const StatsDispatcher = lazy(() => import("@three/stats/Stats.three"));

export default function Scene(): JSX.Element {
  const cutType = useAppSelector(selectGeometriesCutType);
  const snapIsLoading = useAppSelector(selectSnapIsLoading);
  const defaultPosition = useAppSelector(selectDefaultCameraPosition);
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
        camera={{ manual: true, position: defaultPosition }}
      >
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
        <Suspense fallback={null}>
          <Physics gravity={[0, 0, 0]}>
            <Camera />
            <Controls />
          </Physics>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}

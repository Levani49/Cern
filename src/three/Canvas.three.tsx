import Camera from "#/three/Camera.three";
import Loader from "#/three/CustomLoader.three";
import Detector from "#/three/Detector.three";
import Grid from "#/three/Grid.three";
import Lights from "#/three/Light.three";
import Raycast from "#/three/Raycast.three";
import { NoToneMapping } from "three";

import { Canvas } from "@react-three/fiber";
import { lazy, Suspense } from "react";

import { selectDefaultCameraPosition } from "#/store/features/cameraSlice";
import {
  selectGeometriesCutType,
  selectSnapIsLoading,
} from "#/store/features/modelSlice";
import { useAppSelector } from "#/store/hooks";

const Controls = lazy(() => import("#/three/Controls.three"));
const Axis = lazy(() => import("#/three/Axis.three"));
const Event = lazy(() => import("#/three/event/EventVisualisation.three"));
const ParticleSystem = lazy(
  () => import("#/three/particle-animation/ParticleSystem")
);
const StatsDispatcher = lazy(() => import("#/three/Stats.three"));

export default function Scene() {
  const defaultPosition = useAppSelector(selectDefaultCameraPosition);
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
          preserveDrawingBuffer: true,
        }}
        linear
        id="canvas"
        frameloop="always"
        camera={{ manual: true, position: defaultPosition }}
      >
        <Raycast />
        <Lights />
        <Grid />
        <Suspense fallback={null}>{!snapIsLoading && <Detector />}</Suspense>
        <Suspense fallback={null}>
          <Axis />
          <Event />
          <ParticleSystem />
          <StatsDispatcher />
        </Suspense>
        <Suspense fallback={null}>
          <Camera />
          <Controls />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}

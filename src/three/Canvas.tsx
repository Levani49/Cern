import Camera from "#/three/Camera";
import Loader from "#/three/CustomLoader";
import Detector from "#/three/Detector";
import Grid from "#/three/Grid";
import Lights from "#/three/Light";
import Raycast from "#/three/Raycast";
import { NoToneMapping } from "three";

import { Canvas } from "@react-three/fiber";
import { lazy, Suspense } from "react";

import { selectDefaultCameraPosition } from "#/store/features/cameraSlice";
import {
  selectGeometriesCutType,
  selectSnapIsLoading,
} from "#/store/features/modelSlice";
import { useAppSelector } from "#/store/hooks";

const Controls = lazy(() => import("#/three/Controls"));
const Axis = lazy(() => import("#/three/Axis"));
const Event = lazy(() => import("#/three/event/EventVisualisation"));
const ParticleSystem = lazy(
  () => import("#/three/particle-animation/ParticleSystem")
);
const StatsDispatcher = lazy(() => import("#/three/Stats"));

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

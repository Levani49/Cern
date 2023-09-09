import Camera from "#/three/camera/Camera.three";
import Loader from "#/three/customLoader/customLoader.three";
import Grid from "#/three/grid/Grid.three";
import Lights from "#/three/light/Light.three";
import Raycast from "#/three/raycast/Raycast.three";
import { NoToneMapping } from "three";

import { Canvas } from "@react-three/fiber";
import { lazy, Suspense } from "react";

import { useAppSelector } from "#/store/hooks";
import { selectDefaultCameraPosition } from "#/features/camera/cameraSlice";
import {
  selectGeometriesCutType,
  selectSnapIsLoading,
} from "#/features/model/modelSlice";

const Detector = lazy(() => import("#/three/detector/Detector.three"));
const Controls = lazy(() => import("#/three/controls/Controls.three"));
const Axis = lazy(() => import("#/three/axis/Axis.three"));
const Event = lazy(() => import("#/three/event/event/Event.three"));
const ParticleSystem = lazy(() => import("#/three/particle-system/ParticleSystem"));
const StatsDispatcher = lazy(() => import("#/three/stats/Stats.three"));

export default function Scene() {
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

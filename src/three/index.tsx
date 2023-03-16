import { Suspense, lazy } from "react";
import { NoToneMapping } from "three";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";

import Lights from "./Light.three";
import Controls from "./Controls.three";
import Detector from "./detector-parts/Detector.three";

const Fog = lazy(() => import("./Fog.three"));
const Axis = lazy(() => import("./Axis.three"));
const CustomGrid = lazy(() => import("./Grid.three"));
const Environment = lazy(() => import("./Environment.three"));
const StatsDispatcher = lazy(() => import("./Stats.three"));
const ParticleSystem = lazy(() => import("./particle-system/index.three"));

/**
 * Main scene of application
 *
 * @returns { JSX.Element } JSX.ELement
 */
export default function Scene(): JSX.Element {
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
          <Suspense>
            <Fog />
            <CustomGrid />
            <Environment />
            <ParticleSystem />
            <Axis />
            <StatsDispatcher />
          </Suspense>
          <Controls />
        </Physics>
      </Canvas>
    </>
  );
}

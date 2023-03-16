import { Suspense, lazy } from "react";
import { NoToneMapping } from "three";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";

import Lights from "./Light.three";
import Fog from "./Fog.three";
import StatsDispatcher from "./Stats.three";

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
          <Suspense>
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
        </Physics>
      </Canvas>
    </>
  );
}

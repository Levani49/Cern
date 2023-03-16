import { Suspense, lazy } from "react";
import { NoToneMapping } from "three";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";

import Lights from "./Light.three";
import Controls from "./Controls.three";
import Fog from "./Fog.three";
import Axis from "./Axis.three";
import CustomGrid from "./Grid.three";
import Environment from "./Environment.three";
import StatsDispatcher from "./Stats.three";
import ParticleSystem from "./particle-system/index.three";

const Detector = lazy(() => import("./Detector.three"));

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
          <CustomGrid />
          <Environment />
          <ParticleSystem />
          <Axis />
          <StatsDispatcher />
          <Controls />
        </Physics>
      </Canvas>
    </>
  );
}

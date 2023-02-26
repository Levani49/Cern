import { Suspense } from "react";
import { NoToneMapping } from "three";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

import Fog from "./Fog.three";
import Lights from "./Light.three";
import CustomGrid from "./Grid.three";
import Controls from "./Controls.three";
import EnvironmentThree from "./Environment.three";
import Detector from "./detector-parts/Detector.three";
import StatsDispatcher from "./Stats.three";

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
          <Fog />
          <Suspense fallback={null}>
            <Detector />
          </Suspense>
          <CustomGrid />
          <Controls />
          <EnvironmentThree />
        </Physics>
        <StatsDispatcher />
      </Canvas>
      <Loader />
    </>
  );
}

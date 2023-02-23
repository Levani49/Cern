import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader, Stats } from "@react-three/drei";
import { NoToneMapping } from "three";

import Lights from "./Light.three";
import Fog from "./Fog.three";
import CustomGrid from "./Grid.three";
import Controls from "./Controls.three";
import EnvironmentThree from "./Environment.three";
import Detector from "./detector-parts/Detector.three";
/**
 *
 */
export default function Scene(): JSX.Element {
  return (
    <>
      <Canvas gl={{ pixelRatio: window.devicePixelRatio * 0.5, alpha: true, toneMapping: NoToneMapping }} linear>
        <Lights />
        <Fog />
        <Suspense fallback={null}>
          <Detector />
        </Suspense>
        <CustomGrid />
        <Controls />
        <EnvironmentThree />
        <Stats />
      </Canvas>
      <Loader />
    </>
  );
}

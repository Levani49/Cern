import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import Lights from "./Light.three";
import Camera from "./Camera.three";
import Fog from "./Fog.three";
import CustomGrid from "./Grid.three";
import CustomOrbitControls from "./OrbitControls.three";
import EnvironmentThree from "./Environment.three";

import Detector from "./detector-parts/Detector.three";

/**
 *
 */
export default function Scene(): JSX.Element {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Canvas gl={{ pixelRatio: window.devicePixelRatio * 0.5 }}>
        <Lights />
        <Camera />
        <Fog />
        <Detector />
        <CustomGrid />
        <CustomOrbitControls />
        <EnvironmentThree />
      </Canvas>
    </Suspense>
  );
}

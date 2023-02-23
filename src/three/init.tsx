import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { NoToneMapping } from "three";

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
    <>
      <Canvas gl={{ pixelRatio: window.devicePixelRatio * 0.5, alpha: true, toneMapping: NoToneMapping }} linear>
        <Lights />
        <Camera />
        <Fog />
        <Suspense fallback={null}>
          <Detector />
        </Suspense>
        <CustomGrid />
        <CustomOrbitControls />
        <EnvironmentThree />
      </Canvas>
      <Loader />
    </>
  );
}

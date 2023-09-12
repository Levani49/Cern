import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";

import { validateEnvironmentVariables } from "#/utils/validateEnvironmentVariables";
import ModelInformation from "#/components/modals/modelInformation/ModelInformation.component";
import Navigation from "#/components/navigation/Navigation";
import ScreenRecording from "#/components/ScreenRecording";
import FlyOverlay from "#/components/three/FlyGraph";
import FlyStats from "#/components/three/FlyStats";
import Stats from "#/components/three/Stats";
import Tree from "#/components/tree/tree/Tree";

const Canvas = lazy(() => import("#/three/Canvas.three"));
const Logo = lazy(() => import("#/components/Logo.component"));

export default function App() {
  validateEnvironmentVariables();

  return (
    <>
      <Navigation />
      <main className="absolute left-0 top-0 z-10 h-screen w-screen">
        <Suspense fallback={null}>
          <Canvas />
          <Logo />
        </Suspense>
      </main>
      <ModelInformation />
      <Tree />
      <Stats />
      <FlyOverlay />
      <FlyStats />
      <ScreenRecording />
      <Toaster position="top-right" />
    </>
  );
}

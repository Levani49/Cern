import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";

import { validateEnvironmentVariables } from "#/utils/validateEnvironmentVariables";
import Navigation from "#/components/navigation/Navigation";
import ScreenRecording from "#/components/ScreenRecording";
import FlyOverlay from "#/components/three/FlyGraph";
import FlyStats from "#/components/three/FlyStats";
import Stats from "#/components/three/Stats";
import Tree from "#/components/tree/tree/Tree";

const Canvas = lazy(() => import("#/three/Canvas"));
const Logo = lazy(() => import("#/components/Logo.component"));
const ModelInformation = lazy(
  () => import("#/components/modals/modelInformation/ModelInformation.component")
);

export default function App() {
  validateEnvironmentVariables();

  return (
    <>
      <Navigation />
      <main className="absolute left-0 top-0 z-10 h-screen w-screen">
        <Suspense fallback={null}>
          <Canvas />
          <Logo />
          <ModelInformation />
        </Suspense>
      </main>
      <Tree />
      <Stats />
      <FlyOverlay />
      <FlyStats />
      <ScreenRecording />
      <Toaster position="top-right" />
    </>
  );
}

import { lazy, Suspense } from "react";

import ErrorHandler from "@components/error/ErrorHandler.component";
import Navigation from "@components/navigation/navigation";
import VideoPulse from "@components/screen-recording/screenRecording.component";
import FlyOverlay from "@components/three/fly-graph/FlyGraph.component";
import Stats from "@components/three/stats/Stats.component";
import Tree from "@components/tree/tree/Tree.component";

const Canvas = lazy(() => import("@three/canvas/canvas.three"));
const Logo = lazy(() => import("@components/logo/Logo.component"));
const ModelInformationContainer = lazy(
  () =>
    import("@components/modal/modelInformation/ModelInformationContainer.component")
);

export default function App(): JSX.Element {
  return (
    <ErrorHandler>
      <header className="fixed top-0 z-50 flex w-full flex-auto select-none flex-col items-center justify-center">
        <Navigation />
      </header>
      <main className="absolute left-0 top-0 z-10 h-full w-full">
        <Suspense fallback={null}>
          <Canvas />
          <Logo />
          <ModelInformationContainer />
        </Suspense>
      </main>
      <Tree />
      <Stats />
      <FlyOverlay />
      <VideoPulse />
    </ErrorHandler>
  );
}

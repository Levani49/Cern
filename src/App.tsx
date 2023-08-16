import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";

import ErrorHandler from "@components/error/ErrorHandler.component";
import Header from "@components/navigation/navigation";
import VideoPulse from "@components/screen-recording/screenRecording.component";
import FlyStats from "@components/three/fly-graph/fly-stats.component";
import FlyOverlay from "@components/three/fly-graph/FlyGraph.component";
import Stats from "@components/three/stats/Stats.component";
import Tree from "@components/tree/tree/Tree.component";

const Canvas = lazy(() => import("@three/canvas/canvas.three"));
const Logo = lazy(() => import("@components/logo/Logo.component"));
const ModelInformation = lazy(
  () => import("@components/modal/modelInformation/ModelInformation.component")
);

export default function App(): JSX.Element {
  return (
    <ErrorHandler>
      <Header />
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
      <VideoPulse />
      <Toaster position="top-right" />
    </ErrorHandler>
  );
}

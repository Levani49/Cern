import { lazy, Suspense } from "react";

import VideoPulse from "@/components/screen-recording/screenRecording.component";

import ErrorHandler from "./components/error/ErrorHandler.component";
import ModelInfo from "./components/modal/modelInfo/ModelInfo.component";
import Navigation from "./components/navigation/navigation";
import FlyOverlay from "./components/three/fly-graph/FlyGraph.component";
import Stats from "./components/three/stats/Stats.component";
import { selectDroneState } from "./features/camera/cameraSlice";
import { useAppSelector } from "./store/hooks";

const Canvas = lazy(() => import("./three/canvas/canvas.three"));
const Tree = lazy(() => import("./components/tree/tree/Tree.component"));
const Logo = lazy(() => import("./components/logo/Logo.component"));

function App(): JSX.Element {
  const droneMode = useAppSelector(selectDroneState);

  const zIndex = droneMode === "fly" ? "z-[99999]" : "z-10";

  return (
    <ErrorHandler>
      <div className="flex">
        <Navigation />
      </div>
      <div className={`absolute ${zIndex} left-0 top-0 h-full w-full`}>
        <div className="absolute top-14 z-[2002] max-h-[80%]  overflow-y-auto bg-transparent">
          <Suspense>
            <Tree />
          </Suspense>
        </div>
        <FlyOverlay />
        <Stats />
        <ModelInfo />
        <Suspense>
          <Canvas />
          <Logo />
        </Suspense>
      </div>
      <VideoPulse />
    </ErrorHandler>
  );
}

export default App;

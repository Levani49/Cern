import { lazy, Suspense } from "react";

import Navigation from "./components/navigation/Index";
import PreloadImage from "./components/PreloadImage.component";
import Scene from "./three";
import FlyOverlay from "./components/three/FlyGraph.component";
import Stats from "./components/three/Stats.component";
import Logo from "./components/logo/Logo.component";

const Tree = lazy(() => import("./components/tree/Tree.component"));
/**
 * Entry point of the app
 *
 * @returns {JSX.Element} JSX Element.
 */
function App(): JSX.Element {
  return (
    <>
      <PreloadImage src="https://tracer-evd-mc.web.cern.ch/css/images/Tracer-Logo2022.png" />
      <div className="flex">
        <Navigation />
      </div>
      <div className="absolute z-10 w-full h-full top-0 left-0">
        <div className="bg-transparent absolute z-[2002] top-10 left-10">
          <Suspense>
            <Tree />
          </Suspense>
        </div>
        <Scene />
        <FlyOverlay />
        <Stats />
        <Logo />
      </div>
    </>
  );
}

export default App;

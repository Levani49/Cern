import { lazy, Suspense } from "react";

import Navigation from "./components/navigation/Index";
import Scene from "./three";

const FlyOverlay = lazy(() => import("./components/three/FlyGraph.component"));
const Stats = lazy(() => import("./components/three/Stats.component"));
const Tree = lazy(() => import("./components/tree/Tree.component"));
const Logo = lazy(() => import("./components/logo/Logo.component"));
const Test = lazy(() => import("./components/test.component"));

/**
 * Entry point of the app
 *
 * @returns {JSX.Element} JSX Element.
 */
function App(): JSX.Element {
  return (
    <>
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
        <Suspense>
          <FlyOverlay />
          <Stats />
          <Test />
          <Logo />
        </Suspense>
      </div>
    </>
  );
}

export default App;

// Components
import Navigation from "./components/navigation/Index";
import FlyOverlay from "./components/three/FlyGraph.component";

// Three
import Scene from "./three";
import Stats from "./components/three/Stats.component";
import Tree from "./components/tree/Tree.component";
import Logo from "./components/logo/Logo.component";
import Test from "./components/test.component";

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
          <Tree />
        </div>
        <Scene />
        <FlyOverlay />
        <Stats />
        <Test />
        <Logo />
      </div>
    </>
  );
}

export default App;

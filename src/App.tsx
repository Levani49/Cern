// Components
import Navigation from "./components/navigation/Navigation.component";
import FlyOverlay from "./components/FlyGraph.component";

// Three
import Scene from "./three";
import Stats from "./components/Stats.component";

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
        <Scene />
        <FlyOverlay />
        <Stats />
      </div>
    </>
  );
}

export default App;

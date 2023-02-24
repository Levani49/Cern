import { useEffect } from "react";

// Components
import Navigation from "./components/navigation/Navigation.component";

// Three
import Scene from "./three/init";
// import preLoadAllModel from "./utils/preloadModels";

/**
 * Entry point of the app
 *
 * @returns {JSX.Element} JSX Element.
 */
function App(): JSX.Element {
  useEffect(() => {
    // preLoadAllModel();
  }, []);

  return (
    <>
      <div className="flex">
        <Navigation />
      </div>
      <div className="absolute z-10 w-full h-full top-0 left-0">
        {/* <h1 className="flex bg-transparent absolute z-50 color-white left-1/2 top-1/2">Press W/A/S/D</h1> */}
        <Scene />
      </div>
    </>
  );
}

export default App;

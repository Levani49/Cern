import { useEffect } from "react";

// Components
import Navigation from "./components/navigation/Navigation.component";

// Three
import Scene from "./three/init";
import preLoadAllModel from "./utils/preloadModels";

/**
 * Entry point of the app
 *
 * @returns {JSX.Element} JSX Element.
 */
function App(): JSX.Element {
  useEffect(() => {
    preLoadAllModel();
  }, []);

  return (
    <>
      <div className="flex">
        <Navigation />
      </div>
      <div className="absolute z-10 w-full h-full top-0 left-0">
        <Scene />
      </div>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";

// Components
import Navigation from "./components/navigation/Navigation.component";
import SettingsModal from "./components/modal/modals/settings/Settings.modal";

// Three
import Scene from "./three/init";
import preLoadAllModel from "./utils/preloadModels";

/**
 * Entry point of the app
 *
 * @returns {JSX.Element} JSX Element.
 */
function App(): JSX.Element {
  const [show, setShow] = useState(true);

  useEffect(() => {
    preLoadAllModel();
  }, []);

  return (
    <>
      <div className="flex">
        <Navigation />
      </div>
      <SettingsModal show={show} onClose={(): void => setShow(!show)} />
      <div className="absolute w-full h-full top-0 left-0">
        <Scene />
      </div>
    </>
  );
}

export default App;

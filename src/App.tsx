import { lazy, Suspense } from 'react';

import Navigation from './components/navigation/navigation';
import FlyOverlay from './components/three/fly-graph/FlyGraph.component';
import Stats from './components/three/stats/Stats.component';
import ModelInfo from './components/modal/modelInfo/ModelInfo.component';

import { useAppSelector } from './app/hooks';
import { selectDroneState } from './features/camera/cameraSlice';

const Canvas = lazy(() => import('./three/canvas/canvas.three'));
const Tree = lazy(() => import('./components/tree/tree/Tree.component'));
const Logo = lazy(() => import('./components/logo/Logo.component'));

function App(): JSX.Element {
  const droneMode = useAppSelector(selectDroneState);

  return (
    <>
      <div className="flex">
        <Navigation />
      </div>
      <div
        className={`absolute ${
          droneMode === 'fly' ? 'z-[99999]' : 'z-10'
        } w-full h-full top-0 left-0`}
      >
        <div className="bg-transparent absolute z-[2002] top-14  max-h-[80%] overflow-y-auto">
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
    </>
  );
}

export default App;

import { Suspense, lazy, useEffect } from 'react';
import { NoToneMapping } from 'three';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Loader } from '@react-three/drei';

import { useAppDispatch } from '../app/hooks';
import { updateModelsLoadingState } from '../features/model/modelSlice';
import useLoadingStatus from '../hooks/useLoading/useLoading';

import Lights from './Light.three';
import Fog from './Fog.three';
import StatsDispatcher from './Stats.three';
import Background from './Background.three';
import Camera from './Camera.three';
import ErrorHandler from '../components/error/ErrorHandler.component';

const Detector = lazy(() => import('./Detector.three'));
const Environment = lazy(() => import('./Environment.three'));
const ParticleSystem = lazy(() => import('./particle-system/index.three'));
const Controls = lazy(() => import('./Controls.three'));
const Axis = lazy(() => import('./Axis.three'));
const Grid = lazy(() => import('./Grid.three'));
const Events = lazy(() => import('./events/Event.three'));

/**
 * Main scene of application
 *
 * @returns { JSX.Element } JSX.ELement
 */
export default function Scene(): JSX.Element {
  const dispatch = useAppDispatch();
  const { isLoading, isLoaded } = useLoadingStatus();

  useEffect(() => {
    if (isLoading) {
      dispatch(updateModelsLoadingState('loading'));
    } else if (isLoaded) {
      dispatch(updateModelsLoadingState('idle'));
    }
  }, [isLoading, isLoaded, dispatch]);

  return (
    <ErrorHandler>
      <Canvas
        gl={{
          pixelRatio: window.devicePixelRatio * 0.5,
          alpha: true,
          toneMapping: NoToneMapping,
        }}
        linear
      >
        <Physics gravity={[0, 0, 0]}>
          <Suspense fallback={null}>
            <Detector />
            <Events />
          </Suspense>
          {isLoaded && (
            <>
              <Background />
              <Fog />
              <Suspense>
                <Axis />
              </Suspense>
              <StatsDispatcher />
            </>
          )}
          <Lights />
          <Camera />
          <Grid />
          <Environment />
          <Controls />
          <ParticleSystem />
        </Physics>
      </Canvas>
      <Loader containerStyles={{ backgroundColor: 'transparent' }} />
    </ErrorHandler>
  );
}

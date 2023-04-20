import { Suspense, lazy, useEffect } from 'react';
import { NoToneMapping } from 'three';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Loader } from '@react-three/drei';

import { updateModelsLoadingState } from '../features/model/modelSlice';

import { useAppDispatch } from '../app/hooks';
import useLoadingStatus from '../hooks/useLoading/useLoading';

import Lights from './Light.three';
import Fog from './Fog.three';
import StatsDispatcher from './Stats.three';
import Background from './Background.three';
import Camera from './Camera.three';
import ErrorHandler from '../components/error/ErrorHandler.component';
import XmlService from '../services/xml/Xml.service';
import { setXmlGeneralInfo } from '../features/events/eventsSlice';

const Detector = lazy(() => import('./Detector.three'));
const Environment = lazy(() => import('./Environment.three'));
const ParticleSystem = lazy(() => import('./particle-system/index.three'));
const Controls = lazy(() => import('./Controls.three'));
const Axis = lazy(() => import('./Axis.three'));
const Grid = lazy(() => import('./Grid.three'));

const xmlService = new XmlService();

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

  useEffect(() => {
    const asyncCallback = async (): Promise<void> => {
      const xml = await xmlService.fetch('groupA/event005');
      const info = xmlService.getXmlGeneralInfo(xml);

      if (info) {
        dispatch(setXmlGeneralInfo(info));
      } else {
        throw new Error(
          'Error while fetching events, please refresh the page or try again later...',
        );
      }
    };
    asyncCallback();
  }, [dispatch]);

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

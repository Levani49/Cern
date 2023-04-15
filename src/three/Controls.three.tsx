import { OrbitControls } from '@react-three/drei';
import { useEffect, useMemo } from 'react';
import { useThree } from '@react-three/fiber';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  selectDroneState,
  setCamera,
  selectCameraPosition,
} from '../features/camera/cameraSlice';

import Player from './Player.three';

/**
 * Renders either an `OrbitControls` or a `Player` component based on the drone type.
 *
 * @returns {JSX.Element} The controls component.
 */
export default function Controls(): JSX.Element {
  const dispatch = useAppDispatch();
  const { camera } = useThree();
  const droneType = useAppSelector(selectDroneState);
  const position = useAppSelector(selectCameraPosition);

  const cameraPosition = useMemo(() => {
    return position;
  }, [position]);

  useEffect(() => {
    dispatch(setCamera(camera));
    camera.position.set(...cameraPosition);
  }, [cameraPosition]);

  const rotate = droneType === 'circle';
  const isFreeFly = droneType === 'fly';
  const enable = droneType === 'circle' || droneType === 'idle';

  if (isFreeFly) {
    return (
      <Player
        currentCameraPosition={[
          camera.position.x,
          camera.position.y,
          camera.position.z,
        ]}
      />
    );
  }

  return <OrbitControls makeDefault autoRotate={rotate} enabled={enable} />;
}

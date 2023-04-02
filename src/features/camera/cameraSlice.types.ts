import { Camera } from '@react-three/fiber';
import { DroneTypes } from '../../types/app.types';

export type ViewModes = 'default' | 'left' | 'right';

export interface ICameraSettings {
  position: [number, number, number];
  currentState: DroneTypes;
  droneType: DroneTypes;
  camera: Camera | null;
  showFlyModal: boolean;
  viewMode: ViewModes;
}

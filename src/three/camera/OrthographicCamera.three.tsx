import { useMemo } from 'react';
import { Camera, Vector3, Matrix4, Euler } from 'three';
import { OrthographicCamera } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

import { selectCameraType } from '../../features/camera/cameraSlice';
import { useAppSelector } from '../../app/hooks';

interface CalculateReturns {
  left: number;
  right: number;
  top: number;
  bottom: number;
  position: Vector3;
  matrix: Matrix4;
  rotation: Euler;
}

function calculateOrthoDimensions(camera: Camera, width: number, height: number): CalculateReturns {
  const cameraMatrix = camera.matrix.clone();
  const cameraPosition = camera.position;
  const lineOfSight = new Vector3();

  camera.getWorldDirection(lineOfSight);

  const distance = new Vector3(0, 0, 0).clone().sub(cameraPosition);
  const depth = distance.dot(lineOfSight);

  const aspect = width / height;
  const heightOrtho = depth * 2 * Math.atan((75 * (Math.PI / 180)) / 2);
  const widthOrtho = heightOrtho * aspect;

  return {
    left: widthOrtho / -2,
    right: widthOrtho / 2,
    top: heightOrtho / 2,
    bottom: heightOrtho / -2,
    position: cameraPosition,
    matrix: cameraMatrix,
    rotation: camera.rotation,
  };
}

export default function OrthographicCam(): JSX.Element {
  const cameraType = useAppSelector(selectCameraType);
  const { size, camera } = useThree();

  const orthoDimensions = useMemo(
    () => calculateOrthoDimensions(camera, size.width, size.height),
    [camera, size],
  );

  camera.lookAt(0, 0, 0);

  return (
    <>
      {cameraType === 'orthographic' && (
        <OrthographicCamera zoom={0.3} far={1000} near={0.01} {...orthoDimensions} makeDefault />
      )}
    </>
  );
}

import { useMemo } from 'react';
import { Camera, useThree } from '@react-three/fiber';
import { useAppSelector } from '../../app/hooks';
import { selectCameraType } from '../../features/camera/cameraSlice';

import { OrthographicCamera } from '@react-three/drei';
import { Vector3 } from 'three';

interface CalculateReturns {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

function calculateOrthoDimensions(camera: Camera, width: number, height: number): CalculateReturns {
  const objectPosition = new Vector3(0, 0, 0);
  const lineOfSight = new Vector3();
  camera.getWorldDirection(lineOfSight);

  const objectDistance = objectPosition.clone().sub(camera.position);
  const depth = objectDistance.dot(lineOfSight);
  const heightOrtho = depth * 2 * Math.atan((75 * (Math.PI / 180)) / 2);

  const aspect = width / height;
  const frustumSize = heightOrtho;

  return {
    left: (-frustumSize * aspect) / 2,
    right: (frustumSize * aspect) / 2,
    top: frustumSize / 2,
    bottom: -frustumSize / 2,
  };
}

export default function CameraOrtho(): JSX.Element {
  const cameraType = useAppSelector(selectCameraType);
  const { size, camera } = useThree();

  const orthoDimensions = useMemo(
    () => calculateOrthoDimensions(camera, size.width, size.height),
    [camera, size],
  );

  return (
    <>
      {cameraType === 'orthographic' && (
        <OrthographicCamera
          position={[0, 0, 10]}
          zoom={1}
          far={10000}
          near={-10000}
          {...orthoDimensions}
          makeDefault
        />
      )}
    </>
  );
}

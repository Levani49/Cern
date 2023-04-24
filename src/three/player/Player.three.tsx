import { useEffect, useRef } from 'react';
import { BufferGeometry, Material, Mesh, Vector3 } from 'three';
import { useSphere } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber';
import { PointerLockControls } from '@react-three/drei';

import { setDroneMode } from '../../features/camera/cameraSlice';
import { usePlayerControls } from '../../hooks/usePlayercontrols/usePlayerControls';

import store from '../../app/store';
interface Props {
  currentCameraPosition: [number, number, number];
}

const SPEED = 5;

/**
 * A 3D player object that can move forward, backward, left, and right in 3D space
 *
 * @param {Props} props - Component props
 * @param {Array<number>} props.currentCameraPosition - Current camera position in 3D space
 * @returns {JSX.Element} The player component
 */
export default function Player({ currentCameraPosition }: Props): JSX.Element {
  // Get the camera and player controls
  const { camera } = useThree();
  const { moveForward, moveBackward, moveLeft, moveRight } = usePlayerControls();
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: 'Dynamic',
    position: [...currentCameraPosition],
  }));

  // Set the player's velocity based on the movement controls
  const velocity = useRef([...currentCameraPosition]);
  useEffect(() => {
    api.velocity.subscribe((v) => (velocity.current = v));
  }, [api.velocity]);

  useFrame(() => {
    if (ref.current) {
      ref.current.getWorldPosition(camera.position);
    }
    const direction = new Vector3();

    const frontVector = new Vector3(0, 0, Number(moveBackward) - Number(moveForward));
    const sideVector = new Vector3(Number(moveLeft) - Number(moveRight), 0, 0);

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, direction.y, direction.z);
  });

  /**
   * Handle palyer cancelation
   *
   * @returns { void } void
   */
  const hadnelCancel = (): void => {
    store.dispatch(setDroneMode('idle'));
  };

  return (
    <>
      <PointerLockControls onUnlock={hadnelCancel} />
      <mesh ref={ref as React.MutableRefObject<Mesh<BufferGeometry, Material | Material[]>>}></mesh>
    </>
  );
}

import { useEffect, useRef } from "react";
import { BufferGeometry, Material, Mesh, Vector3 } from "three";
import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";

import { usePlayerControls } from "../hooks/playerControls.hook";
import { droneMode } from "../features/droneSlice";
import store from "../app/store";

interface Props {
  currentCameraPosition: [number, number, number];
}

const SPEED = 5;

/**
 *
 * @param root0
 * @param root0.cameraPosition
 * @param root0.currentCameraPosition
 */
export default function Player({ currentCameraPosition }: Props): JSX.Element {
  const { camera } = useThree();
  const { moveForward, moveBackward, moveLeft, moveRight } = usePlayerControls();
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [...currentCameraPosition],
  }));

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

    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(camera.rotation);

    api.velocity.set(direction.x, direction.y, direction.z);
  });

  /**
   *
   */
  const hadnelCancel = (): void => {
    store.dispatch(droneMode("idle"));
  };

  return (
    <>
      <PointerLockControls onUnlock={hadnelCancel} />
      <mesh ref={ref as React.MutableRefObject<Mesh<BufferGeometry, Material | Material[]>>}></mesh>
    </>
  );
}

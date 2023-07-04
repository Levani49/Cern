import { useSphere } from "@react-three/cannon";
import { PointerLockControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

import { BufferGeometry, Material, Mesh, Vector3 } from "three";

import store from "@store/store";

import { setDroneMode } from "@features/camera/cameraSlice";

import { usePlayerControls } from "@hooks/usePlayercontrols/usePlayerControls";

interface Props {
  currentCameraPosition: [number, number, number];
}

const SPEED = 2.25;

export default function PlayerControl({
  currentCameraPosition
}: Props): JSX.Element {
  // Get the camera and player controls
  const { camera } = useThree();
  const { moveForward, moveBackward, moveLeft, moveRight } = usePlayerControls();
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [...currentCameraPosition]
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

    const frontVector = new Vector3(
      0,
      0,
      Number(moveBackward) - Number(moveForward)
    );
    const sideVector = new Vector3(Number(moveLeft) - Number(moveRight), 0, 0);

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, direction.y, direction.z);
  });

  const hadnelCancel = (): void => {
    store.dispatch(setDroneMode("idle"));
  };

  return (
    <>
      <PointerLockControls onUnlock={hadnelCancel} />
      <mesh
        ref={
          ref as React.MutableRefObject<Mesh<BufferGeometry, Material | Material[]>>
        }
      ></mesh>
    </>
  );
}

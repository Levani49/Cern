import { FlyControls } from "@react-three/drei";
import { Camera, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

import { Clock, Matrix4, Quaternion, Vector3 } from "three";

export default function FlyControl(): JSX.Element {
  const { camera } = useThree();
  const clockRef = useRef<Clock>(new Clock());
  const isPointerDown = useRef<"forward" | "backward" | "idle">("idle");

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent): void => {
      if (e.button === 0) {
        isPointerDown.current = "forward";
      } else {
        isPointerDown.current = "backward";
      }
    };

    const handleMouseUp = (): void => {
      isPointerDown.current = "idle";
    };

    const handleAxisCorrection = (e: KeyboardEvent): void => {
      if (e.key === " ") {
        correctCameraQuaternion(camera);
      }
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("keydown", handleAxisCorrection);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("keydown", handleAxisCorrection);
    };
  }, [camera]);

  useFrame(() => {
    const delta = clockRef.current.getDelta();
    const movementSpeed = isPointerDown.current === "forward" ? 1 : -1;

    const direction = new Vector3();
    camera.getWorldDirection(direction);

    const movementVector = direction.clone().multiplyScalar(movementSpeed * delta);

    if (camera && isPointerDown.current !== "idle") {
      camera.position.add(movementVector);
    }
  });

  return (
    <>
      <FlyControls
        dragToLook={true}
        movementSpeed={1}
        rollSpeed={1.25}
        makeDefault
      />
    </>
  );
}

function correctCameraQuaternion(camera: Camera): void {
  const targetPosition = new Vector3(0, 0, 0);
  const speed = 2;
  const thresholdAngle = 0.01;
  const clock = new Clock();

  function animate(): void {
    const request = window.requestAnimationFrame(animate);
    const delta = clock.getDelta();
    const currentPosition = camera.position;
    const currentQuaternion = camera.quaternion;

    const targetQuaternion = new Quaternion().setFromRotationMatrix(
      new Matrix4().lookAt(currentPosition, targetPosition, camera.up)
    );

    const angleDiff = currentQuaternion.angleTo(targetQuaternion);

    if (angleDiff <= thresholdAngle) {
      window.cancelAnimationFrame(request);
    } else {
      const step = speed * delta;
      camera.quaternion.rotateTowards(targetQuaternion, step);
    }
  }

  animate();
}

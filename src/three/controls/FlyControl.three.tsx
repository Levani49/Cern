import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

import { FlyControls } from "../lib/FlyControls";

export default function FlyControl() {
  const { camera, gl } = useThree();
  const controlsRef = useRef<FlyControls | null>(null);

  useEffect(() => {
    const controls = new FlyControls(camera, gl.domElement);
    controls.movementSpeed = 0.75;
    controls.rollSpeed = 1.25;
    controls.dragToLook = true;
    controlsRef.current = controls;

    return () => {
      if (controlsRef.current) {
        controlsRef.current.dispose();
      }
    };
  }, [camera, gl]);

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update(0.015);
    }
  });

  return <></>;
}

// export default function FlyControl() {
//   const { camera, controls } = useThree();
//   const clockRef = useRef<Clock>(new Clock());
//   const isPointerDown = useRef<"forward" | "backward" | "idle">("idle");

//   useEffect(() => {
//     const handleMouseDown = (e: MouseEvent): void => {
//       if (e.button === 0) {
//         isPointerDown.current = "forward";
//       } else {
//         correctCameraQuaternion(camera);
//       }
//     };

//     const handleMouseUp = (): void => {
//       isPointerDown.current = "idle";
//     };

//     const handleAxisCorrection = (e: KeyboardEvent): void => {
//       /* */
//     };

//     window.addEventListener("mousedown", handleMouseDown);
//     window.addEventListener("mouseup", handleMouseUp);

//     return () => {
//       window.removeEventListener("mousedown", handleMouseDown);
//       window.removeEventListener("mouseup", handleMouseUp);
//       window.removeEventListener("keydown", handleAxisCorrection);
//     };
//   }, [camera]);

//   useFrame(() => {
//     const delta = clockRef.current.getDelta();
//     if (camera && isPointerDown.current !== "idle") {
//       updateCameraPosition(camera, delta);
//     }
//   });

//   console.log(controls);

//   return (
//     <>
//       <FlyControls
//         dragToLook={true}
//         movementSpeed={0.75}
//         rollSpeed={1.25}
//         makeDefault
//       />
//     </>
//   );
// }

// function updateCameraPosition(camera: Camera, delta: number): void {
//   const movementSpeed = 1;

//   const direction = new Vector3();
//   camera.getWorldDirection(direction);

//   const movementVector = direction.clone().multiplyScalar(movementSpeed * delta);

//   camera.position.add(movementVector);
// }

// function correctCameraQuaternion(camera: Camera): void {
//   const targetPosition = new Vector3(0, 0, 0);
//   const speed = 2;
//   const thresholdAngle = 0.01;
//   const clock = new Clock();

//   function animate(): void {
//     const request = window.requestAnimationFrame(animate);
//     const delta = clock.getDelta();
//     const currentPosition = camera.position;
//     const currentQuaternion = camera.quaternion;

//     const targetQuaternion = new Quaternion().setFromRotationMatrix(
//       new Matrix4().lookAt(currentPosition, targetPosition, camera.up)
//     );

//     const angleDiff = currentQuaternion.angleTo(targetQuaternion);

//     if (angleDiff <= thresholdAngle) {
//       window.cancelAnimationFrame(request);
//     } else {
//       const step = speed * delta;
//       camera.quaternion.rotateTowards(targetQuaternion, step);
//     }
//   }

//   animate();
// }

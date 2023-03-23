import { useRef, useState } from "react";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

import Electron from "./Electron.three";

// import { useRef } from 'react'
// import { useFrame } from '@react-three/fiber'

/**
 *
 */
// export function Ship(): JSX.Element {
//   const exhaust = useRef()

//   useFrame(({ clock }) => {
//     if (exhaust.current) {
//       exhaust.current.scale.x = Math.sin(clock.getElapsedTime() * 20) / 100
//       exhaust.current.scale.y = Math.sin(clock.getElapsedTime() * 20) / 100
//     }
//   })

//   return (
//     <group>
//       <mesh ref={exhaust} scale={[0.0003, 0.0003, 0.5]} position={[0, 0, 0]}>
//         <dodecahedronGeometry args={[1.5, 0]} />
//         <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
//       </mesh>
//     </group>
//   )
// }

interface Props {
  onCollision: () => void;
}

/**
 *
 * @param root0
 * @param root0.cb
 * @param root0.onCollision
 */
export default function Collision({ onCollision }: Props): JSX.Element {
  const [show, setShow] = useState(true);
  const electron1Ref = useRef<Group>(null);
  const electron2Ref = useRef<Group>(null);
  let speed = 0.345;

  useFrame(() => {
    if (electron1Ref.current && electron2Ref.current && show) {
      if (electron1Ref.current.position.z < 0.001) {
        setShow(false);
        onCollision();
        speed = 0;
      }
      electron1Ref.current.position.z -= speed;
      electron2Ref.current.position.z += speed;
    }
  });

  return (
    <>
      {show && (
        <>
          <Electron position={[0, 0, 25.38]} ref={electron1Ref} />
          <Electron position={[0, 0, -25.38]} ref={electron2Ref} />
        </>
      )}
    </>
  );
}

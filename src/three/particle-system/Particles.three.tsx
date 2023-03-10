import { useEffect, useMemo, useRef, useState } from "react";
import { MathUtils, Object3D } from "three";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

import Electron from "./Electron.three";
import Collision from "./Collision.three";

/**
 *
 */
export default function Particles(): JSX.Element {
  const [show, setShow] = useState(true);
  const [explode, setExplode] = useState(false);
  const electronRefs = useRef<Array<Object3D | null>>([]);
  const iterationRef = useRef(1);

  useEffect(() => {
    console.log("Mounted", show);

    return () => console.log({ a: "UnMounted", show });
  });

  const electronArray = useMemo(() => {
    return new Array(600).fill(0, 0).map((_, index) => {
      const theta = MathUtils.randFloatSpread(360);
      const phi = MathUtils.randFloatSpread(360);
      const distance = 0.001;

      const x = distance * Math.sin(theta) * Math.cos(phi);
      const y = distance * Math.sin(theta) * Math.sin(phi);
      const z = distance * Math.cos(theta);

      return (
        <Electron
          key={index}
          position={[x, y, z]}
          size={[0.005]}
          ref={(ref: Object3D | null): Object3D | null =>
            (electronRefs.current[index] = ref)
          }
        />
      );
    });
  }, []);

  useFrame(() => {
    if (explode) {
      electronRefs.current.forEach((electron) => {
        if (electron) {
          const relativePosition = electron.position.clone();
          const direction = relativePosition.normalize();
          electron.position.addScaledVector(direction, 0.25);
          iterationRef.current += 1;
        }
      });

      // NUMBER OF ITERATION
      if (iterationRef.current > 80000) {
        setShow(false);
      }
    }
  });

  return (
    <>
      {show && (
        <Float speed={0} rotationIntensity={0} floatIntensity={0}>
          <Collision cb={(): void => setExplode(true)} />
          <group visible={explode ? true : false}>{electronArray}</group>
        </Float>
      )}
    </>
  );
}

import { useMemo, useRef, useState } from "react";
import { MathUtils, Object3D } from "three";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

import Electron from "./Electron.three";
import Collision from "./Collision.three";

interface Props {
  onFinish: () => void;
}

/**
 *
 * @param root0
 * @param root0.cb
 * @param root0.onFinish
 */
export default function Particles({ onFinish }: Props): JSX.Element {
  const [explode, setExplode] = useState(false);
  const electronRefs = useRef<Array<Object3D | null>>([]);
  const iterationRef = useRef(1);

  const electronArray = useMemo(() => {
    return new Array(500).fill(0, 0).map((_, index) => {
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
        }
      });

      iterationRef.current += 1;

      // NUMBER OF ITERATION
      if (iterationRef.current === 200) {
        onFinish();
      }
    }
  });

  return (
    <>
      <Float speed={0.2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Collision onCollision={(): void => setExplode(true)} />
        <group visible={explode ? true : false}>{electronArray}</group>
      </Float>
    </>
  );
}
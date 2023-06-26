import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";

import { setDrawEvents } from "@/features/event/eventSlice";
import { useAppDispatch } from "@/store/hooks";
import { MathUtils, Object3D } from "three";

import Collision from "./Collision.three";
import Electron from "./Electron.three";

interface Props {
  onFinish: () => void;
  electronSpeed: number;
  explosionSpeed: number;
}

const NUMBER_OF_ITERATION = 200;

export default function Particles({
  onFinish,
  electronSpeed,
  explosionSpeed
}: Props): JSX.Element {
  const [explode, setExplode] = useState(false);
  const dispatch = useAppDispatch();
  const electronRefs = useRef<Array<Object3D | null>>([]);
  const iterationRef = useRef(1);

  useEffect(() => {
    dispatch(setDrawEvents(false));
  }, [dispatch]);

  useEffect(() => {
    if (explode) {
      dispatch(setDrawEvents(true));
    }
  }, [explode, dispatch]);

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
  }, [onFinish]);

  useFrame(() => {
    if (explode) {
      electronRefs.current.forEach((electron) => {
        if (electron) {
          const relativePosition = electron.position.clone();
          const direction = relativePosition.normalize();
          electron.position.addScaledVector(direction, explosionSpeed);
        }
      });

      iterationRef.current += 1;

      if (iterationRef.current === NUMBER_OF_ITERATION) {
        onFinish();
      }
    }
  });

  return (
    <>
      <Float speed={0.07} rotationIntensity={0.5} floatIntensity={0.5}>
        <Collision
          onCollision={(): void => setExplode(true)}
          speed={electronSpeed}
        />
        <group visible={explode ? true : false}>{electronArray}</group>
      </Float>
    </>
  );
}

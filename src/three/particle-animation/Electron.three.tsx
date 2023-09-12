import { Group } from "three";

import { forwardRef, memo, Ref } from "react";

interface Props {
  position: [number, number, number];
  size?: [number];
  speed?: number;
}

/**
 *
 * @param root0
 * @param root0.radius
 * @param root0.speed
 * @param ref
 */
const Electron = forwardRef(({ position, size = [0.05] }: Props, ref) => {
  return (
    <group position={position} ref={ref as Ref<Group> | undefined}>
      <mesh>
        <sphereGeometry args={size} />
        <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
      </mesh>
    </group>
  );
});

Electron.displayName = "Electron";
memo(Electron);

export default Electron;

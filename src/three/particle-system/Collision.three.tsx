import { useRef, useState } from "react";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

import Electron from "./Electron.three";

interface Props {
  cb: () => void;
}

/**
 *
 * @param root0
 * @param root0.cb
 */
export default function Collision({ cb }: Props): JSX.Element {
  const [show, setShow] = useState(true);
  const electron1Ref = useRef<Group>(null);
  const electron2Ref = useRef<Group>(null);
  let speed = 0.15;

  useFrame(() => {
    if (electron1Ref.current && show) {
      if (electron1Ref.current.position.z < 0.001) {
        setShow(false);
        cb();
        speed = 0;
      }
      electron1Ref.current.position.z -= speed;
    }
    if (electron2Ref.current) {
      electron2Ref.current.position.z += speed;
    }
  });

  if (!show) return <></>;

  return (
    <>
      <Electron position={[0, 0, 25.38]} ref={electron1Ref} />
      <Electron position={[0, 0, -25.38]} ref={electron2Ref} />
    </>
  );
}

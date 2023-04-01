import { useState } from "react";
import { BackSide } from "three";
import { useAppDispatch } from "../app/hooks";
import { setSelectedModel } from "../features/geometryMenuSlice/geometryMenuSlice";

const Background = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [mouseDownPos, setMouseDownPos] = useState<null | {
    x: number;
    y: number;
  }>(null);

  const handleMouseDown = (e: { clientX: number; clientY: number }): void => {
    setMouseDownPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = (e: { clientX: number; clientY: number }): void => {
    const mouseUpPos = { x: e.clientX, y: e.clientY };
    const movementThreshold = 5;

    if (
      mouseDownPos &&
      Math.abs(mouseUpPos.x - mouseDownPos.x) <= movementThreshold &&
      Math.abs(mouseUpPos.y - mouseDownPos.y) <= movementThreshold
    ) {
      dispatch(setSelectedModel(null));
    }
  };

  const radius = 555; // Adjust the radius to ensure the sphere covers the entire scene

  return (
    <mesh onPointerDown={handleMouseDown} onPointerUp={handleMouseUp}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshBasicMaterial transparent opacity={0} side={BackSide} />
    </mesh>
  );
};

export default Background;

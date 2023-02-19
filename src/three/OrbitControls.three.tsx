import { OrbitControls } from "@react-three/drei";

import { useAppSelector } from "../app/hooks";
import { selectDroneState } from "../features/droneSlice";

/**
 *
 */
export default function CustomOrbitControls(): JSX.Element {
  const droneType = useAppSelector(selectDroneState);
  const rotate = droneType === "circle" ? true : false;

  return <OrbitControls autoRotate={rotate} enableZoom={true} makeDefault />;
}

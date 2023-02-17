import { OrbitControls } from "@react-three/drei";

/**
 *
 */
export default function CustomOrbitControls(): JSX.Element {
  return <OrbitControls autoRotate autoRotateSpeed={0.05} enableZoom={true} makeDefault />;
}

import { Environment } from "@react-three/drei";

/**
 *
 */
export default function EnvironmentThree(): JSX.Element {
  return <Environment background="only" preset="sunset" blur={0.8} far={1000} />;
}

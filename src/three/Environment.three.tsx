import { Environment } from "@react-three/drei";

/**
 * Renders an environment background using the Environment component from `@react-three/drei`.
 *
 * @returns {JSX.Element} JSX.Element
 */
export default function EnvironmentThree(): JSX.Element {
  return <Environment background="only" preset="sunset" blur={0.8} far={1000} />;
}

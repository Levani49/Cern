import { Environment } from "@react-three/drei";
import { useAppSelector } from "../app/hooks";
import { selectDarkModeState } from "../features/globalsSlice";

/**
 * Renders an environment background using the Environment component from `@react-three/drei`.
 *
 * @returns {JSX.Element} JSX.Element
 */
export default function EnvironmentThree(): JSX.Element {
  const show = useAppSelector(selectDarkModeState);

  if (show) return <></>;

  return (
    <Environment background="only" preset="sunset" blur={0.8} far={1000} />
  );
}

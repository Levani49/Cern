import { Environment } from '@react-three/drei';
import { useAppSelector } from '../app/hooks';
import { selectTheme } from '../features/global/globalsSlice';

/**
 * Renders an environment background using the Environment component from `@react-three/drei`.
 *
 * @returns {JSX.Element} JSX.Element
 */
export default function EnvironmentThree(): JSX.Element {
  const show = useAppSelector(selectTheme);

  if (show) return <></>;

  return <Environment background="only" preset="sunset" blur={1} far={1000} />;
}

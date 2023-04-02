import { Grid } from '@react-three/drei';

import { useAppSelector } from '../app/hooks';
import { selectTheme, selectGrid } from '../features/global/globalsSlice';
/**
 * Renders a custom grid.
 *
 * @returns {JSX.Element} JSX.Element
 */
export default function CustomGrid(): JSX.Element {
  const { show } = useAppSelector((state) => ({
    show: selectGrid(state),
    prefersDarkMode: selectTheme(state),
  }));

  if (!show) {
    return <></>;
  }

  return (
    <Grid
      renderOrder={-1}
      position={[0, -18.5, 0]}
      infiniteGrid
      cellSize={1}
      cellThickness={0.6}
      sectionSize={5}
      sectionThickness={1.5}
      fadeDistance={100}
      sectionColor="gray"
      cellColor="#96b09b"
    />
  );
}

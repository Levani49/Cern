import { Grid } from "@react-three/drei";
import { useAppSelector } from "../app/hooks";
import { selectRendererGridState } from "../features/rendererSlice";

/**
 * Renders a custom grid.
 *
 * @returns {JSX.Element} JSX.Element
 */
export default function CustomGrid(): JSX.Element {
  const show = useAppSelector(selectRendererGridState);

  if (!show) {
    return <></>;
  }

  return (
    <Grid
      renderOrder={-1}
      position={[0, -1.85, 0]}
      infiniteGrid
      cellSize={0.6}
      cellThickness={0.6}
      sectionSize={3.3}
      sectionThickness={1.5}
      fadeDistance={50}
      sectionColor="gray"
    />
  );
}

import { Grid } from "@react-three/drei";

/**
 *
 */
export default function CustomGrid(): JSX.Element {
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
    />
  );
}

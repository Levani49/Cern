import { Grid } from "@react-three/drei";

import { selectGrid } from "#/store/features/globalsSlice";
import { useAppSelector } from "#/store/hooks";

export default function CustomGrid() {
  const show = useAppSelector(selectGrid);

  return (
    <>
      {show && (
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
      )}
    </>
  );
}

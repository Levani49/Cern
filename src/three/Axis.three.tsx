import { GizmoHelper, GizmoViewport } from "@react-three/drei";

import { useAppSelector } from "../app/hooks";
import { selectDroneState } from "../features/cameraSlice";
import { selectRendererAxisState } from "../features/rendererSlice";

/**
 *
 */
export default function Axis(): JSX.Element {
  const { droneType, show } = useAppSelector((state) => ({
    droneType: selectDroneState(state),
    show: selectRendererAxisState(state),
  }));

  const disable = droneType !== "idle";

  if (!show) return <></>;

  return (
    <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
      <GizmoViewport disabled={disable} labelColor="white" axisHeadScale={1} />
    </GizmoHelper>
  );
}

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
    <>
      {show && (
        <GizmoHelper alignment="bottom-right" margin={[50, 50]}>
          <GizmoViewport
            axisColors={["#ff6b53", "#21df80", "#5f6af1"]}
            disabled={disable}
            labelColor="white"
            axisHeadScale={0.8}
          />
        </GizmoHelper>
      )}
    </>
  );
}

import { GizmoHelper, GizmoViewport } from "@react-three/drei";
import { memo } from "react";

import { useAppSelector } from "@store/hooks";

import { selectAxis } from "@features/global/globalsSlice";

import useDrone from "@hooks/useDrone/useDrone.hook";

function Axis(): JSX.Element {
  const { currentMode } = useDrone();

  const show = useAppSelector(selectAxis);

  const disable = currentMode !== "idle";

  return (
    <>
      {show && (
        <GizmoHelper alignment="bottom-right" margin={[70, 55]}>
          <GizmoViewport
            axisColors={["#ff6b53", "#40CF8E", "#5f6af1"]}
            disabled={disable}
            labelColor="white"
            axisHeadScale={0.8}
          />
        </GizmoHelper>
      )}
    </>
  );
}

export default memo(Axis);

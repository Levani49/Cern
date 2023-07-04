import { GizmoHelper, GizmoViewport } from "@react-three/drei";
import { memo, useEffect, useState } from "react";

import { useAppSelector } from "@store/hooks";

import { selectAxis } from "@features/global/globalsSlice";

import useDrone from "@hooks/useDrone/useDrone.hook";

import { isMobile } from "@utils/isMobile.utils";

type Aligment =
  | "bottom-right"
  | "top-right"
  | "top-left"
  | "bottom-left"
  | "bottom-center"
  | "center-right"
  | "center-left"
  | "center-center"
  | "top-center"
  | undefined;

interface Props {
  margin: [number, number];
  aligment: Aligment;
  scale: number;
}

const initialState: Props = {
  margin: [70, 55],
  aligment: "bottom-right",
  scale: 40
};

function Axis(): JSX.Element {
  const [properties, setProperties] = useState<Props>(initialState);
  const { currentMode } = useDrone();
  const show = useAppSelector(selectAxis);

  useEffect(() => {
    if (isMobile()) {
      setProperties({
        margin: [40, 40],
        scale: 25,
        aligment: "top-right"
      });
    }
  }, []);

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth < 768) {
        setProperties({
          margin: [40, 40],
          scale: 25,
          aligment: "top-right"
        });
      } else {
        setProperties(initialState);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const disable = currentMode !== "idle";

  return (
    <>
      {show && (
        <GizmoHelper alignment={properties.aligment} margin={properties.margin}>
          <GizmoViewport
            axisColors={["#ff6b53", "#40CF8E", "#5f6af1"]}
            disabled={disable}
            labelColor="white"
            axisHeadScale={0.8}
            scale={properties.scale}
          />
        </GizmoHelper>
      )}
    </>
  );
}

export default memo(Axis);

// GizmoHelper alignment={alignment} margin={[45, 40]}>
//           <GizmoViewport
//             axisColors={["#ff6b53", "#40CF8E", "#5f6af1"]}
//             disabled={disable}
//             labelColor="white"
//             axisHeadScale={0.8}
//             scale={25}
//           />
//         </GizmoHelper>

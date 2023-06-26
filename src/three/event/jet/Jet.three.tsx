import { useMemo } from "react";

import useEvent from "@hooks/useEvent/useEvent.hook";

export default function Jet(): JSX.Element {
  const { event, eventParameters, jetFilterValues, JET } = useEvent();

  const jetConesToDraw = useMemo(() => {
    if (event) {
      if (Array.isArray(event.Event.Jet)) {
        JET.init(event.Event.Jet[0]);
      } else {
        JET.init(event.Event.Jet);
      }
      return JET.drawJetCone(jetFilterValues);
    }
    return null;
  }, [event, jetFilterValues, JET]);

  if (jetConesToDraw && eventParameters.jets) {
    return (
      <>
        {jetConesToDraw.map((jetCone, i) => {
          return (
            <mesh key={i} geometry={jetCone.geo} quaternion={jetCone.quaternion}>
              <meshToonMaterial
                attach="material"
                color="#e40cf0"
                transparent={true}
                opacity={0.7}
              />
            </mesh>
          );
        })}
      </>
    );
  }

  return <></>;
}

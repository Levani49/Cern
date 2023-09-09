import FlyControl from "#/three/controls/FlyControl.three";
import OrbitControls from "#/three/controls/OrbitControl.three";

import useDrone from "#/hooks/useDrone/useDrone.hook";

export default function Controls() {
  const { currentMode } = useDrone();

  return (
    <>
      {currentMode === "fly" ? (
        <FlyControl />
      ) : (
        <OrbitControls currentMode={currentMode} />
      )}
    </>
  );
}

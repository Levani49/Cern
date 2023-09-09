import FlyControl from "#/lib/controls/FlyControl.three";
import OrbitControls from "#/lib/controls/OrbitControl.three";
import useDrone from "#/hooks/useDrone";

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

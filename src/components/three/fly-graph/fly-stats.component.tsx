import { useEffect, useState } from "react";

import useDrone from "#/hooks/useDrone/useDrone.hook";

export default function FlyStats() {
  const { showFlyModal, currentMode } = useDrone();
  const [speed, setSpeed] = useState(0.8);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent): void => {
      switch (e.code) {
        case "KeyW":
          setSpeed((prev) => prev + 0.1);
          break;
        case "KeyS":
          setSpeed((prev) => prev - 0.1);
          break;
        case "Space":
          setSpeed(0);
          break;
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const isFreeFLy = currentMode === "fly";

  return (
    <>
      {isFreeFLy && !showFlyModal && (
        <span className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2 transform text-accent2 dark:text-accent1">
          {speed.toFixed(1)} m/s
        </span>
      )}
    </>
  );
}

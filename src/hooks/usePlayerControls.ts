import { useEffect, useState } from "react";

export function usePlayerControls(): PlayerControls {
  const [movement, setMovement] = useState<PlayerControls>({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      setMovement((m) => ({
        ...m,
        [moveFieldByKey(e.code) as string]: true,
      }));
    };

    const handleKeyUp = (e: KeyboardEvent): void => {
      setMovement((m) => ({
        ...m,
        [moveFieldByKey(e.code) as string]: false,
      }));
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return (): void => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return movement;
}

function moveFieldByKey(key: string): string | undefined {
  const keys: Record<string, string> = {
    KeyW: "moveForward",
    KeyS: "moveBackward",
    KeyA: "moveLeft",
    KeyD: "moveRight",
    Space: "jump",
  };

  return keys[key];
}

interface PlayerControls {
  moveForward: boolean;
  moveBackward: boolean;
  moveLeft: boolean;
  moveRight: boolean;
  jump: boolean;
}

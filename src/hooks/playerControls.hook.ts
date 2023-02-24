import { useEffect, useState } from "react";

interface PlayerControls {
  moveForward: boolean;
  moveBackward: boolean;
  moveLeft: boolean;
  moveRight: boolean;
  jump: boolean;
}

/**
 * Gets the corresponding movement control field for a given keyboard key code.
 *
 * @param {string} key - The keyboard key code to look up.
 * @returns {string|undefined} The corresponding movement control field, or undefined if no match was found.
 */
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

/**
 * A custom hook that returns an object with the current player movement controls.
 *
 * @returns {PlayerControls} An object with properties for the current player movement controls.
 */
export function usePlayerControls(): PlayerControls {
  const [movement, setMovement] = useState<PlayerControls>({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
  });

  useEffect(() => {
    /**
     * A callback function to handle keydown events and update the player movement state.
     *
     * @param {KeyboardEvent} e - The event object for the keydown event.
     */
    const handleKeyDown = (e: KeyboardEvent): void => {
      setMovement((m) => ({
        ...m,
        [moveFieldByKey(e.code) as string]: true,
      }));
    };

    /**
     * A callback function to handle keyup events and update the player movement state.
     *
     * @param {KeyboardEvent} e - The event object for the keyup event.
     */
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

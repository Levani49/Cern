import { Camera } from "@react-three/fiber";
import { useCallback, useMemo } from "react";

import Helix from "../model/helix.model";

const helixMode = new Helix();

interface IHelix {
  helixStart: () => void;
  helixStop: () => void;
}

/**
 *
 * @param camera
 */
export function useHelix(camera: Camera): IHelix {
  /**
   *
   */
  const helixStart = useCallback((): void => {
    helixMode.start(camera);
  }, [camera]);

  /**
   *
   */
  const helixStop = useCallback((): void => {
    helixMode.stop();
  }, []);

  const handlers = useMemo(() => {
    return { helixStart, helixStop };
  }, [helixStart, helixStop]);

  return handlers;
}

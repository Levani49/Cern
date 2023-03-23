import { useState, useEffect } from "react";
import { useProgress } from "@react-three/drei";

interface Loading {
  isLoading: boolean;
  hasLoaded: boolean;
  progress: number;
}

export default function useLoadingStatus(): Loading {
  const { active, progress } = useProgress();
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (active) {
      setIsLoading(true);
      setHasLoaded(false);
    } else {
      setIsLoading(false);
      setHasLoaded(true);
    }
  }, [active]);

  return { isLoading, hasLoaded, progress };
}

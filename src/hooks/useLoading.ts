import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function useLoadingStatus(): Loading {
  const { active, progress } = useProgress();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (active) {
      setIsLoading(true);
      setIsLoaded(false);
    } else {
      setIsLoading(false);
      setIsLoaded(true);
    }
  }, [active]);

  return { isLoading, isLoaded, progress };
}

interface Loading {
  isLoading: boolean;
  isLoaded: boolean;
  progress: number;
}

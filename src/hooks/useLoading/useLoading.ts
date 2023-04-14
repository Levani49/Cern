import { useState, useEffect } from 'react';
import { useProgress } from '@react-three/drei';

import type { Loading } from './useLoading.types';

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

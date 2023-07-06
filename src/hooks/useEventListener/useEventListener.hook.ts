import { useEffect, useState } from "react";

type Callback = () => void;
type Event = keyof WindowEventMap;

export function useEventListener(
  event: Event,
  cb: Callback,
  runOnMount = false
): void {
  const [onMount, setOnMount] = useState(runOnMount);

  useEffect(() => {
    window.addEventListener(event, cb);

    return () => window.removeEventListener(event, cb);
  }, [cb, event]);

  if (onMount) {
    setOnMount(false);
    cb();
  }
}

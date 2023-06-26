import { useEffect } from "react";

const useEscapeKeydown = (callback: () => void): void => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === "27" || e.key === "Escape") {
        callback();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [callback]);
};

export default useEscapeKeydown;

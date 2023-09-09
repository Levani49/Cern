import { Loader } from "@react-three/drei";
import { useState } from "react";

import useEventListener from "#/hooks/useEventListener.hook";

export default function CustomLoader() {
  const [styles, setStyles] = useState({
    bottom: "0px",
    top: "auto",
  });

  useEventListener(
    "resize",
    (): void => {
      if (window.innerWidth < 768) {
        setStyles({
          bottom: "auto",
          top: "0px",
        });
      } else {
        setStyles({
          bottom: "0px",
          top: "auto",
        });
      }
    },
    true
  );

  return (
    <Loader
      containerStyles={{
        backgroundColor: "black",
        width: "100vw",
        height: "5px",
        display: "block",
        ...styles,
      }}
      innerStyles={{
        width: "100%",
        backgroundColor: "black",
      }}
      barStyles={{
        background: "rgb(38, 158, 108)",
      }}
      dataStyles={{
        display: "none",
      }}
    />
  );
}

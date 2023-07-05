import { Loader } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function CustomLoader(): JSX.Element {
  const [styles, setStyles] = useState({
    bottom: "0px",
    top: "auto"
  });

  useEffect(() => {
    if (window.innerWidth < 768) {
      setStyles({
        bottom: "auto",
        top: "0px"
      });
    }
  }, []);

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth < 768) {
        setStyles({
          bottom: "auto",
          top: "0px"
        });
      } else {
        setStyles({
          bottom: "0px",
          top: "auto"
        });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Loader
      containerStyles={{
        backgroundColor: "black",
        width: "100vw",
        height: "5px",
        display: "block",
        ...styles
      }}
      innerStyles={{
        width: "100%",
        backgroundColor: "black"
      }}
      barStyles={{
        background: "rgb(38, 158, 108)"
      }}
      dataStyles={{
        display: "none"
      }}
    />
  );
}

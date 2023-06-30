import { Loader } from "@react-three/drei";

export default function CustomLoader(): JSX.Element {
  return (
    <Loader
      containerStyles={{
        backgroundColor: "white",
        width: "100vw",
        height: "3px",
        display: "block",
        bottom: "0px",
        top: "auto"
      }}
      innerStyles={{
        width: "100%",
        backgroundColor: "white"
      }}
      barStyles={{
        background: "rgb(50, 207, 142)"
      }}
    />
  );
}

/*! This is how loader looks like */
/*
   <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100vw",
          height: "3px",
          background: "transparent",
          display: "block",
          alignItems: "center",
          justifyContent: "center",
          transition: "opacity 300ms ease 0s",
          zIndex: 1000000,
          opacity: 0
        }}
      >
        <div>
          <div
            style={{
              width: "100%",
              height: "3px",
              background: "rgb(39, 39, 39)",
              textAlign: "center"
            }}
          >
            <div
              style={{
                height: "3px",
                width: "100%",
                background: "white",
                transition: "transform 200ms ease 0s",
                transformOrigin: "left center",
                transform: "scaleX(1)"
              }}
            ></div>
            <span
              style={{
                display: "inline-block",
                position: "relative",
                fontVariantNumeric: "tabular-nums",
                marginTop: "0.8em",
                color: "rgb(240, 240, 240)",
                fontSize: "0.6em",
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, Inter, "Segoe UI", "Helvetica Neue", Helvetica, Arial, Roboto, Ubuntu, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                whiteSpace: "nowrap"
              }}
            >
              Loading 100.00%
            </span>
          </div>
        </div>
      </div>
*/

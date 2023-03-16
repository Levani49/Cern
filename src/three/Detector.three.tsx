import GlbLoader from "./GlbLoader.three";

/**
 * Detector
 *
 * @returns { JSX.Element } JSX.Element
 */
export default function Detector(): JSX.Element {
  const Models = [
    "pixel-cut3",
    "sct-bar-cut3",
    "sct-sidea-cut3",
    "sct-sidec-cut3",
    "trt-bar-cut3",
    "trt-sidea-cut3",
    "trt-sidec-cut3",
  ].map((modelSrc) => {
    return <GlbLoader key={modelSrc} src={modelSrc} />;
  });

  return <>{Models}</>;
}

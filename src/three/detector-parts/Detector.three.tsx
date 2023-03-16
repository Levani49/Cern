import { PixelCut3 } from "../../models/Pixel-cut3.model";
import { SctBar3 } from "../../models/SCT-BAR-cut3.model";
import { SctSideA3 } from "../../models/SCT-SideA-cut3.model";
import { SctSideC3 } from "../../models/SCT-SideC-cut3.model";
import { TrtBar3 } from "../../models/TRT-BAR-cut3.model";
import { TrtSideA3 } from "../../models/TRT-SideA-cut3.model";
import { TrtSideC3 } from "../../models/TRT-SideC-cut3.model";

/**
 * Inner Detector
 *
 * @returns { JSX.Element } JSX.Element
 */
export function InnerDetector(): JSX.Element {
  return (
    <>
      <PixelCut3 />
      <SctBar3 />
      <SctSideA3 />
      <SctSideC3 />
      <TrtBar3 />
      <TrtSideA3 />
      <TrtSideC3 />
    </>
  );
}

/**
 * Detector
 *
 * @returns { JSX.Element } JSX.Element
 */
export default function Detector(): JSX.Element {
  return (
    <>
      <InnerDetector />
    </>
  );
}

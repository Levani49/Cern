import { FlexChainSec11Cut3 } from "../../models/Flex-Chain-Sec11-cut3.model";
import { FlexChainSec15Cut3 } from "../../models/Flex-Chain-Sec15-cut3.model";
import { FlexChainSec9Cut3 } from "../../models/Flex-Chain-Sec9-cut3.model";
import { LarBarrelCut3 } from "../../models/Lar-Barrel-cut3.model";
import { LarEmecSideACut3 } from "../../models/Lar-EMEC-SideA-cut3.model";
import { LarEmecSideCCut3 } from "../../models/Lar-EMEC-SideC-cut3.model";
import { LarFcalSideACut3 } from "../../models/Lar-FCAL-SideA-cut3.model";
import { LarFcalSideCCut3 } from "../../models/Lar-FCAL-SideC-cut3.model";
import { LarHecSideACut3 } from "../../models/Lar-HEC-SideA-cut3.model";
import { LarHecSideCCut3 } from "../../models/Lar-HEC-SideC-cut3.model";
import { PixelCut3 } from "../../models/Pixel-cut3.model";
import { SctBar3 } from "../../models/SCT-BAR-cut3.model";
import { SctSideA3 } from "../../models/SCT-SideA-cut3.model";
import { SctSideC3 } from "../../models/SCT-SideC-cut3.model";
import { ServMuonBarrelCaloEleBoxesCut3 } from "../../models/Serv-Muon-Barrel-Calo-Ele-Boxes-cut3.model";
import { ServMuonCableTraysCut3 } from "../../models/Serv-muon-cable-trays-cut3.model";
import { ServMuonCableTraysInsideBarelCut3 } from "../../models/Serv-muon-cable-trays-inside-barrel-cut3.model";
import { ServMuonSwCut3 } from "../../models/Serv-Muon-SW-cut3.model";
import { ServeZ0Sec1Cut3 } from "../../models/Serv-Z0-Sec1-cut3.model";
import { ServZ0Sec3Cut3 } from "../../models/Serv-Z0-Sec3-cut3.model";
import { TileBarrelCut3 } from "../../models/Tile-Barrel-cut3.model";
import { TileEndCapSideACut3 } from "../../models/Tile-End-Cap-SideA-cut3.model";
import { TileEndCapSideCCut3 } from "../../models/Tile-End-Cap-SideC-cut3.model";
import { TrtBar3 } from "../../models/TRT-BAR-cut3.model";
import { TrtSideA3 } from "../../models/TRT-SideA-cut3.model";
import { TrtSideC3 } from "../../models/TRT-SideC-cut3.model";
import { ServZ0Sec5Cut3 } from "../../models/Serv-Z0-Sec5-cut3.model";
import { ServZ0Sec7Cut3 } from "../../models/Serv-Z0-Sec7-cut3.model";
import { BarrelToroidCut3 } from "../../models/Barrel-Toroid-cut3.model";
import { EndCapToroidSideACut3 } from "../../models/End-Cap-Toroid-SideA-cut3.model";
import { TowerTurretSideACut3 } from "../../models/Tower-Turret-SideA-cut3.model";
import { TowerTurretSideCCut3 } from "../../models/Tower-Turret-SideC-cut3.model";
import { EndCapToroidSideCCut3 } from "../../models/End-Cap-Toroid-SideC-cut3.model";

/**
 *
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
 *
 */
function Services(): JSX.Element {
  return (
    <>
      <ServZ0Sec7Cut3 />
      <ServZ0Sec5Cut3 />
      <ServZ0Sec3Cut3 />
      <ServeZ0Sec1Cut3 />
      <ServMuonBarrelCaloEleBoxesCut3 />
      <ServMuonCableTraysInsideBarelCut3 />
      <ServMuonCableTraysCut3 />
      <ServMuonSwCut3 />
      <FlexChainSec15Cut3 />
      <FlexChainSec11Cut3 />
      <FlexChainSec9Cut3 />
      <TileEndCapSideACut3 />
      <TileEndCapSideCCut3 />
      <TileBarrelCut3 />
      <LarBarrelCut3 />
      <LarFcalSideACut3 />
      <LarFcalSideCCut3 />
      <LarHecSideACut3 />
      <LarHecSideCCut3 />
      <LarEmecSideACut3 />
      <LarEmecSideCCut3 />
    </>
  );
}

/**
 *
 */
function MagnetSystems(): JSX.Element {
  return (
    <>
      <BarrelToroidCut3 />
      <TowerTurretSideCCut3 />
      <TowerTurretSideACut3 />
      <EndCapToroidSideACut3 />
      <EndCapToroidSideCCut3 />
    </>
  );
}

/**
 *
 */
export default function Detector(): JSX.Element {
  return (
    <>
      {false && (
        <>
          <MagnetSystems />
          <Services />
        </>
      )}

      <InnerDetector />
    </>
  );
}

import { PayloadAction } from "@reduxjs/toolkit";
import { BufferGeometry, ConeGeometry, Matrix4, Plane, Quaternion } from "three";

import { Camera } from "@react-three/fiber";
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

import store from "#/store/store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type SVGIcon =
  | React.FunctionComponent<SVGProps<SVGSVGElement>>
  | ForwardRefExoticComponent<
      SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>
    >;

export type emptyFunc = () => void;

export interface MetInfo {
  energyX: number;
  energyY: number;
  energyT: number;
  phi: number | null;
}

export interface JetInfo {
  pX: number[];
  pY: number[];
  pZ: number[];
  phi: number[];
  theta: number[];
  eta: number[];
  count: null | number;
  SGK: string;
  et: number[];
}

export interface JetCone {
  quaternion: Quaternion;
  geo: ConeGeometry;
}

export type ModelInfo = {
  id: string;
  name: string;
  cutType: ModelCut;
  opacity: number;
  wireframe: boolean;
};

export type Employee = {
  id: string;
  name: string;
  role: string;
  contact: string;
};
export type EmployeeStaticData = {
  employees: Employee[];
};

export type DroneTypes =
  | "idle"
  | "circle"
  | "helix"
  | "rocket"
  | "zoom"
  | "fly"
  | "z0";

export interface ActiveModel {
  uid: string;
  name: string;
  modelPath: string;
  renderOrder?: number;
}

export type CurrentAnalysisTool = "algorithm" | "filter" | "info";
export type ModelCut = "-cut1" | "-cut2" | "-cut3" | "-cut4" | "";
export type ModelLoadingStates = "idle" | "loading" | "failed";
export type selectedModel = ModelInfo | null;

export type GeometryState = "notLoaded" | "partialyLoaded" | "isLoaded";
export type PartitionType = "LBA" | "LBC" | "EBA" | "EBC";
export type TreeNode = {
  id: string;
  name: string;
  state: GeometryState;
  modelPath?: string;
  showChildren?: boolean;
  children?: TreeNode[];
  root?: boolean;
  nodeEnd?: boolean;
  renderOrder?: number;
  partition?: PartitionType;
};

export type OrthographicReturnType = {
  left: number;
  right: number;
  top: number;
  bottom: number;
  position: [x: number, y: number, z: number];
  matrix: Matrix4;
  rotation: [x: number, y: number, z: number];
  near: number;
  far: number;
};

export type PerspectiveReturnType = {
  fov: 75;
  aspect: number;
  near: number;
  far: number;
  position: [x: number, y: number, z: number];
};

export type TrackInfo = {
  polylineX: number[];
  polylineY: number[];
  polylineZ: number[];
  phi: number[];
  cotTheta: number[];
  theta: number[];
  eta: number[];
  numPolyline: number[];
  count: number | null;
  SGK: string;
  pt: number[];
};

export type TrackMesh = {
  geometry: BufferGeometry;
  color: string;
};

export type Coordinates = [x: number, y: number, z: number];

export type ViewModes =
  | "iso"
  | "left"
  | "right"
  | "front"
  | "bottom"
  | "back"
  | "top";

export type CameraTypes = "perspective" | "orthographic";

export type OrthographicProps =
  | {
      left: number;
      right: number;
      top: number;
      bottom: number;

      near: number;
      far: number;
      position: Coordinates;
      rotation: Coordinates;
    }
  | undefined;

export type PerspectiveProps =
  | {
      fov: number;
      position: Coordinates;
      aspect: number;
      near: number;
      far: number;
    }
  | undefined;

export type CameraSettings = {
  defaultPosition: Coordinates | undefined;
  controlRotationSpeed: number;
  currentState: DroneTypes;
  droneType: DroneTypes;
  camera: Camera | null;
  cameraType: CameraTypes;
  directionalLightIntensity: number;
  showFlyModal: boolean;
  ambientLightIntensity: number;
  viewMode: ViewModes;
  orthographicCameraProps: OrthographicProps | undefined;
  perspectiveCameraProps: PerspectiveProps | undefined;
  triggerCameraEffect: "idle" | "pending" | "success";
};

export type ModalOrder = {
  id: string;
  zIndex: number;
};

export type GlobalsSlice = {
  prefersdarkMode: boolean;
  startParticleAnimation: boolean;
  showStats: boolean;
  showAxis: boolean;
  showGrid: boolean;
  globalWireframe: boolean;
  modelsLoadingState: ModelLoadingStates;
  selectedModel: selectedModel;
  previousSelectedModel: selectedModel;
  globalOpacity: number;
  showSnapModal: boolean;
  showGeometryMenu: boolean;
  fullScreen: boolean;
  screenRecording: "idle" | "recording" | "stop";
  showMenu: boolean;
  showUtils: boolean;
  modals: {
    index: number;
    order: ModalOrder[];
  };
};

export type Modal = {
  aboutModalIsOpen: boolean;
  settingsModalIsOpen: boolean;
  eventsModalIsOpen: boolean;
  events: {
    analysisTools: {
      currentTool: CurrentAnalysisTool;
    };
  };
};

export type RendererInfo = {
  show: boolean;
  renderer: {
    triangles: number;
    fps: number;
    memory: number;
  };
};

export type RendererType = RendererInfo["renderer"];

export type UpdateNodePayload = {
  nodeId: string;
  propToChange: string;
  value: string | boolean;
  restrictAncestorsUpdate?: boolean;
};

export type GeometryTreeSlice = {
  tree: TreeNode[];
  activeModels: ActiveModel[];
  showGeometryMenu: boolean;
};

export type UpdateNodePayloadAction = PayloadAction<UpdateNodePayload>;

export type TLayer = "A" | "BC" | "D" | "E";

export type Cell = {
  id: string;
  section: PartitionType;
  module: number;
  layer: TLayer;
  name: string;
  phi: number;
  energy: number;
  eta: number;
};

export interface TCal {
  isSelected: boolean;
  cellInfo: Cell | null;
}

export type EventOverviewData = {
  runNumber: string;
  eventNumber: string;
  lumiBlock: string;
  date: string;
  time: string;
};

export interface EventDetailsXML {
  Event: {
    "@_dateTime": string;
    "@_eventNumber": string;
    "@_eventProperty": string;
    "@_lumiBlock": string;
    "@_runNumber": string;
    "@_version": string;
    Track: Track | Track[];
    Jet: Jet | Jet[];
    ETMis: Met | Met[];
    TILE: Tile;
  };
}

export type Tile = {
  "@_count": string;
  "@_storeGateKey": string;
  pmt1Energy: string | null;
  pmt2Energy: string | null;
  pmt1Time: string | null;
  pmt2Time: string | null;
  energy: string;
  phi: string;
  eta: string;
  id: string;
};

export type Track = {
  "@_count": string;
  "@_storeGateKey": string;
  d0: string;
  id: string;
  pt: string;
  z0: string;
  chi2: string;
  phi0: string;
  numDoF: string;
  barcode: string;
  numHits: string;
  cotTheta: string;
  nSCTHits: string;
  nTRTHits: string;
  nPixHits: string;
  numPolyline: string;
  trackAuthor: string;
  hits: AdditionalInfo;
  covMatrix: AdditionalInfo;
  driftSign: AdditionalInfo;
  isOutlier: AdditionalInfo;
  polylineX: AdditionalInfo;
  polylineY: AdditionalInfo;
  polylineZ: AdditionalInfo;
};

export type Jet = {
  "@_count": string;
  "@_storeGateKey": string;
  et: number | string;
  eta: number | string;
  phi: number | string;
  px: number | string;
  py: number | string;
  pz: number | string;
};

export type Met = {
  "@_count": number;
  "@_storeGateKey": string;
  et: number;
  etx: number;
  ety: number;
};

type AdditionalInfo = {
  "#text": string;
  "@_multiple": string;
};

export type EventsToShow = {
  tracks: boolean;
  jets: boolean;
  met: boolean;
};

export type JetFilter = {
  phi: string | undefined;
  eta: string | undefined;
  et: string | undefined;
  theta: string | undefined;
};

export type TrackFilter = {
  phi: string | undefined;
  eta: string | undefined;
  pt: string | undefined;
  theta: string | undefined;
};

export type EventNumber = {
  eventGroup: string;
  eventIndex: number;
};

export interface EventsSlice {
  drawEvents: boolean;
  eventNumber: EventNumber;
  loadedEvents: LoadedEvents[];
  eventGeneralInfo: EventOverviewData;
  eventsToShow: EventsToShow;
  event: EventDetailsXML | null;
  isLoading: boolean;
  trackFilter: TrackFilter;
  jetFilter: JetFilter;
}

export interface UploadedEvent {
  isCustom: boolean;
  event: EventDetailsXML;
  name: string;
}

export interface LoadedEvents extends EventOverviewData {
  eventName: string;
  loadedEvent: UploadedEvent;
}

export type ActiveCell = {
  uid: string;
  name: string;
  partition: PartitionType;
};

export interface ModelSlice {
  modelWireframe: boolean;
  modelCut: ModelCut;
  localCut: ModelCut;
  selectedModel: selectedModel;
  previousSelectedModel: selectedModel;
  modelsLoadingState: ModelLoadingStates;
  modelOpacity: number;
  showModelModal: boolean;
  clippingPlanesNormal: number;
  clippingPlanes: Plane[];
  snapIsLoading: boolean;
}

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
  };
}

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

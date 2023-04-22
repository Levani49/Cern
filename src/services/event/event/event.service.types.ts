export type GeneralInfoType = {
  runNumber: string;
  eventNumber: string;
  lumiBlock: string;
  date: string;
  time: string;
};

export interface XmlEvent {
  Event: {
    '@_dateTime': string;
    '@_eventNumber': string;
    '@_eventProperty': string;
    '@_lumiBlock': string;
    '@_runNumber': string;
    '@_version': string;
    Track: Track | Track[];
  };
}

export type Track = {
  '@_count': string;
  '@_storeGateKey': string;
  barcode: string;
  chi2: string;
  cotTheta: string;
  covMatrix: AdditionalInfo;
  d0: string;
  driftSign: AdditionalInfo;
  hits: AdditionalInfo;
  id: string;
  isOutlier: AdditionalInfo;
  nPixHits: string;
  nSCTHits: string;
  nTRTHits: string;
  numDoF: string;
  numHits: string;
  numPolyline: string;
  phi0: string;
  polylineX: AdditionalInfo;
  polylineY: AdditionalInfo;
  polylineZ: AdditionalInfo;
  pt: string;
  trackAuthor: string;
  z0: string;
};

type AdditionalInfo = {
  '#text': string;
  '@_multiple': string;
};

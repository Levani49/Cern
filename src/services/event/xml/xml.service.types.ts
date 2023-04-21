export type GeneralInfoType =
  | {
      runNumber: string;
      eventNumber: string;
      lumiBlock: string;
      dateTime: string;
      date: string;
      time: string;
    }
  | undefined;

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

type Track = {
  '@_count': string;
  '@_storeGateKey': string;
  barcode: string;
  chi2: string;
  cotTheta: string;
  covMatrix: ObjectExtendsProps;
  d0: string;
  driftSign: ObjectExtendsProps;
  hits: ObjectExtendsProps;
  id: string;
  isOutlier: ObjectExtendsProps;
  nPixHits: string;
  nSCTHits: string;
  nTRTHits: string;
  numDoF: string;
  numHits: string;
  numPolyline: string;
  phi0: string;
  polylineX: ObjectExtendsProps;
  polylineY: ObjectExtendsProps;
  polylineZ: ObjectExtendsProps;
  pt: string;
  trackAuthor: string;
  z0: string;
};

type ObjectExtendsProps = {
  '#text': string;
  '@_multiple': string;
};

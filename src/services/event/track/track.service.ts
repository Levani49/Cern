// import EventService from '../event/event.service';

import { Track } from '../event/event.service.types';
import { TrackInfo } from './track.service.types';
import EventService from '../event/event.service';

export default class TrackService extends EventService {
  trackInfo: TrackInfo = {
    polylineX: [],
    polylineY: [],
    polylineZ: [],
    phi: [],
    cotTheta: [],
    theta: [],
    eta: [],
    numPolyline: [],
    count: null,
    SGK: '',
    pt: [],
  };

  init(track: Track): void {
    this.trackInfo.polylineX = this.getNumbersArrayFromTag(track.polylineX['#text']).map(
      (number) => +(number / 100).toFixed(7),
    );
    this.trackInfo.polylineY = this.getNumbersArrayFromTag(track.polylineY['#text']).map(
      (number) => +(number / 100).toFixed(7),
    );
    this.trackInfo.polylineZ = this.getNumbersArrayFromTag(track.polylineZ['#text']).map(
      (number) => +(number / 100).toFixed(7),
    );

    this.trackInfo.phi = this.getNumbersArrayFromTag(track.phi0);
    this.trackInfo.cotTheta = this.getNumbersArrayFromTag(track.cotTheta);
    this.trackInfo.numPolyline = this.getNumbersArrayFromTag(track.numPolyline);
    this.trackInfo.pt = this.getNumbersArrayFromTag(track.pt);

    this.trackInfo.theta = this.trackInfo.cotTheta.map((number) => Math.PI / 2 - Math.atan(number));
    this.trackInfo.eta = this.trackInfo.theta.map((number) => -1 * Math.log(Math.tan(number / 2)));
    this.trackInfo.count = +track['@_count'];
    this.trackInfo.SGK = track['@_storeGateKey'];

    // TODO:
    // this.electron = this.readEventParametersByName(EVENT.XML, 'Electron', 0); //eleqtronebisa da muonebis damatebis shemdeg es unda sheicvalos
    // this.muon = this.readEventParametersByName(EVENT.XML, 'Muon', 0); //eleqtronebisa da muonebis damatebis shemdeg es unda sheicvalos
    // if (this.electron)
    //   this.electronTracks = this.convertToNums(this.readTagText(this.electron, 'trackIndex', 0)); //eleqtronebisa da muonebis damatebis shemdeg es unda sheicvalos
    // if (this.muon)
    //   this.muonTracks = this.convertToNums(this.readTagText(this.muon, 'trackIndex', 0)); //eleqtronebisa da muonebis damatebis shemdeg es unda sheicvalos
    // this.trackColor = [];

    console.log(this.trackInfo);
  }
  constructor() {
    super();
  }
}

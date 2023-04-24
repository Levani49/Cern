// import EventService from '../event/event.service';

import { Track } from '../event/event.service.types';
import { TrackInfo } from './track.service.types';
import EventService from '../event/event.service';
import { BufferGeometry, Vector3 } from 'three';

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
  drawTrackWithoutCurve(
    propertyIndex: number,
    trackIndex: number,
  ): {
    geometry: BufferGeometry;
    color: string;
  } {
    const trackPath = [];
    for (let j = 0; j < this.trackInfo.numPolyline[propertyIndex]; j++) {
      trackPath.push(
        new Vector3(
          this.trackInfo.polylineX[trackIndex + j],
          this.trackInfo.polylineY[trackIndex + j],
          this.trackInfo.polylineZ[trackIndex + j],
        ),
      );
    }
    // TODO:
    // try {
    //   var incident_point = this.track_incident_point(trackPath[0], trackPath[1]);
    //   trackPath.unshift(incident_point);
    // } catch {
    //   var incident_point = this.track_incident_point(trackPath[0], trackPath[2]);
    //   trackPath.unshift(incident_point);
    // }
    const geo = new BufferGeometry().setFromPoints(trackPath);
    // TODO:
    // const mat = new LineBasicMaterial({
    //   color: '#ff0000',
    //   // clippingPlanes: clip_planes,
    // });

    return {
      geometry: geo,
      color: '#ff0000',
    };
  }
  drawTracksMain(): { geometry: BufferGeometry; color: string }[] | void {
    const tracks = [];

    let index = 0;
    if (this.trackInfo.count) {
      for (let i = 0; i < this.trackInfo.count; i++) {
        switch (this.trackInfo.numPolyline[i]) {
          case 0:
            break;
          case 2:
            tracks.push(this.drawTrackWithoutCurve(i, index));
            break;
          default:
            tracks.push(this.drawTrackWithoutCurve(i, index));
        }
        index += this.trackInfo.numPolyline[i]; //koordinatebis (x,y,z) indexi;
      }
      if (tracks.length > 0) {
        return tracks;
      }
    }
  }
  constructor() {
    super();
  }
}

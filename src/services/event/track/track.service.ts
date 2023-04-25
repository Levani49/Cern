import { BufferGeometry, CubicBezierCurve3, Vector2, Vector3 } from 'three';
// import * as math from 'mathjs';
import { Track } from '../event/event.service.types';
import { TrackInfo, TrackMesh } from './track.service.types';
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
  }
  drawTrackWithoutCurve(propertyIndex: number, trackIndex: number): TrackMesh {
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
    // const mat = new LineBasicMaterial({
    //   color: '#ff0000',
    //   // clippingPlanes: clip_planes,
    // });
    const geometry = new BufferGeometry().setFromPoints(trackPath);

    return {
      geometry,
      color: '#ff0000',
    };
  }
  drawCurvedTracks(propertyIndex: number, trackIndex: number): TrackMesh {
    const trackVector = [];
    const trackLength = new Vector3(
      this.trackInfo.polylineX[trackIndex] - this.trackInfo.polylineX[trackIndex + 1],
      this.trackInfo.polylineY[trackIndex] - this.trackInfo.polylineY[trackIndex + 1],
      this.trackInfo.polylineZ[trackIndex] - this.trackInfo.polylineZ[trackIndex + 1],
    ).length();
    const curvatureValue = trackLength / 4;

    const pointer1X =
      this.trackInfo.polylineX[trackIndex] +
      curvatureValue *
        Math.sin(this.trackInfo.theta[propertyIndex]) *
        Math.cos(this.trackInfo.phi[propertyIndex]);
    const pointer1Y =
      this.trackInfo.polylineY[trackIndex] +
      curvatureValue *
        Math.sin(this.trackInfo.theta[propertyIndex]) *
        Math.sin(this.trackInfo.phi[propertyIndex]);
    const pointer1Z =
      this.trackInfo.polylineZ[trackIndex] +
      curvatureValue * Math.cos(this.trackInfo.theta[propertyIndex]);

    let theta0 =
      new Vector2(
        this.trackInfo.polylineX[trackIndex] - this.trackInfo.polylineX[trackIndex + 1],
        this.trackInfo.polylineY[trackIndex] - this.trackInfo.polylineY[trackIndex + 1],
      ).length() / trackLength;

    if (this.trackInfo.theta[propertyIndex] >= Math.PI / 2) {
      theta0 = Math.PI - theta0;
    }

    const lengthFromPointer1ToPointer2 =
      trackLength - 2 * curvatureValue * Math.cos(this.trackInfo.theta[propertyIndex] - theta0); //mandzili sivrceshi gabnevis 1-lsa da me-2 mimtitebel shoris

    //track-ebis saboloo wertilis mimartulebis mimtitebeli
    const pointer2X =
      pointer1X +
      lengthFromPointer1ToPointer2 *
        ((this.trackInfo.polylineX[trackIndex + 1] - this.trackInfo.polylineX[trackIndex]) /
          trackLength);
    const pointer2Y =
      pointer1Y +
      lengthFromPointer1ToPointer2 *
        ((this.trackInfo.polylineY[trackIndex + 1] - this.trackInfo.polylineY[trackIndex]) /
          trackLength);
    const pointer2Z =
      pointer1Z +
      lengthFromPointer1ToPointer2 *
        ((this.trackInfo.polylineZ[trackIndex + 1] - this.trackInfo.polylineZ[trackIndex]) /
          trackLength);

    const incidentPoint = new Vector3(
      this.trackInfo.polylineX[trackIndex],
      this.trackInfo.polylineY[trackIndex],
      this.trackInfo.polylineZ[trackIndex],
    );
    // this.calculateIncidentPoint(
    //   new Vector3(
    //     this.trackInfo.polylineX[trackIndex],
    //     this.trackInfo.polylineY[trackIndex],
    //     this.trackInfo.polylineZ[trackIndex],
    //   ),
    //   new Vector3(
    //     this.trackInfo.polylineX[trackIndex + 1],
    //     this.trackInfo.polylineY[trackIndex + 1],
    //     this.trackInfo.polylineZ[trackIndex + 1],
    //   ),
    // );
    //track-is asagebad sachiro veqtorebis sheqmna
    // try {
    //   var incident_point = this.track_incident_point(
    //     new THREE.Vector3(
    //       thistrackInfo.polylineX[trackIndex],
    //       this.Y[trackIndex],
    //       this.Z[trackIndex],
    //     ),
    //     new THREE.Vector3(
    //       thistrackInfo.polylineX[trackIndex + 1],
    //       this.Y[trackIndex + 1],
    //       this.Z[trackIndex + 1],
    //     ),
    //   );
    // } catch {
    //   var incident_point = new THREE.Vector3(
    //     thistrackInfo.polylineX[trackIndex],
    //     this.Y[trackIndex],
    //     this.Z[trackIndex],
    //   );
    // }

    trackVector.push(
      new CubicBezierCurve3(
        incidentPoint,
        new Vector3(pointer1X, pointer1Y, pointer1Z), //sivrceshi gafantvis mimartuleba
        new Vector3(pointer2X, pointer2Y, pointer2Z), //sivrceshi gafantvis mimartuleba saboloo wertiltan
        new Vector3(
          this.trackInfo.polylineX[trackIndex + 1],
          this.trackInfo.polylineY[trackIndex + 1],
          this.trackInfo.polylineZ[trackIndex + 1],
        ),
      ),
    );
    const points = trackVector[trackVector.length - 1].getPoints(100);
    const geometry = new BufferGeometry().setFromPoints(points);

    return {
      geometry,
      color: '#ff0000',
    };
  }
  // calculateIncidentPoint(point1: Vector3, point2: Vector3): void {
  // const directionalVect = [
  //   math.fraction(Math.floor(+(point2.x - point1.x).toFixed(3) * 1000), 1000),
  //   math.fraction(Math.floor(+(point2.y - point1.y).toFixed(3) * 1000), 1000),
  //   math.fraction(Math.floor(+(point2.z - point1.z).toFixed(3) * 1000), 1000),
  // ];

  // console.log(math.fraction(+(point2.x - point1.x).toFixed(3) * 1000, 1000));
  // vect.x = vect.x.multiply(direc_vect.x);
  // vect.x = vect.x.add(new algebra.Fraction(parseInt((point1.x * 1000).toFixed(0)), 1000));
  // vect.y = vect.y.multiply(direc_vect.y);
  // vect.y = vect.y.add(new algebra.Fraction(parseInt((point1.y * 1000).toFixed(0)), 1000));
  // vect.z = vect.z.multiply(direc_vect.z);
  // vect.z = vect.z.add(new algebra.Fraction(parseInt((point1.z * 1000).toFixed(0)), 1000));

  // let expr = vect.x.multiply(direc_vect.x).add(vect.y.multiply(direc_vect.y));
  // expr = expr.add(vect.z.multiply(direc_vect.z));
  // const eq = new algebra.Equation(expr, 0);
  // const sol = eq.solveFor('t');
  // const incident_point = new THREE.Vector3(
  //   eval(vect.x.eval({ t: new algebra.Fraction(sol.numer, sol.denom) }).toString()),
  //   eval(vect.y.eval({ t: new algebra.Fraction(sol.numer, sol.denom) }).toString()),
  //   eval(vect.z.eval({ t: new algebra.Fraction(sol.numer, sol.denom) }).toString()),
  // );
  // return incident_point;
  // }
  drawTracksMain(): TrackMesh[] | void {
    const tracks = [];
    let index = 0;

    if (this.trackInfo.count) {
      for (let i = 0; i < this.trackInfo.count; i++) {
        switch (this.trackInfo.numPolyline[i]) {
          case 0:
            break;
          case 2:
            tracks.push(this.drawCurvedTracks(i, index));
            break;
          default:
            tracks.push(this.drawTrackWithoutCurve(i, index));
        }
        index += this.trackInfo.numPolyline[i];
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

import { Vector3, ConeGeometry, Matrix4 } from 'three';
import EventService from '../event/event.service';
import { Jet } from '../event/event.service.types';
import { JetInfo } from './jet.service.types';

export default class JetService extends EventService {
  jetInfo: JetInfo = {
    pX: [],
    pY: [],
    pZ: [],
    phi: [],
    theta: [],
    eta: [],
    count: null,
    SGK: '',
    et: [],
  };

  init(jet: Jet): void {
    this.jetInfo.pX = this.getNumbersArrayFromTag(jet.px.toString()).map(
      (number) => +(number / 100).toFixed(7),
    );
    this.jetInfo.pY = this.getNumbersArrayFromTag(jet.py.toString()).map(
      (number) => +(number / 100).toFixed(7),
    );
    this.jetInfo.pZ = this.getNumbersArrayFromTag(jet.pz.toString()).map(
      (number) => +(number / 100).toFixed(7),
    );
    this.jetInfo.phi = this.getNumbersArrayFromTag(jet.phi.toString());
    this.jetInfo.eta = this.getNumbersArrayFromTag(jet.eta.toString());
    this.jetInfo.et = this.getNumbersArrayFromTag(jet.et.toString());
    this.jetInfo.theta = this.jetInfo.eta.map((number) => 2 * Math.atan(Math.pow(Math.E, -number)));

    this.jetInfo.count = +jet['@_count'];
    this.jetInfo.SGK = jet['@_storeGateKey'];
    console.log(this.jetInfo);
  }
  drawJetCone(): void {
    if (!this.jetInfo.count) {
      throw new Error('Can not draw Jet!!!');
    }
    const radialSegments = 32;
    for (let i = 0; i < this.jetInfo.count; i++) {
      const jetDistance = new Vector3(
        this.jetInfo.pX[i],
        this.jetInfo.pY[i],
        this.jetInfo.pZ[i],
      ).distanceTo(new Vector3(0, 0, 0));
      const jetHeight = jetDistance;
      const jetRadius = jetHeight * Math.tan(0.2);
      const geo = new ConeGeometry(jetRadius, jetHeight, radialSegments);
      geo.applyMatrix4(new Matrix4().makeTranslation(0, -(jetHeight / 2), 0));

      // const adjSideZ = Math.sqrt(Math.pow(this.X[i], 2) + Math.pow(this.Y[i], 2));
      // const adjSidePhi = Math.asin(adjSideZ / this.h[i]);
      // const adjSideX = Math.sqrt(Math.pow(this.Y[i], 2) + Math.pow(this.Z[i], 2));
      // const adjSideTheta = Math.asin(adjSideX / this.h[i]);

      /*
      this.mat[i] = new THREE.MeshToonMaterial({
        color: colorOfOriginalJet,
        transparent: true,
        opacity: 0.7,
        clippingPlanes: clip_planes,
      })
      */
    }
  }
  constructor() {
    super();
  }
}

import { Vector3, ConeGeometry, Matrix4, Quaternion } from 'three';
import EventService from '../../../services/event/event.service';
import { Jet } from '../../../services/event/event.service.types';
import { JetCone, JetInfo } from './jet.model.types';

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
  }
  drawJetCone(): JetCone[] {
    if (!this.jetInfo.count) {
      throw new Error('Can not draw Jet!!!');
    }
    const jetConeArray: JetCone[] = [];
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

      const vector = new Vector3(
        Math.sin(this.jetInfo.theta[i]) * Math.cos(this.jetInfo.phi[i]),
        Math.sin(this.jetInfo.theta[i]) * Math.sin(this.jetInfo.phi[i]),
        Math.cos(this.jetInfo.theta[i]),
      );
      const quaternion = new Quaternion();
      quaternion.setFromUnitVectors(new Vector3(0, 1, 0), vector);

      jetConeArray.push({ quaternion, geo });

      /*
      this.mat[i] = new THREE.MeshToonMaterial({
        color: colorOfOriginalJet,
        transparent: true,
        opacity: 0.7,
        clippingPlanes: clip_planes,
      })
      */
    }
    return jetConeArray;
  }
  constructor() {
    super();
  }
}

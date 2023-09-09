import Event from "#/models/Event";
import { ConeGeometry, Matrix4, Quaternion, Vector3 } from "three";

import type { EventsSlice, Jet, JetCone, JetInfo } from "#/types/app.types";

export default class JetModel extends Event {
  jetInfo: JetInfo = {
    pX: [],
    pY: [],
    pZ: [],
    phi: [],
    theta: [],
    eta: [],
    count: null,
    SGK: "",
    et: [],
  };

  init(jet: Jet): void {
    this.jetInfo.pX = this.getNumbersArrayFromTag(jet.px.toString()).map(
      (number) => +(number / 100).toFixed(7)
    );
    this.jetInfo.pY = this.getNumbersArrayFromTag(jet.py.toString()).map(
      (number) => +(number / 100).toFixed(7)
    );
    this.jetInfo.pZ = this.getNumbersArrayFromTag(jet.pz.toString()).map(
      (number) => +(number / 100).toFixed(7)
    );
    this.jetInfo.phi = this.getNumbersArrayFromTag(jet.phi.toString());
    this.jetInfo.eta = this.getNumbersArrayFromTag(jet.eta.toString());
    this.jetInfo.et = this.getNumbersArrayFromTag(jet.et.toString());
    this.jetInfo.theta = this.jetInfo.eta.map(
      (number) => 2 * Math.atan(Math.pow(Math.E, -number))
    );

    this.jetInfo.count = +jet["@_count"];
    this.jetInfo.SGK = jet["@_storeGateKey"];
  }
  drawJetCone(jetFilterValues: EventsSlice["jetFilter"]): JetCone[] {
    if (!this.jetInfo.count) {
      throw new Error("Can not draw Jet!!!");
    }

    const jetConeArray: JetCone[] = [];
    const radialSegments = 32;

    for (let i = 0; i < this.jetInfo.count; i++) {
      if (
        (jetFilterValues.phi && this.jetInfo.phi[i] < +jetFilterValues.phi) ||
        (jetFilterValues.eta && this.jetInfo.eta[i] < +jetFilterValues.eta) ||
        (jetFilterValues.et && this.jetInfo.et[i] < +jetFilterValues.et) ||
        (jetFilterValues.theta && this.jetInfo.theta[i] < +jetFilterValues.theta)
      ) {
        continue;
      }
      const jetDistance = new Vector3(
        this.jetInfo.pX[i],
        this.jetInfo.pY[i],
        this.jetInfo.pZ[i]
      ).distanceTo(new Vector3(0, 0, 0));
      const jetHeight = jetDistance;
      const jetRadius = jetHeight * Math.tan(0.2);
      const geo = new ConeGeometry(jetRadius, jetHeight, radialSegments);
      geo.applyMatrix4(new Matrix4().makeTranslation(0, -(jetHeight / 2), 0));

      const vector = new Vector3(
        Math.sin(this.jetInfo.theta[i]) * Math.cos(this.jetInfo.phi[i]),
        Math.sin(this.jetInfo.theta[i]) * Math.sin(this.jetInfo.phi[i]),
        Math.cos(this.jetInfo.theta[i])
      );
      const quaternion = new Quaternion();
      quaternion.setFromUnitVectors(new Vector3(0, 1, 0), vector);

      jetConeArray.push({ quaternion, geo });
    }
    return jetConeArray;
  }
  constructor() {
    super();
  }
}

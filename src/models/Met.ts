import { BufferAttribute, BufferGeometry, Vector3 } from "three";

import type { Met, MetInfo } from "#/types/app.types";

export default class MetService {
  metInfo: MetInfo = {
    energyX: 0,
    energyY: 0,
    energyT: 0,
    phi: null,
  };
  init(met: Met): void {
    this.metInfo.energyX = met.etx;
    this.metInfo.energyY = met.ety;
    this.metInfo.energyT = Math.sqrt(Math.pow(met.etx, 2) + Math.pow(met.ety, 2));
    this.metInfo.phi = (Math.atan(met.ety / met.etx) * 180) / Math.PI;
  }
  drawMet(): { geometry: BufferGeometry } {
    const start = new Vector3(0, 0, 0);
    const end = new Vector3(this.metInfo.energyX * 5, this.metInfo.energyY * 5, 0);
    const vertices = new Float32Array([
      start.x,
      start.y,
      start.z,
      end.x,
      end.y,
      end.z,
    ]);
    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new BufferAttribute(vertices, 3));

    return { geometry };
  }
}

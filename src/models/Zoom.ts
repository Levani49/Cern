import { MathUtils, PerspectiveCamera, Vector3 } from "three";

import type { emptyFunc } from "#/types/app.types";

export default class Zoom {
  start(camera: PerspectiveCamera, cb: emptyFunc | undefined = undefined): void {
    let v = 75;
    let sign = 1;

    if (camera.position.distanceTo(new Vector3(0, 0, 0)) < 4) {
      sign = -1;
    }

    const s = (): void => {
      this.animationRef = requestAnimationFrame(s);

      camera.updateProjectionMatrix();
      const width = 1;
      const fov = v;
      const distance = width / (2 * Math.tan(MathUtils.degToRad(fov * 0.5)));

      const lerpDist =
        distance / camera.position.distanceTo(new Vector3(0, 0, 0)) / 50;

      camera.position.lerpVectors(
        camera.position,
        new Vector3(0, 0, 0),
        sign * lerpDist
      );

      v += sign * 0.1;
      camera.fov = v;

      if (v > 120) {
        if (cb) {
          cb();
          this.stop(camera);
        }
      }

      camera.updateProjectionMatrix();
    };

    s();
  }
  stop(camera: PerspectiveCamera): void {
    if (this.animationRef) {
      cancelAnimationFrame(this.animationRef);
      camera.fov = 75;
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    }
  }

  constructor(private animationRef: number = 0) {}
}

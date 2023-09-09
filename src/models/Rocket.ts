import { Vector3 } from "three";

import { Camera } from "@react-three/fiber";

import type { emptyFunc } from "#/types/app.types";

export default class Rocket {
  public configuration = {
    maxHeight: 18,
    lerpSpeed: 0.00375,
    threshold: 2,
  };

  start(camera: Camera, cb: emptyFunc | undefined = undefined): void {
    const { maxHeight, lerpSpeed, threshold } = this.configuration;
    let targetPosition: Vector3;
    const { x, z } = camera.position;

    if (camera.position.y > 14) {
      targetPosition = new Vector3(x, 1, z);
    } else {
      targetPosition = new Vector3(0, maxHeight, 0);
    }

    const s = (): void => {
      this.animationRef = requestAnimationFrame(s);
      const newPosition = camera.position.clone().lerp(targetPosition, lerpSpeed);
      camera.position.copy(newPosition);
      camera.lookAt(0, 0, 0);

      if (camera.position.distanceTo(targetPosition) <= threshold) {
        cancelAnimationFrame(this.animationRef);
        if (cb) {
          cb();
        }
      }
    };

    s();
  }

  stop(): void {
    if (this.animationRef) {
      cancelAnimationFrame(this.animationRef);
    }
  }

  constructor(private animationRef: number | null = null) {}
}

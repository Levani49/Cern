import { Camera } from "@react-three/fiber";

import { emptyFn } from "../utils/emptyFn.utils";

import type { eFn } from "../app/app.types";
/**
 *
 */
export default class Helix {
  public settings = {
    radius: 6.6,
    angleStep: 0.05,
    heightStep: 0.05,
    initialHeight: 0.5,
    speed: 0.05,
    fullCircle: 144,
  };
  /**
   *
   * @param animationRef
   * @param animationRe
   */
  constructor(private animationRef: number | null = null) {}

  /**
   *
   * @param camera
   * @param cb
   */
  start(camera: Camera, cb: eFn = emptyFn): void {
    const { angleStep, radius, heightStep, initialHeight, speed, fullCircle } = this.settings;
    let i = 0;
    /**
     *
     */
    const s = (): void => {
      this.animationRef = requestAnimationFrame(s);

      const x = Math.cos(angleStep * i) * radius;
      const y = i * heightStep + initialHeight;
      const z = Math.sin(angleStep * i) * radius;

      camera.position.set(x, y, z);
      camera.lookAt(0, 0, 0);

      i += speed;

      if (i > fullCircle) {
        this.stop();
        cb();
      }
    };

    s();
  }

  /**
   *
   */
  stop(): void {
    if (this.animationRef) {
      cancelAnimationFrame(this.animationRef);
    }
  }
}

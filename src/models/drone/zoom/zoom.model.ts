import { PerspectiveCamera } from "three";

import { emptyFunc } from "@type/app.types";

/**
 * Zoom class that animates a PerspectiveCamera by moving it closer to the origin and reducing its field of view.
 */
export default class Zoom {
  /**
   * The settings for the Zoom animation.
   *
   * @property {number} fovIterator - The amount to decrease the field of view each step.
   * @property {number} xAxisIterator - The amount to move the camera towards the origin in the X direction each step.
   * @property {number} fullStep - The total number of steps for the animation.
   */
  public configuration = {
    fovIterator: -0.09,
    xAxisIterator: -0.005,
    fullStep: 450
  };

  /**
   * Starts the Zoom animation for the specified camera.
   *
   * @param {PerspectiveCamera} camera - The camera to animate.
   * @param cb
   */
  start(
    camera: PerspectiveCamera,
    cb: emptyFunc | undefined = undefined
  ): void {
    camera.position.set(5, 1, 0);

    const { xAxisIterator, fovIterator, fullStep } = this.configuration;
    let i = 0;

    /**
     * The function that performs each step of the Zoom animation.
     */
    const s = (): void => {
      this.animationRef = requestAnimationFrame(s);

      camera.position.x += xAxisIterator / 10;
      camera.fov += fovIterator;
      camera.updateProjectionMatrix();
      i++;

      camera.lookAt(0, 0, 0);

      if (i > fullStep) {
        this.stop(camera);

        if (cb) {
          cb();
        }
      }
    };

    s();
  }

  /**
   * Stops the Zoom animation for the specified camera.
   *
   * @param {PerspectiveCamera} camera - The camera to stop animating.
   */
  stop(camera: PerspectiveCamera): void {
    if (this.animationRef) {
      cancelAnimationFrame(this.animationRef);
      camera.position.set(3, 3, 3);
      camera.fov = 75;
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    }
  }

  /**
   * Creates a new Zoom instance.
   *
   * @param {number} [animationRef=0] - Optional animation reference ID to use when stopping the animation.
   */
  constructor(private animationRef: number = 0) {}
}

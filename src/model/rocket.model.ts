import { Camera } from "@react-three/fiber";

import type { eFn } from "../app/app.types";
import { emptyFn } from "../utils/emptyFn.utils";

/**
 * Rocket class for animating a rocket launch.
 */
export default class Rocket {
  public configuration = {
    startingPoint: {
      x: 3,
      y: 3,
      z: 3,
    },
    maxHeight: 18,
    maxIteration: 1000,
  };

  private yAxisIterator = 0;
  private xAxisIterator = 0;
  private zAxisIterator = 0;

  /**
   * Prepares the camera for rocket animation by setting the starting point and look-at point.
   *
   * @param camera - The camera used in the animation.
   */
  prepare(camera: Camera): void {
    const { maxHeight, startingPoint, maxIteration } = this.configuration;
    const { x, y, z } = startingPoint;

    this.yAxisIterator = (maxHeight - y) / maxIteration;
    this.xAxisIterator = (0 - x) / maxIteration;
    this.zAxisIterator = (0 - z) / maxIteration;

    camera.position.set(x, y, z);
    camera.lookAt(0, 0, 0);
  }

  /**
   * Starts the rocket animation.
   *
   * @param camera - The camera used in the animation.
   * @param cb - Optional callback function to be called after animation is finished.
   */
  start(camera: Camera, cb: eFn = emptyFn): void {
    this.prepare(camera);
    let cameraX: number;
    let cameraY: number;
    let cameraZ: number;

    /**
     * Recursive function that animates the rocket launch.
     */
    const s = (): void => {
      this.animationRef = requestAnimationFrame(s);
      const { x, y, z } = camera.position;

      if (y + this.yAxisIterator > this.configuration.maxHeight) {
        this.stop();
        cb();
      }

      cameraX = x + this.xAxisIterator;
      cameraY = y + this.yAxisIterator;
      cameraZ = z + this.zAxisIterator;

      camera.position.set(cameraX, cameraY, cameraZ);
      camera.lookAt(0, 0, 0);
    };

    s();
  }

  /**
   * Stops the rocket animation.
   */
  stop(): void {
    if (this.animationRef) {
      cancelAnimationFrame(this.animationRef);
    }
  }

  /**
   * Constructs a new Rocket instance.
   *
   * @param animationRef - Optional animation reference value.
   */
  constructor(private animationRef: number | null = null) {}
}

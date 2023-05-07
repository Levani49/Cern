import { Camera } from '@react-three/fiber';

import { emptyFunc } from '../../../types/app.types';

/**
 * The `Helix` class provides functionality for animating a camera around a helix-like trajectory.
 */
export default class Helix {
  /**
   * An object that holds settings used for the animation, including:
   * - `radius`: The radius of the helix.
   * - `angleStep`: The step size for the angle of rotation around the helix.
   * - `heightStep`: The step size for the height of the camera as it moves along the helix.
   * - `initialHeight`: The initial height of the camera when it starts moving.
   * - `speed`: The speed at which the camera moves along the helix.
   * - `fullCircle`: The number of iterations of the animation loop before it stops.
   */
  public configuration = {
    radius: 6.6,
    angleStep: 0.05,
    heightStep: 0.05,
    initialHeight: 0.5,
    speed: 0.05,
    fullCircle: 144,
  };

  /**
   * Creates a new instance of the `Helix` class.
   *
   * @param animationRef - A reference to the animation frame.
   */
  constructor(private animationRef: number | null = null) {}

  /**
   * Starts the animation loop for the camera movement along the helix.
   *
   * @param camera - The camera object to move along the helix.
   * @param cb - An optional callback function to execute when the animation is complete.
   */
  start(camera: Camera, cb: emptyFunc | undefined = undefined): void {
    const { angleStep, radius, heightStep, initialHeight, speed, fullCircle } = this.configuration;
    let i = 0;

    /**
     * The animation loop for the camera movement along the helix.
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
        if (cb) {
          cb();
        }
      }
    };

    s();
  }

  /**
   * Stops the animation loop for the camera movement along the helix.
   */
  stop(): void {
    if (this.animationRef) {
      cancelAnimationFrame(this.animationRef);
    }
  }
}

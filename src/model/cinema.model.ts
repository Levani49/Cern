import { Camera } from "@react-three/fiber";
import { CatmullRomCurve3, Vector3 } from "three";

import { emptyFunc } from "../types/app.types";

/**
 * A class for controlling the camera movement in a cinema-style animation.
 */
export default class Cinema {
  public configuration = {
    road: new CatmullRomCurve3([
      new Vector3(22, 16, 14),
      new Vector3(12, 3, 28),
      new Vector3(0, 0, 22),
    ]).getPoints(700),
  };

  /**
   * Starts the cinema-style animation.
   *
   * @param {Camera} camera - The camera object to be controlled.
   * @param {eFn} cb - A callback function to be called when the animation is complete.
   */
  start(camera: Camera, cb: emptyFunc | undefined = undefined): void {
    const { road } = this.configuration;

    let shouldRotationStart = false;
    let cameraIsOnZ0 = false;
    let halfRoadIsDone = false;
    let i = 0;
    let alpha = Math.PI / 2;
    let distance = 0;
    let reverse = 1;

    /**
     * A callback function for the animation loop.
     */
    const s = (): void => {
      this.animationRef = requestAnimationFrame(s);
      camera.lookAt(0, 0.01, 0);

      if (shouldRotationStart === false && cameraIsOnZ0 === false) {
        const x = road[i].x;
        const y = road[i].y;
        const z = road[i].z;

        camera.position.set(x, y, z);
        i += reverse;

        if (halfRoadIsDone === false && i === road.length) {
          cameraIsOnZ0 = true;
          i--;
        }

        if (halfRoadIsDone && i === 0) {
          this.stop();
          if (cb) {
            cb();
          }
        }
      }

      if (cameraIsOnZ0) {
        camera.position.z -= 0.15 * reverse;
        distance = camera.position.distanceTo(new Vector3(0, 0, 0));

        if (halfRoadIsDone === false && Math.abs(distance) < 0.15) {
          cameraIsOnZ0 = false;
          shouldRotationStart = true;
          reverse = -reverse;
        }

        if (halfRoadIsDone && distance > 22) {
          cameraIsOnZ0 = false;
        }
      }

      if (shouldRotationStart) {
        camera.position.x = distance * Math.cos(alpha);
        camera.position.z = distance * Math.sin(alpha);
        alpha -= 0.01;

        if (alpha < Math.PI * (-3 / 2)) {
          shouldRotationStart = false;
          halfRoadIsDone = true;
          cameraIsOnZ0 = true;
        }
      }
    };

    s();
  }

  /**
   * Stops the cinema-style animation.
   */
  stop(): void {
    if (this.animationRef) {
      cancelAnimationFrame(this.animationRef);
    }
  }

  /**
   * Creates a new instance of the `Cinema` class.
   *
   * @param {number} animationRef - The animation reference ID.
   */
  constructor(private animationRef: number = 0) {}
}

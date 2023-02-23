import { PerspectiveCamera } from "three";
import { eFn } from "../app/app.types";
import { emptyFn } from "../utils/emptyFn.utils";

/**
 *
 */
export default class Zoom {
  settings = {
    fovIterator: -0.09,
    xAxisIterator: -0.005,
    fullStep: 450,
  };

  /**
   *
   * @param camera
   * @param cb
   */
  start(camera: PerspectiveCamera, cb: eFn = emptyFn): void {
    camera.position.set(5, 1, 0);

    const { xAxisIterator, fovIterator, fullStep } = this.settings;
    let i = 0;

    /**
     *
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
        cb();
      }
    };

    s();
  }

  /**
   *
   * @param camera
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
   *
   * @param animationRef
   */
  constructor(private animationRef: number = 0) {}
}

import { Camera } from "@react-three/fiber";
import ee from "../utils/EventsEmitter.utils";

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
   */
  constructor(private animationRef: number = 0) {}

  /**
   *
   * @param camera
   */
  start(camera: Camera): void {
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
      i += speed;

      if (i > fullCircle) {
        this.stop();
        ee.emit("stop");
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

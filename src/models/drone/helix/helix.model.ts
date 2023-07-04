import { Camera } from "@react-three/fiber";

import { emptyFunc } from "@type/app.types";

export default class Helix {
  public configuration = {
    speed: 0.012,
    finishLine: 12.6
  };

  start(camera: Camera, cb: emptyFunc | undefined = undefined): void {
    const { speed, finishLine } = this.configuration;
    let iterator = 0;

    const radius = Math.sqrt(
      Math.pow(camera.position.x, 2) + Math.pow(camera.position.z, 2)
    );
    const phi = Math.atan2(camera.position.z, camera.position.x);

    const s = (): void => {
      this.animationRef = requestAnimationFrame(s);

      const incrementedRadius = radius + iterator * 1.5;

      const x = Math.cos(phi + iterator) * incrementedRadius;
      const y = camera.position.y + 0.01;
      const z = Math.sin(phi + iterator) * incrementedRadius;

      iterator += speed;

      camera.position.set(x, y, z);
      camera.lookAt(0, 0, 0);

      if (iterator > finishLine) {
        this.stop();
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

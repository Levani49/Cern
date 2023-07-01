import { Camera } from "@react-three/fiber";

import { emptyFunc } from "@type/app.types";

export default class Helix {
  public configuration = {
    radius: 6.6,
    angleStep: 0.05,
    heightStep: 0.05,
    initialHeight: 0.5,
    speed: 0.18,
    fullCircle: 100
  };

  start(camera: Camera, cb: emptyFunc | undefined = undefined): void {
    let i = 0;

    const radius = Math.sqrt(
      Math.pow(camera.position.x, 2) + Math.pow(camera.position.z, 2)
    );
    const phi = Math.atan2(camera.position.z, camera.position.x);

    const s = (): void => {
      this.animationRef = requestAnimationFrame(s);

      const rad = radius + i * 1.5;

      const x = Math.cos(phi + i) * rad;
      const y = camera.position.y + 0.01;
      const z = Math.sin(phi + i) * rad;
      console.log(i);
      i += 0.0125;
      camera.position.set(x, y, z);
      camera.lookAt(0, 0, 0);

      if (i > 12.6) {
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

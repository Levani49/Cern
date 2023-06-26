import { Camera } from "@react-three/fiber";

import { emptyFunc } from "@type/app.types";

export default class Helix {
  public configuration = {
    radius: 6.6,
    angleStep: 0.05,
    heightStep: 0.05,
    initialHeight: 0.5,
    speed: 0.18,
    fullCircle: 144
  };

  start(camera: Camera, cb: emptyFunc | undefined = undefined): void {
    const { angleStep, radius, heightStep, initialHeight, speed, fullCircle } =
      this.configuration;
    let i = 0;

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

  stop(): void {
    if (this.animationRef) {
      cancelAnimationFrame(this.animationRef);
    }
  }

  constructor(private animationRef: number | null = null) {}
}

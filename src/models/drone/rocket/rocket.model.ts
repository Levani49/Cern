import { Camera } from "@react-three/fiber";

import { emptyFunc } from "@type/app.types";

export default class Rocket {
  public configuration = {
    startingPoint: {
      x: 3,
      y: 3,
      z: 3
    },
    maxHeight: 18,
    maxIteration: 1000
  };

  private yAxisIterator = 0;
  private xAxisIterator = 0;
  private zAxisIterator = 0;

  prepare(camera: Camera): void {
    const { maxHeight, startingPoint, maxIteration } = this.configuration;
    const { x, y, z } = startingPoint;

    this.yAxisIterator = (maxHeight - y) / maxIteration;
    this.xAxisIterator = (0 - x) / maxIteration;
    this.zAxisIterator = (0 - z) / maxIteration;

    camera.position.set(x, y, z);
    camera.lookAt(0, 0, 0);
  }

  start(camera: Camera, cb: emptyFunc | undefined = undefined): void {
    this.prepare(camera);
    let cameraX: number;
    let cameraY: number;
    let cameraZ: number;

    const s = (): void => {
      this.animationRef = requestAnimationFrame(s);
      const { x, y, z } = camera.position;

      if (y + this.yAxisIterator > this.configuration.maxHeight) {
        this.stop();
        if (cb) {
          cb();
        }
      }

      cameraX = x + this.xAxisIterator;
      cameraY = y + this.yAxisIterator;
      cameraZ = z + this.zAxisIterator;

      camera.position.set(cameraX, cameraY, cameraZ);
      camera.lookAt(0, 0, 0);
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

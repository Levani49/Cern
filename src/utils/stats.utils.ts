/**
 *
 */
export default class StatsUtils {
  private beginTime = (performance || Date).now();
  private prevTime = this.beginTime;
  private frames = 0;
  fps = 0;
  memory = 0;

  /**
   *
   */
  private end(): number {
    this.frames++;
    const time = (performance || Date).now();

    if (time >= this.prevTime + 1000) {
      this.fps = Math.round((this.frames * 1000) / (time - this.prevTime));

      this.prevTime = time;
      this.frames = 0;

      const BYTES = 1048576; // bytes in megabyte

      const memory = performance.memory;
      if (memory) {
        this.memory = Math.round(memory.usedJSHeapSize / BYTES);
      }
    }

    return time;
  }

  /**
   *
   */
  update(): void {
    this.beginTime = this.end();
  }

  /**
   *
   */
  constructor() {
    // do nothing
  }
}

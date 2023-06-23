import { Camera } from "@react-three/fiber";

import { Vector3 } from "three";

export default class CameraViews {
  public isActive = false;
  private lerpSpeed = 0.0825;

  leftView(camera: Camera): void {
    if (this.isActive) {
      return;
    }
    const distance = camera.position.distanceTo(new Vector3(0, 0, 0));
    const targetPosition = new Vector3(0, 0, distance);
    const threshold = 0.01;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let animationRef: number;

    const start = (): void => {
      this.isActive = true;
      animationRef = requestAnimationFrame(start);
      const newPosition = camera.position
        .clone()
        .lerp(targetPosition, this.lerpSpeed);
      camera.position.copy(newPosition);

      if (camera.position.distanceTo(targetPosition) <= threshold) {
        cancelAnimationFrame(animationRef);
        this.isActive = false;
      }
    };

    start();
  }

  frontView(camera: Camera): void {
    if (this.isActive) {
      return;
    }
    const distance = camera.position.distanceTo(new Vector3(0, 0, 0));
    const targetPosition = new Vector3(distance, 0, 0);
    const threshold = 0.01;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let animationRef: number;

    const start = (): void => {
      this.isActive = true;
      animationRef = requestAnimationFrame(start);
      const newPosition = camera.position
        .clone()
        .lerp(targetPosition, this.lerpSpeed);
      camera.position.copy(newPosition);

      if (camera.position.distanceTo(targetPosition) <= threshold) {
        cancelAnimationFrame(animationRef);
        this.isActive = false;
      }
    };

    start();
  }

  isoView(camera: Camera): void {
    if (this.isActive) {
      return;
    }
    const distance = camera.position.distanceTo(new Vector3(0, 0, 0)) / 1.732;
    const targetPosition = new Vector3(distance, distance, distance);
    const threshold = 0.01;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let animationRef: number;

    const start = (): void => {
      this.isActive = true;
      animationRef = requestAnimationFrame(start);
      const newPosition = camera.position
        .clone()
        .lerp(targetPosition, this.lerpSpeed);
      camera.position.copy(newPosition);

      if (camera.position.distanceTo(targetPosition) <= threshold) {
        cancelAnimationFrame(animationRef);
        this.isActive = false;
      }
    };

    start();
  }
}

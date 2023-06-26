import { Camera } from "@react-three/fiber";

import { Vector3 } from "three";

export default class CameraViews {
  public isActive = false;
  private lerpSpeed = 0.0825;
  private animationRef = 0;
  private threshold = 0.01;

  leftView(camera: Camera): void {
    const distance = camera.position.distanceTo(new Vector3(0, 0, 0));
    const targetPosition = new Vector3(0, 0, distance);

    this.start(camera, targetPosition);
  }

  frontView(camera: Camera): void {
    const distance = camera.position.distanceTo(new Vector3(0, 0, 0));
    const targetPosition = new Vector3(distance, 0, 0);
    this.start(camera, targetPosition);
  }

  bottomView(camera: Camera): void {
    const distance = camera.position.distanceTo(new Vector3(0, 0, 0));
    const targetPosition = new Vector3(0, -distance, 0);
    this.start(camera, targetPosition);
  }

  rightView(camera: Camera): void {
    const distance = camera.position.distanceTo(new Vector3(0, 0, 0));
    const targetPosition = new Vector3(0, 0, -distance);
    this.start(camera, targetPosition);
  }

  backView(camera: Camera): void {
    const distance = camera.position.distanceTo(new Vector3(0, 0, 0));
    const targetPosition = new Vector3(-distance, 0, 0);
    this.start(camera, targetPosition);
  }

  topView(camera: Camera): void {
    const distance = camera.position.distanceTo(new Vector3(0, 0, 0));
    const targetPosition = new Vector3(0, distance, 0);
    this.start(camera, targetPosition);
  }

  isoView(camera: Camera): void {
    const distance = camera.position.distanceTo(new Vector3(0, 0, 0)) / 1.732;
    const targetPosition = new Vector3(distance, distance, distance);
    this.start(camera, targetPosition);
  }

  start(camera: Camera, targetPosition: Vector3): void {
    if (this.isActive) {
      return;
    }

    const s = (): void => {
      this.isActive = true;
      this.animationRef = requestAnimationFrame(s);
      const newPosition = camera.position
        .clone()
        .lerp(targetPosition, this.lerpSpeed);
      camera.position.copy(newPosition);

      if (camera.position.distanceTo(targetPosition) <= this.threshold) {
        cancelAnimationFrame(this.animationRef);
        this.isActive = false;
      }
    };

    s();
  }
}

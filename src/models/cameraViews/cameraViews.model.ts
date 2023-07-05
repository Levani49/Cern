import { Camera } from "@react-three/fiber";

import { Easing, Tween } from "@tweenjs/tween.js";
import { Vector3 } from "three";

interface TweenProps {
  currentPosition: Vector3;
  targetPosition: Vector3;
  camera: Camera;
}

export default class CameraViews {
  public isActive = false;
  private duration = 1000;
  private animationRef = 0;
  private tw: Tween<{
    x: number;
    y: number;
    z: number;
  }>;

  prepareTween({ currentPosition, targetPosition, camera }: TweenProps): void {
    if (this.isActive) {
      this.stop();
    }

    this.isActive = true;

    const { x, y, z } = currentPosition;

    this.tw = new Tween({
      x,
      y,
      z
    })
      .to(
        { x: targetPosition.x, y: targetPosition.y, z: targetPosition.z },
        this.duration
      )
      .easing(Easing.Quadratic.InOut)
      .onUpdate((position) => {
        const { x, y, z } = position;
        camera.position.set(x, y, z);
        camera.lookAt(0, 0, 0);
      })
      .onComplete(() => this.stop())
      .start();
  }

  leftView(camera: Camera): void {
    const distance = camera.position.distanceTo(new Vector3(0.0001, 0.0001, 0));

    const targetPosition = new Vector3(
      camera.position.y / 1000,
      camera.position.y / 1000,
      distance
    );

    this.prepareTween({
      currentPosition: camera.position,
      targetPosition,
      camera
    });

    this.start();
  }

  frontView(camera: Camera): void {
    const distance = camera.position.distanceTo(new Vector3(0, 0, 0));

    const targetPosition = new Vector3(
      distance,
      camera.position.y / 1000,
      camera.position.z / 1000
    );

    this.prepareTween({
      currentPosition: camera.position,
      targetPosition,
      camera
    });

    this.start();
  }

  bottomView(camera: Camera): void {
    const distance = camera.position.distanceTo(new Vector3(0, 0, 0));
    const targetPosition = new Vector3(
      camera.position.x / 1000,
      -distance,
      camera.position.z / 1000
    );

    this.prepareTween({
      currentPosition: camera.position,
      targetPosition,
      camera
    });

    this.start();
  }

  rightView(camera: Camera): void {
    const distance = camera.position.distanceTo(new Vector3(0, 0, 0));

    const targetPosition = new Vector3(
      camera.position.x / 1000,
      camera.position.y / 1000,
      -distance
    );

    this.prepareTween({
      currentPosition: camera.position,
      targetPosition,
      camera
    });

    this.start();
  }

  backView(camera: Camera): void {
    const distance = camera.position.distanceTo(new Vector3(0, 0, 0));
    const targetPosition = new Vector3(
      -distance,
      camera.position.y / 1000,
      camera.position.z / 1000
    );

    this.prepareTween({
      currentPosition: camera.position,
      targetPosition,
      camera
    });

    this.start();
  }

  topView(camera: Camera): void {
    const distance = camera.position.distanceTo(new Vector3(0, 0, 0));
    const targetPosition = new Vector3(
      camera.position.x / 1000,
      distance,
      camera.position.z / 1000
    );

    this.prepareTween({
      currentPosition: camera.position,
      targetPosition,
      camera
    });

    this.start();
  }

  isoView(camera: Camera): void {
    const distance = camera.position.distanceTo(new Vector3(0, 0, 0)) / 1.732;
    const targetPosition = new Vector3(distance, distance, distance);

    this.prepareTween({
      currentPosition: camera.position,
      targetPosition,
      camera
    });

    this.start();
  }

  start(): void {
    const animate = (): void => {
      this.animationRef = requestAnimationFrame(animate);
      this.tw.update();
    };

    animate();
    this.isActive = true;
  }

  stop(): void {
    this.isActive = false;
    cancelAnimationFrame(this.animationRef);
  }

  constructor() {
    // just leave this for eslint to read
    this.tw = new Tween({ x: 0, y: 0, z: 0 });
  }
}

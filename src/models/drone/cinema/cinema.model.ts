import { Camera } from "@react-three/fiber";

import { Easing, Tween } from "@tweenjs/tween.js";
import { Vector3 } from "three";

import { emptyFunc } from "@type/app.types";

export default class Cinema {
  animationRef = 0;

  start(camera: Camera, cb: emptyFunc | undefined = undefined): void {
    const targetPositions = [
      new Vector3(22, 16, 14),
      new Vector3(12, 3, 28),
      new Vector3(0, 0, 22),
      new Vector3(0, 0, 0),
      new Vector3(0, 0, 21),
      new Vector3(12, 3, 28),
      new Vector3(22, 16, 14),
      new Vector3(camera.position.x, camera.position.y, camera.position.z)
    ];

    let currentIndex = 0;
    let targetPosition = targetPositions[currentIndex];

    let tw: Tween<{
      x: number;
      y: number;
      z: number;
    }>;

    let rotationTween: Tween<{
      rotationY: number;
    }>;

    let startRotate = false;

    const animateToNextPosition = (): void => {
      const startPosition = camera.position.clone();
      tw = new Tween({
        x: startPosition.x,
        y: startPosition.y,
        z: startPosition.z
      })
        .to({ x: targetPosition.x, y: targetPosition.y, z: targetPosition.z }, 3500)
        .easing(Easing.Quadratic.InOut)
        .onUpdate((position) => {
          const { x, y, z } = position;
          camera.position.set(x, y, z);
          camera.lookAt(0, 0, 0);
        })
        .onComplete(() => {
          currentIndex++;
          if (currentIndex < targetPositions.length) {
            targetPosition = targetPositions[currentIndex];
            if (targetPosition.equals(new Vector3(0, 0, 21))) {
              startRotate = true;
              // Perform 360-degree rotation
              rotationTween = new Tween({ rotationY: camera.rotation.y })
                .to({ rotationY: camera.rotation.y + Math.PI * 2 }, 8000)
                .easing(Easing.Linear.None)
                .onUpdate((obj) => {
                  camera.rotation.y = obj.rotationY;
                })
                .onComplete(() => {
                  animateToNextPosition();
                  startRotate = false;
                })
                .start();
            } else {
              animateToNextPosition();
            }
          } else {
            if (cb) {
              cb();
            }
          }
        })
        .start();
    };

    animateToNextPosition();

    const animate = (): void => {
      this.animationRef = requestAnimationFrame(animate);

      if (startRotate) {
        rotationTween.update();
      } else {
        tw.update();
      }
    };

    animate();
  }

  stop(): void {
    if (this.animationRef) {
      cancelAnimationFrame(this.animationRef);
    }
  }

  constructor() {
    /* init */
  }
}

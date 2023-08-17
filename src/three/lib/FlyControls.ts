import { Camera } from "@react-three/fiber";

import { Clock, EventDispatcher, Matrix4, Quaternion, Vector3 } from "three";

const _changeEvent = { type: "change" };

class FlyControls extends EventDispatcher {
  object: Camera | null;
  domElement: HTMLElement | null;
  enabled = true;
  movementSpeed = 1.0;
  rollSpeed = 0.005;
  dragToLook = false;
  autoForward = false;
  tmpQuaternion = new Quaternion();
  status = 0;
  movementSpeedMultiplier = 0.1;
  moveState = {
    up: 0,
    down: 0,
    left: 0,
    right: 0,
    forward: 0,
    back: 0,
    pitchUp: 0,
    pitchDown: 0,
    yawLeft: 0,
    yawRight: 0,
    rollLeft: 0,
    rollRight: 0
  };
  moveVector = new Vector3(0, 0, 0);
  rotationVector = new Vector3(0, 0, 0);
  EPS = 0.000001;

  lastQuaternion = new Quaternion();
  lastPosition = new Vector3();

  keydown = (event: KeyboardEvent): void => {
    if (event.altKey || this.enabled === false) {
      return;
    }

    switch (event.code) {
      case "ShiftLeft":
      case "ShiftRight":
        this.movementSpeedMultiplier = 0.1;
        break;

      case "KeyW":
        // this.moveState.forward = 1;
        this.movementSpeed += 0.1;
        break;
      case "KeyS":
        // this.moveState.back = 1;
        this.movementSpeed -= 0.1;
        break;

      case "KeyA":
        this.moveState.left = 1;
        break;
      case "KeyD":
        this.moveState.right = 1;
        break;

      case "KeyR":
        this.moveState.up = 1;
        break;
      case "KeyF":
        this.moveState.down = 1;
        break;

      case "ArrowUp":
        this.moveState.pitchUp = 1;
        break;
      case "ArrowDown":
        this.moveState.pitchDown = 1;
        break;

      case "ArrowLeft":
        this.moveState.yawLeft = 1;
        break;
      case "ArrowRight":
        this.moveState.yawRight = 1;
        break;

      case "KeyQ":
        this.moveState.rollLeft = 1;
        break;
      case "KeyE":
        this.moveState.rollRight = 1;
        break;
      case "Space":
        this.movementSpeed = 0;
        break;
    }

    console.log(this.movementSpeed);

    this.updateMovementVector();
    this.updateRotationVector();
  };

  keyup = (event: KeyboardEvent): void => {
    if (this.enabled === false) return;

    switch (event.code) {
      case "ShiftLeft":
      case "ShiftRight":
        this.movementSpeedMultiplier = 1;
        break;

      case "KeyW":
        this.moveState.forward = 0;
        break;
      case "KeyS":
        this.moveState.back = 0;
        break;

      case "KeyA":
        this.moveState.left = 0;
        break;
      case "KeyD":
        this.moveState.right = 0;
        break;

      case "KeyR":
        this.moveState.up = 0;
        break;
      case "KeyF":
        this.moveState.down = 0;
        break;

      case "ArrowUp":
        this.moveState.pitchUp = 0;
        break;
      case "ArrowDown":
        this.moveState.pitchDown = 0;
        break;

      case "ArrowLeft":
        this.moveState.yawLeft = 0;
        break;
      case "ArrowRight":
        this.moveState.yawRight = 0;
        break;

      case "KeyQ":
        this.moveState.rollLeft = 0;
        break;
      case "KeyE":
        this.moveState.rollRight = 0;
        break;
    }

    this.updateMovementVector();
    this.updateRotationVector();
  };

  pointerdown = (event: MouseEvent): void => {
    if (this.enabled === false) return;
    this.status++;

    switch (event.button) {
      case 0:
        this.moveState.forward = 1;

        break;
      default:
        this.moveState.forward = 0;
        this.moveState.back = 0;
    }

    this.updateMovementVector();
  };

  pointermove = (event: PointerEvent): void => {
    if (this.enabled === false) return;

    if (!this.dragToLook || this.status > 0) {
      const container = this.getContainerDimensions();
      const halfWidth = container.size[0] / 2;
      const halfHeight = container.size[1] / 2;

      this.moveState.yawLeft =
        -(event.pageX - container.offset[0] - halfWidth) / halfWidth;
      this.moveState.pitchDown =
        (event.pageY - container.offset[1] - halfHeight) / halfHeight;

      this.updateRotationVector();
    }
  };

  pointerup = (event: PointerEvent): void => {
    if (this.enabled === false) return;

    this.status--;

    this.moveState.yawLeft = this.moveState.pitchDown = 0;

    switch (event.button) {
      case 0:
        this.moveState.forward = 0;
        this.moveState.back = 0;
        break;
      case 2:
        this.centerAxis();
        break;
    }

    this.updateMovementVector();
    this.updateRotationVector();
  };

  contextMenu = (event: Event): void => {
    if (this.enabled === false) return;

    event.preventDefault();
  };

  update = (delta: number): void => {
    if (this.enabled === false) return;

    const moveMult = delta * this.movementSpeed;
    const rotMult = delta * this.rollSpeed;

    if (this.object) {
      this.object.translateX(this.moveVector.x * moveMult);
      this.object.translateY(this.moveVector.y * moveMult);
      this.object.translateZ(this.moveVector.z * moveMult);

      this.tmpQuaternion
        .set(
          this.rotationVector.x * rotMult,
          this.rotationVector.y * rotMult,
          this.rotationVector.z * rotMult,
          1
        )
        .normalize();
      this.object.quaternion.multiply(this.tmpQuaternion);

      if (
        this.lastPosition.distanceToSquared(this.object.position) > this.EPS ||
        8 * (1 - this.lastQuaternion.dot(this.object.quaternion)) > this.EPS
      ) {
        this.dispatchEvent(_changeEvent);
        this.lastQuaternion.copy(this.object.quaternion);
        this.lastPosition.copy(this.object.position);
      }
    }
  };

  updateMovementVector = (): void => {
    const forward =
      this.moveState.forward || (this.autoForward && !this.moveState.back) ? 1 : 0;

    this.moveVector.x = -this.moveState.left + this.moveState.right;
    this.moveVector.y = -this.moveState.down + this.moveState.up;
    this.moveVector.z = -forward + this.moveState.back;
  };

  updateRotationVector = (): void => {
    this.rotationVector.x = -this.moveState.pitchDown + this.moveState.pitchUp;
    this.rotationVector.y = -this.moveState.yawRight + this.moveState.yawLeft;
    this.rotationVector.z = -this.moveState.rollRight + this.moveState.rollLeft;
  };

  centerAxis = (): void => {
    this.status = 0;
    this.moveState.forward = 0;
    const targetPosition = new Vector3(0, 0, 0);
    const speed = 2;
    const thresholdAngle = 0.01;
    const clock = new Clock();

    const animate = (): void => {
      if (!this.object) return;

      const request = window.requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const currentPosition = this.object.position;
      const currentQuaternion = this.object.quaternion;

      const targetQuaternion = new Quaternion().setFromRotationMatrix(
        new Matrix4().lookAt(currentPosition, targetPosition, this.object.up)
      );

      const angleDiff = currentQuaternion.angleTo(targetQuaternion);

      if (angleDiff <= thresholdAngle) {
        window.cancelAnimationFrame(request);
      } else {
        const step = speed * delta;
        this.object.quaternion.rotateTowards(targetQuaternion, step);
      }
    };

    animate();
  };

  getContainerDimensions = (): { size: number[]; offset: number[] } => {
    if (this.domElement) {
      return {
        size: [this.domElement.offsetWidth, this.domElement.offsetHeight],
        offset: [this.domElement.offsetLeft, this.domElement.offsetTop]
      };
    } else {
      return {
        size: [window.innerWidth, window.innerHeight],
        offset: [0, 0]
      };
    }
  };

  dispose = (): void => {
    if (this.domElement) {
      this.domElement.removeEventListener("contextmenu", this.contextMenu);
      this.domElement.removeEventListener("pointerdown", this.pointerdown);
      this.domElement.removeEventListener("pointermove", this.pointermove);
      this.domElement.removeEventListener("pointerup", this.pointerup);
    }

    window.removeEventListener("keydown", this.keydown);
    window.removeEventListener("keyup", this.keyup);
  };

  constructor(object: Camera, domElement: HTMLElement) {
    super();

    this.object = object;
    this.domElement = domElement;

    this.domElement.addEventListener("contextmenu", this.contextMenu);
    this.domElement.addEventListener("pointerdown", this.pointerdown);
    this.domElement.addEventListener("pointermove", this.pointermove);
    this.domElement.addEventListener("pointerup", this.pointerup);

    window.addEventListener("keydown", this.keydown);
    window.addEventListener("keyup", this.keyup);

    this.updateMovementVector();
    this.updateRotationVector();
  }
}

export { FlyControls };

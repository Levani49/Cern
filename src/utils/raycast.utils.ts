import { Camera } from "@react-three/fiber";

import { Raycaster, Scene, Vector2 } from "three";

import { UserData } from "@services/model/Model.service";

type Ev = { clientX: number; clientY: number };

interface Props {
  mouse: Vector2;
  e: Ev;
  width: number;
  height: number;
  camera: Camera;
  scene: Scene;
  raycaster: Raycaster;
}

export function raycast({
  mouse,
  e,
  width,
  height,
  camera,
  scene,
  raycaster
}: Props): UserData | undefined {
  mouse.x = (e.clientX / width) * 2 - 1;
  mouse.y = -(e.clientY / height) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const models = scene.children.filter((model) => model.userData.name);

  const intersects = raycaster.intersectObjects(models, true);
  if (intersects.length > 0) {
    return intersects[0].object.userData as UserData;
  } else {
    return undefined;
  }
}

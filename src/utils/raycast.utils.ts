import { UserData } from "#/services/model/Model.service";
import { Raycaster, Scene, Vector2 } from "three";

import { Camera } from "@react-three/fiber";

type Ev = { clientX: number; clientY: number };

interface Props {
  mouse: Vector2;
  e: Ev;
  width: number;
  height: number;
  camera: Camera;
  scene: Scene;
  raycaster: Raycaster;
  many: boolean;
}

export function raycast({
  mouse,
  e,
  width,
  height,
  camera,
  scene,
  raycaster,
  many,
}: Props): UserData | undefined {
  mouse.x = (e.clientX / width) * 2 - 1;
  mouse.y = -(e.clientY / height) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const models = scene.children.filter((model) => model.userData.name);

  let intersectedModel: undefined | UserData = undefined;

  if (many) {
    const intersects = raycaster.intersectObjects(models, true);

    if (intersects.length > 0) {
      intersectedModel = intersects[0].object.userData as UserData;
    }
  } else {
    for (const model of models) {
      const intersects = raycaster.intersectObject(model, true);
      if (intersects.length > 0) {
        intersectedModel = intersects[0].object.userData as UserData;
        break;
      }
    }
  }

  return intersectedModel;
}

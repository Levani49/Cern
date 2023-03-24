import { Mesh, Object3D } from "three";

export const n = null;

export default function applyDefaultsToModel(
  model: Object3D,
  name: string,
): void {
  model.name = name;
  model.traverse((child: Object3D): void => {
    if (child instanceof Mesh) {
      child.name = name;
      child.material.metalness = 0;
      child.material.transparent = true;
    }
  });
}

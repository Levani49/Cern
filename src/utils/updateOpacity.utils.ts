import { Mesh, Object3D } from "three";

export default function updateOpacity(
  object: Object3D,
  opacity: number,
  transparent = true,
): void {
  object.traverse((child: Object3D): void => {
    if (child instanceof Mesh) {
      child.material.transparent = transparent;
      child.material.opacity = opacity;
    }
  });
}

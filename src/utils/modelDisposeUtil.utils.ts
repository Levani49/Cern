import { Mesh, Object3D } from "three";

export default function modelDisposeUtil(object: Object3D): void {
  object.traverse((child: Object3D): void => {
    if (child instanceof Mesh) {
      child.geometry.dispose();
      child.material.dispose();
    }
  });
}

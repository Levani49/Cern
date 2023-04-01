import { Mesh, Object3D } from "three";

export default function updateWireframe(
  object: Object3D,
  wireframe: boolean,
): void {
  object.traverse((child: Object3D): void => {
    if (child instanceof Mesh) {
      child.material.wireframe = wireframe;
    }
  });
}

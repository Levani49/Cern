import { MeshStandardMaterial } from "three";

/**
 *
 * @param materials
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export default function applyDefaultsToModel(materials: Object): void {
  Object.values(materials).forEach((material: MeshStandardMaterial) => {
    material.metalness = 0.75;
    material.transparent = true;
  });
}

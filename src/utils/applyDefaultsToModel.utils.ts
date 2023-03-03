import { MeshStandardMaterial } from "three";

/**
 * This is a function that applies default properties to materials used in a 3D model.
 *
 * @param {materials} materials - The materials object containing the materials to be updated
 * @returns { void } void
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export default function applyDefaultsToModel(materials: Object): void {
  Object.values(materials).forEach((material: MeshStandardMaterial) => {
    material.metalness = 0;
    material.transparent = true;
  });
}

import { MeshStandardMaterial } from "three";

/**
 * Applies the specified opacity to all materials.
 *
 * @param {materials} materials - An object of materials.
 * @param {opacity} opacity - The opacity to apply to the materials.
 * @returns { void } void
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function applyOpacity(materials: Object, opacity: number): void {
  Object.values(materials).forEach((material: MeshStandardMaterial) => {
    material.opacity = opacity;
  });
}

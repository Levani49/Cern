import { MeshStandardMaterial } from "three";

/**
 *
 * @param materials
 * @param opacity
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function applyOpacity(materials: Object, opacity: number): void {
  Object.values(materials).forEach((material: MeshStandardMaterial) => {
    material.opacity = opacity;
  });
}

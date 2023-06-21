import { Mesh, Object3D } from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

import { ModelCut } from "@type/app.types";

export interface UserData {
  id: string;
  name: string;
  cutType: ModelCut;
  opacity: number;
  wireframe: boolean;
}

export default class ModelService {
  private base = import.meta.env.VITE_MODELS_PROVIDER;
  public dracoLoader = new DRACOLoader();

  updateOpacity(object: Object3D, opacity: number, transparent = true): void {
    object.traverse((child: Object3D): void => {
      if (child instanceof Mesh) {
        child.material.transparent = transparent;
        child.material.opacity = opacity;
      }
    });
  }

  updateWireframe(object: Object3D, wireframe: boolean): void {
    object.traverse((child: Object3D): void => {
      if (child instanceof Mesh) {
        child.material.wireframe = wireframe;
      }
    });
  }

  applyDefaults(model: Object3D, userData: UserData, opacity = 1, wireframe = false): void {
    model.userData = userData;
    model.traverse((child: Object3D): void => {
      if (child instanceof Mesh) {
        child.userData = userData;
        child.material.metalness = 0;
        child.material.transparent = true;
        child.material.opacity = opacity;
        child.material.wireframe = wireframe;
      }
    });
  }

  disposeModel(object: Object3D): void {
    object.traverse((child: Object3D): void => {
      if (child instanceof Mesh) {
        child.geometry.dispose();
        child.material.dispose();
      }
    });
  }

  buildModelUrl(modelName: string): string {
    return `${this.base}/${modelName}.glb`;
  }

  constructor() {
    this.dracoLoader.setDecoderPath("/draco/");
    this.dracoLoader.setDecoderConfig({ type: "js" });
  }
}

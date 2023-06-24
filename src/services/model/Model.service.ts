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

interface OpacityProps {
  model: Object3D;
  opacity: number;
  updateUserData?: boolean;
  transparent?: boolean;
}

interface WireframeProps {
  model: Object3D;
  wireframe: boolean;
  updateUserData?: boolean;
}

export default class ModelService {
  private base = import.meta.env.VITE_MODELS_PROVIDER;
  public dracoLoader = new DRACOLoader();

  updateOpacity({
    model,
    opacity,
    transparent,
    updateUserData
  }: OpacityProps): void {
    model.traverse((child: Object3D): void => {
      if (child instanceof Mesh) {
        if (!transparent) {
          child.material.transparent = transparent;
        }
        child.material.opacity = opacity;
        if (updateUserData) {
          child.userData = {
            ...child.userData,
            opacity
          };
        }
      }
    });
  }

  updateWireframe({ model, wireframe, updateUserData }: WireframeProps): void {
    model.traverse((child: Object3D): void => {
      if (child instanceof Mesh) {
        child.material.wireframe = wireframe;

        if (updateUserData) {
          child.userData = {
            ...child.userData,
            wireframe
          };
        }
      }
    });
  }

  applyDefaults(
    model: Object3D,
    userData: UserData,
    opacity = 1,
    wireframe = false
  ): void {
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
    this.dracoLoader.setDecoderPath("node_modules/three/examples/jsm/libs/draco/");
    this.dracoLoader.setDecoderConfig({ type: "js" });
  }
}

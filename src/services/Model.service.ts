import { Mesh, Object3D } from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

export default class ModelService {
  private path = import.meta.env.VITE_MODELS_PROVIDER;
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

  applyDefaults(model: Object3D, name: string): void {
    model.name = name;
    model.traverse((child: Object3D): void => {
      if (child instanceof Mesh) {
        child.name = name;
        child.material.metalness = 0;
        child.material.transparent = true;
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

  generateModelUrl(modelName: string): string {
    return `${this.path}/${modelName}.glb`;
  }

  constructor() {
    this.dracoLoader.setDecoderPath('/draco/');
    this.dracoLoader.setDecoderConfig({ type: 'js' });
  }
}

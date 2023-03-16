import { Mesh } from "three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

const url = import.meta.env.VITE_MODELS_PROVIDER;

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("/draco/");
dracoLoader.setDecoderConfig({ type: "js" });

export default function GlbLoader({ src }: { src: string }): JSX.Element {
  const gltf = useLoader(
    GLTFLoader,
    `${url}/${src}.glb`,
    (loader: GLTFLoader): void => {
      loader.setDRACOLoader(dracoLoader);
    },
  );

  gltf.scene.traverse((child) => {
    if (child instanceof Mesh) {
      child.material.metalness = 0;
      child.material.transparent = true;
    }
  });

  return <primitive object={gltf.scene} />;
}

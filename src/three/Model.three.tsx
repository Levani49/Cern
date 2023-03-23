import { Mesh } from "three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useEffect, useRef } from "react";

const url = import.meta.env.VITE_MODELS_PROVIDER;

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("/draco/");
dracoLoader.setDecoderConfig({ type: "js" });

export default function Model({ src }: { src: string }): JSX.Element {
  const ref = useRef<THREE.Object3D>();
  const gltf = useLoader(
    GLTFLoader,
    `${url}/${src}.glb`,
    (loader: GLTFLoader): void => {
      loader.setDRACOLoader(dracoLoader);
    },
  );

  useEffect(() => {
    const currentRef = ref.current;
    return () => {
      // Traverse the model and dispose of materials and geometries
      if (currentRef) {
        currentRef.traverse((child) => {
          if (child instanceof Mesh) {
            child.geometry.dispose();
            child.material.dispose();
          }
        });
      }
    };
  }, [gltf]);

  gltf.scene.traverse((child) => {
    if (child instanceof Mesh) {
      child.material.metalness = 0;
      child.material.transparent = true;
    }
  });

  return <primitive object={gltf.scene} ref={ref} visible={true} />;
}

import { Mesh } from "three";
import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  selectModelsOpacity,
  selectSelectedModel,
  setSelectedModel,
} from "../features/geometryMenuSlice/geometryMenuSlice";

const url = import.meta.env.VITE_MODELS_PROVIDER;

interface Props {
  src: string;
  name: string;
}

interface Ev {
  stopPropagation: () => void;
}

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("/draco/");
dracoLoader.setDecoderConfig({ type: "js" });

export default function Model({ src, name }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedModel = useAppSelector(selectSelectedModel);
  const opacityLevel = useAppSelector(selectModelsOpacity);

  const ref = useRef<THREE.Object3D>();
  const { gl } = useThree();
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

  if (selectedModel && selectedModel !== name) {
    gltf.scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.material.metalness = 0;
        child.material.transparent = true;
        child.material.opacity = 0.3;
      }
    });
  } else {
    gltf.scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.material.metalness = 0;
        child.material.transparent = true;
        child.material.opacity = opacityLevel;
      }
    });
  }

  const handleClick = (e: Ev): void => {
    e.stopPropagation();

    if (selectedModel === name) {
      dispatch(setSelectedModel(null));
    } else {
      dispatch(setSelectedModel(name));
    }
  };

  const handlePointerOver = (): void => {
    gl.domElement.style.cursor = "pointer";
  };

  const handlePointerOut = (): void => {
    gl.domElement.style.cursor = "default";
  };

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      onClick={(e: Ev): void => handleClick(e)}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      visible={true}
    />
  );
}

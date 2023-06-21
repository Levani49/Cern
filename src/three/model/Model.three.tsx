import { useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

import { Mesh, Object3D } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { ModelCut } from "@type/app.types";

import { useAppSelector } from "@store/hooks";

import { selectClippingPlanes, selectClippingPlanesNormal } from "@features/model/modelSlice";

import useSelectedModel from "@hooks/useSelectedModel/useSelectedModel";

import ModelService from "@services/model/Model.service";

export interface Event {
  stopPropagation: () => void;
  clientX: number;
  clientY: number;
}

interface Props {
  id: string;
  src: string;
  name: string;
  cutType: ModelCut;
}

const modelService = new ModelService();

const LOW_OPACITY_LEVEL = 0.3;

export default function Model({ src, id, name, cutType }: Props): JSX.Element {
  const [opacity, setOpacity] = useState<number>(1);
  const [wireframe, setWireframe] = useState<boolean>(false);
  const clippingPlanes = useAppSelector(selectClippingPlanes);
  const clippingPlanesNormal = useAppSelector(selectClippingPlanesNormal);

  const { selectedModel, modelOpacityLevel, globalOpacityLevel, modelWireframe, globalWireframe } =
    useSelectedModel();

  const model = useLoader(
    GLTFLoader,
    modelService.buildModelUrl(src),
    (loader: GLTFLoader): void => {
      loader.setDRACOLoader(modelService.dracoLoader);
    }
  );

  const ref = useRef<THREE.Object3D>();

  useEffect(() => {
    const currentRef = ref.current;

    const userData = { id, name, cutType, opacity, wireframe };

    if (currentRef) {
      if (selectedModel) {
        if (selectedModel.id !== id) {
          modelService.applyDefaults(currentRef, userData, LOW_OPACITY_LEVEL);
        } else {
          modelService.applyDefaults(currentRef, userData);
        }
      } else {
        modelService.applyDefaults(currentRef, userData, globalOpacityLevel, globalWireframe);
      }
    }

    return () => {
      if (currentRef) {
        modelService.disposeModel(currentRef);
      }
    };
  }, [id, ref, src]);

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      if (selectedModel && selectedModel.id !== id) {
        modelService.updateOpacity(currentRef, LOW_OPACITY_LEVEL);
      } else {
        modelService.updateOpacity(currentRef, opacity);
      }
    }
  }, [selectedModel, id, opacity, ref]);

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      if (selectedModel?.id === id) {
        modelService.updateOpacity(currentRef, modelOpacityLevel);
        setOpacity(modelOpacityLevel);
      }
    }
  }, [modelOpacityLevel, selectedModel, id, ref]);

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      if (selectedModel?.id === id) {
        modelService.updateWireframe(currentRef, modelWireframe);
        setWireframe(modelWireframe);
      }
    }
  }, [modelWireframe, selectedModel, id, ref]);

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      setOpacity(globalOpacityLevel);
    }
  }, [globalOpacityLevel]);

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      modelService.updateWireframe(currentRef, globalWireframe);
    }

    setWireframe(globalWireframe);
  }, [globalWireframe, ref]);

  useEffect(() => {
    if (ref.current) {
      ref.current.traverse((child: Object3D): void => {
        if (child instanceof Mesh) {
          if (clippingPlanesNormal > 0) {
            child.material.clipIntersection = true;
          } else {
            child.material.clipIntersection = false;
          }

          child.material.clippingPlanes = clippingPlanes;
        }
      });
    }
  }, [JSON.stringify(clippingPlanes)]);

  return <primitive ref={ref} visible={true} object={model.scene} />;
}

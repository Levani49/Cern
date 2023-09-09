import ModelService from "#/services/model/Model.service";
import { Mesh, Object3D } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

import type { ModelCut } from "#/types/app.types";
import {
  selectClippingPlanes,
  selectClippingPlanesNormal,
  setSelectedModel,
} from "#/store/features/modelSlice";
import { useAppDispatch, useAppSelector } from "#/store/hooks";
import useEscapeKeydown from "#/hooks/useEscapeKeydown";
import useSelectedModel from "#/hooks/useSelectedModel";

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
  renderOrder?: number;
}

const modelService = new ModelService();

const LOW_OPACITY_LEVEL = 0.3;

export default function Model({
  src,
  id,
  name,
  cutType,
  renderOrder,
}: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const [opacity, setOpacity] = useState<number>(1);
  const [wireframe, setWireframe] = useState<boolean>(false);
  const clippingPlanes = useAppSelector(selectClippingPlanes);
  const clippingPlanesNormal = useAppSelector(selectClippingPlanesNormal);

  const {
    selectedModel,
    modelOpacityLevel,
    globalOpacityLevel,
    modelWireframe,
    globalWireframe,
  } = useSelectedModel();

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

    const userData = { id, name, cutType, opacity, wireframe, renderOrder };

    if (currentRef) {
      if (selectedModel) {
        if (selectedModel.id !== id) {
          modelService.applyDefaults(currentRef, userData, LOW_OPACITY_LEVEL);
        } else {
          modelService.applyDefaults(currentRef, userData);
        }
      } else {
        modelService.applyDefaults(
          currentRef,
          userData,
          globalOpacityLevel,
          globalWireframe
        );
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
        modelService.updateOpacity({
          model: currentRef,
          opacity: LOW_OPACITY_LEVEL,
        });
      } else {
        modelService.updateOpacity({
          model: currentRef,
          opacity: opacity,
          updateUserData: true,
        });
      }
    }
  }, [selectedModel, id, opacity, ref]);

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      if (selectedModel?.id === id) {
        modelService.updateOpacity({
          model: currentRef,
          opacity: modelOpacityLevel,
          updateUserData: true,
        });
        setOpacity(modelOpacityLevel);
      }
    }
  }, [modelOpacityLevel, selectedModel, id, ref]);

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      if (selectedModel?.id === id) {
        modelService.updateWireframe({
          model: currentRef,
          wireframe: modelWireframe,
          updateUserData: true,
        });
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
      modelService.updateWireframe({
        model: currentRef,
        wireframe: globalWireframe,
        updateUserData: true,
      });
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

  useEscapeKeydown(() => dispatch(setSelectedModel(null)));

  return <primitive ref={ref} visible={true} object={model.scene} />;
}

import { useEffect, useRef, useState } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import {
  setModelsOpacity,
  setModelWireframe,
  setSelectedModel,
  updateLocalModelCut,
} from '../../features/model/modelSlice';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import ModelService from '../../services/model/Model.service';
import { ModelCut } from '../../types/app.types';
import useSelectedModel from '../../hooks/useSelectedModel/useSelectedModel';
import { selectDroneState } from '../../features/camera/cameraSlice';
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
const mouse = {
  x: 0,
  y: 0,
};

export default function Model({ src, id, name, cutType }: Props): JSX.Element {
  const { gl, scene } = useThree();
  const dispatch = useAppDispatch();
  const [opacity, setOpacity] = useState<number>(1);
  const [wireframe, setWireframe] = useState<boolean>(false);
  const droneMode = useAppSelector(selectDroneState);

  // Redux hooks for managing the application state.
  const { selectedModel, modelOpacityLevel, globalOpacityLevel, modelWireframe, globalWireframe } =
    useSelectedModel();

  // Load the 3D model using the GLTFLoader and DRACOLoader.
  const model = useLoader(
    GLTFLoader,
    modelService.buildModelUrl(src),
    (loader: GLTFLoader): void => {
      loader.setDRACOLoader(modelService.dracoLoader);
    },
  );

  const ref = useRef<THREE.Object3D>();

  // Apply defaults to the model.
  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      if (selectedModel) {
        if (selectedModel.id !== id) {
          modelService.applyDefaults(currentRef, id, LOW_OPACITY_LEVEL);
        } else {
          modelService.applyDefaults(currentRef, id);
        }
      } else {
        modelService.applyDefaults(currentRef, id, globalOpacityLevel, globalWireframe);
      }
    }

    return () => {
      if (currentRef) {
        modelService.disposeModel(currentRef);
      }
    };
  }, [id, ref, src]);

  // This effect updates the opacity of the current model based on the selectedModel state.
  useEffect(() => {
    // Access the current value of the ref.
    const currentRef = ref.current;

    // Check if the currentRef exists.
    if (currentRef) {
      // Check if there is a selected model and if the current model's ID does not match the selected model's ID.
      if (selectedModel && selectedModel.id !== id) {
        // If another model is selected, update the opacity of the current model to 0.3 (partially transparent).
        modelService.updateOpacity(currentRef, LOW_OPACITY_LEVEL);
      } else {
        // If the current model is the selected model or no model is selected,
        // update the opacity of the current model to the current opacity value.
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

  // This effect updates the opacity of the current model based on the global opacity level.
  useEffect(() => {
    // Access the current value of the ref.
    const currentRef = ref.current;

    // Check if the currentRef exists.
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

  // Handle pointer over events on the model.
  const handlePointerOver = (): void => {
    gl.domElement.style.cursor = 'pointer';
  };

  // Handle pointer out events on the model.
  const handlePointerOut = (): void => {
    gl.domElement.style.cursor = 'default';
  };

  const handleMouseDown = (e: Event): void => {
    e.stopPropagation();
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };

  const handleMouseUp = (e: Event): void => {
    e.stopPropagation();

    const mouseUpPos = { x: e.clientX, y: e.clientY };
    const movementThreshold = 5;

    if (
      Math.abs(mouseUpPos.x - mouse.x) <= movementThreshold &&
      Math.abs(mouseUpPos.y - mouse.y) <= movementThreshold
    ) {
      const payload = { id, name, cutType, opacity, wireframe };

      selectedModel?.id === id
        ? dispatch(setSelectedModel(null))
        : dispatch(setSelectedModel(payload));

      // Update the model-specific opacity level to the current model's opacity.
      dispatch(setModelsOpacity(opacity));
      dispatch(setModelWireframe(wireframe));
      dispatch(updateLocalModelCut(cutType));
    }
  };

  const hoverMethods = {
    onPointerOver: handlePointerOver,
    onPointerOut: handlePointerOut,
  };

  const hoverEffects = scene.children.length < 20 && droneMode !== 'fly' ? hoverMethods : {};

  return (
    <primitive
      ref={ref}
      visible={true}
      object={model.scene}
      onPointerDown={(e: Event): void => handleMouseDown(e)}
      onPointerUp={(e: Event): void => handleMouseUp(e)}
      {...hoverEffects}
    />
  );
}

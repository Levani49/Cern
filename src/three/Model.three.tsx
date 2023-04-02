import { useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useEffect, useRef, useState } from 'react';

import { selectGlobalOpacity, selectGlobalWireframe } from '../features/global/globalsSlice';
import {
  selectModelsOpacity,
  selectModelWireframe,
  selectSelectedModel,
  setModelsOpacity,
  setModelWireframe,
  setSelectedModel,
} from '../features/model/modelSlice';

import { useAppDispatch, useAppSelector } from '../app/hooks';

import ModelService from '../services/Model.service';
export interface Ev {
  stopPropagation: () => void;
}

interface Props {
  src: string;
  name: string;
  id: string;
}

const modelService = new ModelService();

/**
 * Model component renders a 3D model using react-three-fiber library.
 *
 * @param {Props} props - Component properties.
 * @returns {JSX.Element} - Model component.
 */
export default function Model({ src, id }: Props): JSX.Element {
  // State for managing the opacity of the model.
  const [opacity, setOpacity] = useState<number>(1);
  const [wireframe, setWireframe] = useState<boolean>(false);

  // Redux hooks for managing the application state.
  const dispatch = useAppDispatch();
  const { selectedModel, modelOpacityLevel, globalOpacityLevel, modelWireframe, globalWireframe } =
    useAppSelector((state) => ({
      selectedModel: selectSelectedModel(state),
      modelOpacityLevel: selectModelsOpacity(state),
      globalOpacityLevel: selectGlobalOpacity(state),
      modelWireframe: selectModelWireframe(state),
      globalWireframe: selectGlobalWireframe(state),
    }));

  // Access the WebGLRenderer and other essential objects in the react-three-fiber scene.
  const { gl } = useThree();

  // Load the 3D model using the GLTFLoader and DRACOLoader.
  const model = useLoader(
    GLTFLoader,
    modelService.generateModelUrl(src),
    (loader: GLTFLoader): void => {
      loader.setDRACOLoader(modelService.dracoLoader);
    },
  );
  const ref = useRef<THREE.Object3D>();

  // Apply defaults to the model.
  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      modelService.applyDefaults(currentRef, id);
    }

    return () => {
      if (currentRef) {
        modelService.disposeModel(currentRef);
      }
    };
  }, [id]);

  // This effect updates the opacity of the current model based on the selectedModel state.
  useEffect(() => {
    // Access the current value of the ref.
    const currentRef = ref.current;

    // Check if the currentRef exists.
    if (currentRef) {
      // Check if there is a selected model and if the current model's ID does not match the selected model's ID.
      if (selectedModel && selectedModel !== id) {
        // If another model is selected, update the opacity of the current model to 0.3 (partially transparent).
        modelService.updateOpacity(currentRef, 0.3);
      } else {
        // If the current model is the selected model or no model is selected,
        // update the opacity of the current model to the current opacity value.
        modelService.updateOpacity(currentRef, opacity);
      }
    }
  }, [selectedModel, id, opacity, wireframe]);

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      if (selectedModel === id) {
        modelService.updateOpacity(currentRef, modelOpacityLevel);
        setOpacity(modelOpacityLevel);
      }
    }
  }, [modelOpacityLevel, selectedModel, id]);

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      if (selectedModel === id) {
        modelService.updateWireframe(currentRef, modelWireframe);
        setWireframe(modelWireframe);
      }
    }
  }, [modelWireframe, selectedModel, id]);

  // This effect updates the opacity of the current model based on the global opacity level.
  useEffect(() => {
    // Access the current value of the ref.
    const currentRef = ref.current;

    // Check if the currentRef exists.
    if (currentRef) {
      // Update the opacity of the current model to the global opacity level.
      modelService.updateOpacity(currentRef, globalOpacityLevel);
      modelService.updateWireframe(currentRef, globalWireframe);

      // Update the local opacity state with the global opacity level.
      setOpacity(globalOpacityLevel);
      setWireframe(globalWireframe);
    }
  }, [globalOpacityLevel, globalWireframe]);

  // This function handles click events on the model.
  const handleClick = (e: Ev): void => {
    // Stop the event from propagating further up the event chain.
    e.stopPropagation();

    // If the clicked model is already selected, deselect it by setting selectedModel to null.
    // If not, set the selectedModel to the current model's id.
    selectedModel === id ? dispatch(setSelectedModel(null)) : dispatch(setSelectedModel(id));

    // Update the model-specific opacity level to the current model's opacity.
    dispatch(setModelsOpacity(opacity));
    dispatch(setModelWireframe(wireframe));
  };

  // Handle pointer over events on the model.
  const handlePointerOver = (): void => {
    gl.domElement.style.cursor = 'pointer';
  };

  // Handle pointer out events on the model.
  const handlePointerOut = (): void => {
    gl.domElement.style.cursor = 'default';
  };

  return (
    <primitive
      ref={ref}
      object={model.scene}
      onClick={(e: Ev): void => handleClick(e)}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      visible={true}
    />
  );
}

import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  selectGlobalOpacity,
  selectModelsOpacity,
  selectSelectedModel,
  setModelsOpacity,
  setSelectedModel,
} from "../features/geometryMenuSlice/geometryMenuSlice";
import modelDisposeUtil from "../utils/modelDisposeUtil.utils";
import applyDefaultsToModel from "../utils/modelApplyDefaults.utils";
import updateOpacity from "../utils/updateOpacity.utils";

const url = import.meta.env.VITE_MODELS_PROVIDER;

interface Props {
  src: string;
  name: string;
  id: string;
}

interface Ev {
  stopPropagation: () => void;
}

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("/draco/");
dracoLoader.setDecoderConfig({ type: "js" });

/**
 * Model component renders a 3D model using react-three-fiber library.
 *
 * @param {Props} props - Component properties.
 * @returns {JSX.Element} - Model component.
 */
export default function Model({ src, id }: Props): JSX.Element {
  // State for managing the opacity of the model.
  const [opacity, setOpacity] = useState<number>(1);

  // Redux hooks for managing the application state.
  const dispatch = useAppDispatch();
  const { selectedModel, modelOpacityLevel, globalOpacityLevel } =
    useAppSelector((state) => ({
      selectedModel: selectSelectedModel(state),
      modelOpacityLevel: selectModelsOpacity(state),
      globalOpacityLevel: selectGlobalOpacity(state),
    }));

  // Access the WebGLRenderer and other essential objects in the react-three-fiber scene.
  const { gl } = useThree();

  // Load the 3D model using the GLTFLoader and DRACOLoader.
  const model = useLoader(
    GLTFLoader,
    `${url}/${src}.glb`,
    (loader: GLTFLoader): void => {
      loader.setDRACOLoader(dracoLoader);
    },
  );
  const ref = useRef<THREE.Object3D>();

  // Apply defaults to the model.
  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      applyDefaultsToModel(currentRef, id);
    }

    return () => {
      if (currentRef) {
        modelDisposeUtil(currentRef);
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
        updateOpacity(currentRef, 0.3);
      } else {
        // If the current model is the selected model or no model is selected,
        // update the opacity of the current model to the current opacity value.
        updateOpacity(currentRef, opacity);
      }
    }
  }, [selectedModel, id, opacity]);

  // This effect updates the opacity of the current model based on the model-specific opacity level.
  useEffect(() => {
    // Access the current value of the ref.
    const currentRef = ref.current;

    // Check if the currentRef exists.
    if (currentRef) {
      // Check if the current model's ID matches the selected model's ID.
      if (selectedModel === id) {
        // If the current model is the selected model, update the opacity of the current model
        // to the model-specific opacity level.
        updateOpacity(currentRef, modelOpacityLevel);

        // Update the local opacity state with the model-specific opacity level.
        setOpacity(modelOpacityLevel);
      }
    }
  }, [modelOpacityLevel, selectedModel, id]);

  // This effect updates the opacity of the current model based on the global opacity level.
  useEffect(() => {
    // Access the current value of the ref.
    const currentRef = ref.current;

    // Check if the currentRef exists.
    if (currentRef) {
      // Update the opacity of the current model to the global opacity level.
      updateOpacity(currentRef, globalOpacityLevel);

      // Update the local opacity state with the global opacity level.
      setOpacity(globalOpacityLevel);
    }
  }, [globalOpacityLevel]);

  // This function handles click events on the model.
  const handleClick = (e: Ev): void => {
    // Stop the event from propagating further up the event chain.
    e.stopPropagation();

    // If the clicked model is already selected, deselect it by setting selectedModel to null.
    // If not, set the selectedModel to the current model's id.
    selectedModel === id
      ? dispatch(setSelectedModel(null))
      : dispatch(setSelectedModel(id));

    // Update the model-specific opacity level to the current model's opacity.
    dispatch(setModelsOpacity(opacity));
  };

  // Handle pointer over events on the model.
  const handlePointerOver = (): void => {
    gl.domElement.style.cursor = "pointer";
  };

  // Handle pointer out events on the model.
  const handlePointerOut = (): void => {
    gl.domElement.style.cursor = "default";
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

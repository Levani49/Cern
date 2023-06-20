import { useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

import { Mesh, Object3D } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { ModelCut } from "@type/app.types";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import { selectDroneState } from "@features/camera/cameraSlice";
import {
  selectClippingPlanes,
  selectClippingPlanesNormal,
  setModelsOpacity,
  setModelWireframe,
  setSelectedModel,
  updateLocalModelCut
} from "@features/model/modelSlice";

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
const mouse = {
  x: 0,
  y: 0
};

const geometriesNotAffectedByClippingPlanes = [
  "ux15",
  "us15",
  "usa15",
  "px14",
  "px15",
  "px15",
  "pm15"
];

export default function Model({ src, id, name, cutType }: Props): JSX.Element {
  const { gl, scene } = useThree();
  const dispatch = useAppDispatch();
  const [opacity, setOpacity] = useState<number>(1);
  const [wireframe, setWireframe] = useState<boolean>(false);
  const droneMode = useAppSelector(selectDroneState);
  const clippingPlanes = useAppSelector(selectClippingPlanes);
  const clippingPlanesNormal = useAppSelector(selectClippingPlanesNormal);

  // Redux hooks for managing the application state.
  const { selectedModel, modelOpacityLevel, globalOpacityLevel, modelWireframe, globalWireframe } =
    useSelectedModel();

  // Load the 3D model using the GLTFLoader and DRACOLoader.
  const model = useLoader(
    GLTFLoader,
    modelService.buildModelUrl(src),
    (loader: GLTFLoader): void => {
      loader.setDRACOLoader(modelService.dracoLoader);
    }
  );

  const ref = useRef<THREE.Object3D>();

  // Apply defaults to the model.
  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      if (selectedModel) {
        if (selectedModel.id !== id) {
          modelService.applyDefaults(currentRef, name, LOW_OPACITY_LEVEL);
        } else {
          modelService.applyDefaults(currentRef, name);
        }
      } else {
        modelService.applyDefaults(currentRef, name, globalOpacityLevel, globalWireframe);
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

  useEffect(() => {
    if (ref.current) {
      ref.current.traverse((child: Object3D): void => {
        if (child instanceof Mesh) {
          if (clippingPlanesNormal > 0) {
            child.material.clipIntersection = true;
          } else {
            child.material.clipIntersection = false;
          }

          if (!geometriesNotAffectedByClippingPlanes.includes(name)) {
            child.material.clippingPlanes = clippingPlanes;
          }
        }
      });
    }
  }, [JSON.stringify(clippingPlanes)]);

  // Handle pointer over events on the model.
  const handlePointerOver = (): void => {
    gl.domElement.style.cursor = "pointer";
  };

  // Handle pointer out events on the model.
  const handlePointerOut = (): void => {
    gl.domElement.style.cursor = "default";
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
    onPointerOut: handlePointerOut
  };

  const hoverEffects = scene.children.length < 20 && droneMode !== "fly" ? hoverMethods : {};

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

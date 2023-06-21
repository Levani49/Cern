import { Camera, useThree } from "@react-three/fiber";

import { selectedModel } from "@/types/app.types";
import { BackSide, Raycaster, Scene, Vector2 } from "three";

import { useAppDispatch } from "@store/hooks";

import {
  setModelsOpacity,
  setModelWireframe,
  setSelectedModel,
  updateLocalModelCut
} from "@features/model/modelSlice";

import useSelectedModel from "@hooks/useSelectedModel/useSelectedModel";

import { UserData } from "@services/model/Model.service";

type Ev = { clientX: number; clientY: number };

const mouseDown = {
  x: 0,
  y: 0
};

interface Props {
  mouse: Vector2;
  e: Ev;
  width: number;
  height: number;
  camera: Camera;
  scene: Scene;
  raycaster: Raycaster;
}

function raycast({
  mouse,
  e,
  width,
  height,
  camera,
  scene,
  raycaster
}: Props): UserData | undefined {
  mouse.x = (e.clientX / width) * 2 - 1;
  mouse.y = -(e.clientY / height) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const models = scene.children.filter((model) => model.userData.name);

  const intersects = raycaster.intersectObjects(models, true);
  if (intersects.length > 0) {
    return intersects[0].object.userData as UserData;
  } else {
    return undefined;
  }
}

const Raycast = (): JSX.Element => {
  const { mouse, raycaster, camera, scene, size } = useThree();
  const { selectedModel } = useSelectedModel();
  const dispatch = useAppDispatch();

  const { width, height } = size;

  const handleMouseDown = (e: Ev): void => {
    mouseDown.x = e.clientX;
    mouseDown.y = e.clientY;
  };

  const handleMouseUp = (e: Ev): void => {
    const mouseUp = { x: e.clientX, y: e.clientY };
    const movementThreshold = 5;

    const MOUSE_IS_IN_RANGE =
      Math.abs(mouseUp.x - mouseDown.x) <= movementThreshold &&
      Math.abs(mouseUp.y - mouseDown.y) <= movementThreshold;

    if (MOUSE_IS_IN_RANGE) {
      const model = raycast({ mouse, raycaster, camera, scene, width, height, e });
      handleSelection(model);
    }
  };

  const handleSelection = (model: UserData | undefined): void => {
    if (model) {
      selectedModel?.id === model.id
        ? dispatch(setSelectedModel(null))
        : dispatch(setSelectedModel(model as selectedModel));

      dispatch(setModelsOpacity(model.opacity));
      dispatch(setModelWireframe(model.wireframe));
      dispatch(updateLocalModelCut(model.cutType));
    } else {
      dispatch(setSelectedModel(null));
    }
  };

  const ENTIRE_SCENE_RADIUS = 555; // Adjust the radius to ensure the sphere covers the entire scene

  return (
    <mesh onPointerDown={handleMouseDown} onPointerUp={handleMouseUp}>
      <sphereGeometry args={[ENTIRE_SCENE_RADIUS, 32, 32]} />
      <meshBasicMaterial transparent opacity={0} side={BackSide} />
    </mesh>
  );
};

export default Raycast;

import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { useAppSelector } from "../app/hooks";
import {
  selectGlobalOpacity,
  selectModelsOpacity,
  selectPreviousSelectedModel,
  selectSelectedModel,
} from "../features/geometryMenuSlice/geometryMenuSlice";
// import updateOpacity from "../utils/updateOpacity.utils";
// import modelOpacityUtil from "../utils/modelOpacityUtil.utils";

export default function SceneUtils(): JSX.Element {
  const { scene } = useThree();

  const { selectedModel } = useAppSelector((state) => ({
    selectedModel: selectSelectedModel(state),
    modelOpacityLevel: selectModelsOpacity(state),
    globalOpacityLevel: selectGlobalOpacity(state),
    previousSelectedModel: selectPreviousSelectedModel(state),
  }));

  useEffect(() => {
    // const objects = scene.children;
    // if (selectedModel) {
    //     objects.forEach((object): void => {
    //         if (object.name !== selectedModel) {
    //             object.children.forEach((mesh) => {
    //                 updateOpacity(mesh, 0.3);
    //             });
    //         }
    //     })
    // } else {
    //     objects.forEach((object): void => {
    //         if (object.name !== selectedModel) {
    //             object.children.forEach((mesh) => {
    //                 updateOpacity(mesh, 1);
    //             });
    //         }
    //     })
    // }
  }, [selectedModel, scene]);

  return <></>;
}

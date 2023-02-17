import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import applyDefaultsToModel from "../utils/applyDefaultsToModel.utils";
import { modelsUrl } from "../utils/preloadModels";

type GLTFResult = GLTF & {
  nodes: {};
  materials: {};
};

/**
 *
 * @param props
 */
export function PixelPp1SideACut3(props: JSX.IntrinsicElements["group"]): JSX.Element {
  const { nodes, materials } = useGLTF(`${modelsUrl}/pixel-pp1-side-a-cut3.glb`) as GLTFResult;

  applyDefaultsToModel(materials);

  return (
    <group {...props} dispose={null}>
      <group />
    </group>
  );
}

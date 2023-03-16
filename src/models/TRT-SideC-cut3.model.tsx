import { useGLTF } from "@react-three/drei";
import { Mesh, MeshStandardMaterial } from "three";
import { GLTF } from "three-stdlib";

import applyDefaultsToModel from "../utils/applyDefaultsToModel.utils";
import { modelsUrl } from "../utils/preloadModels";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0003: Mesh;
    Mesh_1003: Mesh;
  };
  materials: {
    ["Material_0.147"]: MeshStandardMaterial;
    ["Material_1.117"]: MeshStandardMaterial;
  };
};

/**
 *
 * @param props
 */
export function TrtSideC3(props: JSX.IntrinsicElements["group"]): JSX.Element {
  const { nodes, materials } = useGLTF(
    `${modelsUrl}/trt-sidec-cut3.glb`,
  ) as GLTFResult;
  applyDefaultsToModel(materials);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Mesh_0003.geometry}
        material={materials["Material_0.147"]}
      />
      <mesh
        geometry={nodes.Mesh_1003.geometry}
        material={materials["Material_1.117"]}
      />
    </group>
  );
}

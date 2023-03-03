/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Lar-FCAL-SideC-cut3.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { modelsUrl } from "../utils/preloadModels";
import applyDefaultsToModel from "../utils/applyDefaultsToModel.utils";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0011: THREE.Mesh;
  };
  materials: {
    ["Material_0.034"]: THREE.MeshStandardMaterial;
  };
};

/**
 *
 * @param props
 */
export function LarFcalSideCCut3(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(`${modelsUrl}/lar-fcal-sidec-cut3.glb`) as GLTFResult;

  applyDefaultsToModel(materials);

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0011.geometry} material={materials["Material_0.034"]} />
    </group>
  );
}

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/TRT-SideC-cut4.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0: THREE.Mesh;
    Mesh_1: THREE.Mesh;
  };
  materials: {
    ["Material_0.144"]: THREE.MeshStandardMaterial;
    ["Material_1.114"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/TRT-SideC-cut4-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0.geometry} material={materials["Material_0.144"]} />
      <mesh geometry={nodes.Mesh_1.geometry} material={materials["Material_1.114"]} />
    </group>
  );
}

useGLTF.preload("/TRT-SideC-cut4-transformed.glb");

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Lar-EMEC-SideA-cut3.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_1001_1: THREE.Mesh;
    Mesh_1001_2: THREE.Mesh;
    Mesh_3002: THREE.Mesh;
  };
  materials: {
    ["Material_1.001"]: THREE.MeshStandardMaterial;
    ["Material_3.003"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Lar-EMEC-SideA-cut3-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_3002.geometry} material={materials["Material_3.003"]} />
      <mesh geometry={nodes.Mesh_1001_1.geometry} material={materials["Material_1.001"]} />
      <mesh geometry={nodes.Mesh_1001_2.geometry} material={materials["Material_1.001"]} />
    </group>
  );
}

useGLTF.preload("/Lar-EMEC-SideA-cut3-transformed.glb");

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/SCT-SideC.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0002: THREE.Mesh;
    Mesh_1002: THREE.Mesh;
    Mesh_2002: THREE.Mesh;
    Mesh_3002: THREE.Mesh;
    Mesh_4002: THREE.Mesh;
  };
  materials: {
    ["Material_0.081"]: THREE.MeshStandardMaterial;
    ["Material_1.054"]: THREE.MeshStandardMaterial;
    ["Material_2.026"]: THREE.MeshStandardMaterial;
    ["Material_3.020"]: THREE.MeshStandardMaterial;
    ["Material_4.023"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/SCT-SideC-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0002.geometry} material={materials["Material_0.081"]} />
      <mesh geometry={nodes.Mesh_1002.geometry} material={materials["Material_1.054"]} />
      <mesh geometry={nodes.Mesh_2002.geometry} material={materials["Material_2.026"]} />
      <mesh geometry={nodes.Mesh_3002.geometry} material={materials["Material_3.020"]} />
      <mesh geometry={nodes.Mesh_4002.geometry} material={materials["Material_4.023"]} />
    </group>
  );
}

useGLTF.preload("/SCT-SideC-transformed.glb");

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Small-Wheel-Hub-SideA-cut4.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0002: THREE.Mesh;
    Mesh_1002: THREE.Mesh;
  };
  materials: {
    ["Material_0.096"]: THREE.MeshStandardMaterial;
    ["Material_1.068"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Small-Wheel-Hub-SideA-cut4-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0002.geometry} material={materials["Material_0.096"]} />
      <mesh geometry={nodes.Mesh_1002.geometry} material={materials["Material_1.068"]} />
    </group>
  );
}

useGLTF.preload("/Small-Wheel-Hub-SideA-cut4-transformed.glb");

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/TGC-SideC-cut2.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0016: THREE.Mesh;
    Mesh_1016: THREE.Mesh;
  };
  materials: {
    ["Material_0.125"]: THREE.MeshStandardMaterial;
    ["Material_1.089"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/TGC-SideC-cut2-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Mesh_0016.geometry} material={materials["Material_0.125"]} />
        <mesh geometry={nodes.Mesh_1016.geometry} material={materials["Material_1.089"]} />
      </group>
    </group>
  );
}

useGLTF.preload("/TGC-SideC-cut2-transformed.glb");

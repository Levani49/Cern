/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/Serv-Z0-Sec13-cut2.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    _000001F6137494F0_IndexedFaceSet: THREE.Mesh;
    _000001F61374A360_IndexedFaceSet: THREE.Mesh;
  };
  materials: {
    _000001F6137494F0: THREE.MeshStandardMaterial;
    _000001F61374A360: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Serv-Z0-Sec13-cut2-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes._000001F6137494F0_IndexedFaceSet.geometry} material={materials._000001F6137494F0} />
      <mesh geometry={nodes._000001F61374A360_IndexedFaceSet.geometry} material={materials._000001F61374A360} />
    </group>
  );
}

useGLTF.preload("/Serv-Z0-Sec13-cut2-transformed.glb");

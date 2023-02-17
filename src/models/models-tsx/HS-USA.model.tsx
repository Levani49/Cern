/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/HS-USA.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    _000001E91EBD7450_IndexedFaceSet001: THREE.Mesh;
    _000001E91EBD7450_IndexedFaceSet001_1: THREE.Mesh;
    _000001E91FBB8510_0006_IndexedFaceSet001: THREE.Mesh;
    _000001E91FBB8510_0006_IndexedFaceSet001_1: THREE.Mesh;
    _000001E921335F00_IndexedFaceSet: THREE.Mesh;
    _000001E92133F5F0_IndexedFaceSet: THREE.Mesh;
  };
  materials: {
    ["_000001E91EBD7450.001"]: THREE.MeshStandardMaterial;
    ["_000001E91FBB8510_0006.001"]: THREE.MeshStandardMaterial;
    ["_000001E921335F00.001"]: THREE.MeshStandardMaterial;
    ["_000001E92133F5F0.001"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/HS-USA-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes._000001E921335F00_IndexedFaceSet.geometry} material={materials["_000001E921335F00.001"]} />
      <mesh geometry={nodes._000001E92133F5F0_IndexedFaceSet.geometry} material={materials["_000001E92133F5F0.001"]} />
      <mesh
        geometry={nodes._000001E91EBD7450_IndexedFaceSet001.geometry}
        material={materials["_000001E91EBD7450.001"]}
      />
      <mesh
        geometry={nodes._000001E91EBD7450_IndexedFaceSet001_1.geometry}
        material={nodes._000001E91EBD7450_IndexedFaceSet001_1.material}
      />
      <mesh
        geometry={nodes._000001E91FBB8510_0006_IndexedFaceSet001.geometry}
        material={materials["_000001E91FBB8510_0006.001"]}
      />
      <mesh
        geometry={nodes._000001E91FBB8510_0006_IndexedFaceSet001_1.geometry}
        material={nodes._000001E91FBB8510_0006_IndexedFaceSet001_1.material}
      />
    </group>
  );
}

useGLTF.preload("/HS-USA-transformed.glb");

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/HS-ARCHE-cut4.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    _000001305BFF0340_IndexedFaceSet001: THREE.Mesh;
    _000001305BFF0340_IndexedFaceSet001_1: THREE.Mesh;
    _000001305BFF0B20_IndexedFaceSet: THREE.Mesh;
    _000001305BFF2E90_IndexedFaceSet001: THREE.Mesh;
    _000001305BFF2E90_IndexedFaceSet001_1: THREE.Mesh;
    _000001305BFF3130_IndexedFaceSet: THREE.Mesh;
  };
  materials: {
    ["_000001305BFF0340.001"]: THREE.MeshStandardMaterial;
    ["_000001305BFF0B20.001"]: THREE.MeshStandardMaterial;
    ["_000001305BFF2E90.001"]: THREE.MeshStandardMaterial;
    ["_000001305BFF3130.001"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/HS-ARCHE-cut4-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes._000001305BFF0B20_IndexedFaceSet.geometry} material={materials["_000001305BFF0B20.001"]} />
      <mesh geometry={nodes._000001305BFF3130_IndexedFaceSet.geometry} material={materials["_000001305BFF3130.001"]} />
      <mesh
        geometry={nodes._000001305BFF0340_IndexedFaceSet001.geometry}
        material={materials["_000001305BFF0340.001"]}
      />
      <mesh
        geometry={nodes._000001305BFF0340_IndexedFaceSet001_1.geometry}
        material={nodes._000001305BFF0340_IndexedFaceSet001_1.material}
      />
      <mesh
        geometry={nodes._000001305BFF2E90_IndexedFaceSet001.geometry}
        material={materials["_000001305BFF2E90.001"]}
      />
      <mesh
        geometry={nodes._000001305BFF2E90_IndexedFaceSet001_1.geometry}
        material={nodes._000001305BFF2E90_IndexedFaceSet001_1.material}
      />
    </group>
  );
}

useGLTF.preload("/HS-ARCHE-cut4-transformed.glb");

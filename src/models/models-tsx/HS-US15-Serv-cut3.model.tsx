/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/HS-US15-Serv-cut3.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Door: THREE.Mesh;
    Pipe001: THREE.Mesh;
    Cable001: THREE.Mesh;
    _000001C508FE5860_IndexedFaceSet: THREE.Mesh;
    _000001C508FE5860_IndexedFaceSet_1: THREE.Mesh;
    Fire001: THREE.Mesh;
    Racks001: THREE.Mesh;
    Back001: THREE.Mesh;
    Fan001: THREE.Mesh;
    _000001C581517D70_IndexedFaceSet: THREE.Mesh;
    _000001C581517D70_IndexedFaceSet_1: THREE.Mesh;
  };
  materials: {
    L__000001C50D077460: THREE.MeshStandardMaterial;
    L__000001C51192AA90: THREE.MeshStandardMaterial;
    _000001C508E02810: THREE.MeshStandardMaterial;
    _000001C508FE5860: THREE.MeshStandardMaterial;
    _000001C511935680: THREE.MeshStandardMaterial;
    _000001C511945280: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/HS-US15-Serv-cut3-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Door.geometry} material={materials.L__000001C50D077460} />
      <mesh geometry={nodes.Pipe001.geometry} material={materials.L__000001C51192AA90} />
      <mesh geometry={nodes.Cable001.geometry} material={materials._000001C508E02810} />
      <mesh geometry={nodes.Fire001.geometry} material={materials.L__000001C51192AA90} />
      <mesh geometry={nodes.Racks001.geometry} material={materials._000001C511935680} />
      <mesh geometry={nodes.Back001.geometry} material={materials._000001C511945280} />
      <mesh geometry={nodes.Fan001.geometry} material={materials.L__000001C51192AA90} />
      <mesh geometry={nodes._000001C508FE5860_IndexedFaceSet.geometry} material={materials._000001C508FE5860} />
      <mesh
        geometry={nodes._000001C508FE5860_IndexedFaceSet_1.geometry}
        material={nodes._000001C508FE5860_IndexedFaceSet_1.material}
      />
      <mesh geometry={nodes._000001C581517D70_IndexedFaceSet.geometry} material={materials.L__000001C50D077460} />
      <mesh
        geometry={nodes._000001C581517D70_IndexedFaceSet_1.geometry}
        material={nodes._000001C581517D70_IndexedFaceSet_1.material}
      />
    </group>
  );
}

useGLTF.preload("/HS-US15-Serv-cut3-transformed.glb");

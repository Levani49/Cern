/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 /Users/nzurashv/Desktop/work/tracercentral/resources/geo/HS-US15-Serv.glb --transform --t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Pipe: THREE.Mesh;
    _000001C5095FD5F0_IndexedFaceSet003: THREE.Mesh;
    _000001C5095FD5F0_IndexedFaceSet003_1: THREE.Mesh;
    Racks: THREE.Mesh;
    Cable: THREE.Mesh;
    _000001C509707370_IndexedFaceSet003: THREE.Mesh;
    _000001C509707370_IndexedFaceSet003_1: THREE.Mesh;
    Door: THREE.Mesh;
    Fire: THREE.Mesh;
    Fan: THREE.Mesh;
    Back: THREE.Mesh;
  };
  materials: {
    ["_000001C5095FD0B0.003"]: THREE.MeshStandardMaterial;
    ["_000001C5095FD5F0.003"]: THREE.MeshStandardMaterial;
    ["_000001C5096178A0.003"]: THREE.MeshStandardMaterial;
    ["_000001C50961A2A0.003"]: THREE.MeshStandardMaterial;
    ["_000001C509707370.003"]: THREE.MeshStandardMaterial;
    ["_000001C513B02C30.003"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/HS-US15-Serv-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Pipe.geometry} material={materials["_000001C5095FD0B0.003"]} />
      <mesh geometry={nodes.Racks.geometry} material={materials["_000001C5096178A0.003"]} />
      <mesh geometry={nodes.Cable.geometry} material={materials["_000001C50961A2A0.003"]} />
      <mesh geometry={nodes.Door.geometry} material={materials["_000001C509707370.003"]} />
      <mesh geometry={nodes.Fire.geometry} material={materials["_000001C5095FD0B0.003"]} />
      <mesh geometry={nodes.Fan.geometry} material={materials["_000001C5095FD0B0.003"]} />
      <mesh geometry={nodes.Back.geometry} material={materials["_000001C513B02C30.003"]} />
      <mesh
        geometry={nodes._000001C5095FD5F0_IndexedFaceSet003.geometry}
        material={materials["_000001C5095FD5F0.003"]}
      />
      <mesh
        geometry={nodes._000001C5095FD5F0_IndexedFaceSet003_1.geometry}
        material={nodes._000001C5095FD5F0_IndexedFaceSet003_1.material}
      />
      <mesh
        geometry={nodes._000001C509707370_IndexedFaceSet003.geometry}
        material={materials["_000001C509707370.003"]}
      />
      <mesh
        geometry={nodes._000001C509707370_IndexedFaceSet003_1.geometry}
        material={nodes._000001C509707370_IndexedFaceSet003_1.material}
      />
    </group>
  );
}

useGLTF.preload("/HS-US15-Serv-transformed.glb");

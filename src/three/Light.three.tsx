import { AmbientLight, DirectionalLight } from "three";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import {
  selectAmbientLightIntensity,
  selectDirectionalLightIntensity,
} from "#/store/features/cameraSlice";
import { useAppSelector } from "#/store/hooks";

export default function Lights() {
  const dirLight = useRef<DirectionalLight>(null);
  const ambLight = useRef<AmbientLight>(null);
  const ambientLightIntensity = useAppSelector(selectAmbientLightIntensity);
  const directionalLightIntensity = useAppSelector(selectDirectionalLightIntensity);

  useFrame(({ camera }) => {
    if (dirLight.current && camera) {
      dirLight.current.position.set(
        camera.position.x + camera.position.x * 0.5,
        camera.position.y + camera.position.y * 0.1,
        camera.position.z + camera.position.z * -0.5
      );
    }
  });

  return (
    <>
      <ambientLight
        ref={ambLight}
        position={[0, 0, 0]}
        intensity={ambientLightIntensity}
        color="#ffffff"
      />
      <directionalLight
        ref={dirLight}
        intensity={directionalLightIntensity}
        color="white"
      />
    </>
  );
}

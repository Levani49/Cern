import { useThree } from "@react-three/fiber";

import FirstPersonControl from "@three/player-control/PlayerControl.three";

export default function PlayerControls(): JSX.Element {
  const { camera } = useThree();

  return (
    <FirstPersonControl
      currentCameraPosition={[
        camera.position.x,
        camera.position.y,
        camera.position.z
      ]}
    />
  );
}

import { GizmoHelper, GizmoViewport } from '@react-three/drei';

import { useAppSelector } from '../app/hooks';

import { selectDroneState } from '../features/camera/cameraSlice';
import { selectAxis } from '../features/global/globalsSlice';

export default function Axis(): JSX.Element {
  const { droneType, show } = useAppSelector((state) => ({
    droneType: selectDroneState(state),
    show: selectAxis(state),
  }));

  const disable = droneType !== 'idle';

  return (
    <>
      {show && (
        <GizmoHelper alignment="bottom-right" margin={[50, 50]}>
          <GizmoViewport
            axisColors={['#ff6b53', '#40CF8E', '#5f6af1']}
            disabled={disable}
            labelColor="white"
            axisHeadScale={0.8}
          />
        </GizmoHelper>
      )}
    </>
  );
}

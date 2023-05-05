import { useMemo } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectEvent } from '../../../features/event/eventSlice';
import JetService from '../../../services/event/jet/jet.service';

const jetService = new JetService();

export default function Jet(): JSX.Element {
  const event = useAppSelector(selectEvent);

  const jetConesToDraw = useMemo(() => {
    if (event) {
      if (Array.isArray(event.Event.Jet)) {
        jetService.init(event.Event.Jet[0]);
      } else {
        jetService.init(event.Event.Jet);
      }
      return jetService.drawJetCone();
    }
    return null;
  }, [event]);

  if (jetConesToDraw && event?.Event.Jet) {
    return (
      <>
        {jetConesToDraw.map((jetCone, i) => {
          return (
            <mesh key={i} geometry={jetCone.geo} quaternion={jetCone.quaternion}>
              <meshToonMaterial
                attach="material"
                color="#e40cf0"
                transparent={true}
                opacity={0.7}
              />
            </mesh>
          );
        })}
      </>
    );
  }

  return <></>;
}

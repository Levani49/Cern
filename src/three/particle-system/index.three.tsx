import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectParticleAnimation,
  setParticleAnimationState,
} from '../../features/global/globalsSlice';
import Particles from './Particles.three';

/**
 *
 */
export default function ParticleSystem(): JSX.Element {
  const dispatch = useAppDispatch();
  const startParticleAnimation = useAppSelector(selectParticleAnimation);

  /**
   *
   */
  const onFinishHandler = (): void => {
    dispatch(setParticleAnimationState(false));
  };

  return <>{startParticleAnimation && <Particles onFinish={onFinishHandler} />}</>;
}

import { memo, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectParticleAnimation,
  setParticleAnimationState,
} from '../../features/global/globalsSlice';
import Particles from './Particles.three';
import { selectEventNumber } from '../../features/event/eventSlice';

const ParticleSystem = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const startParticleAnimation = useAppSelector(selectParticleAnimation);
  const eventNumber = useAppSelector(selectEventNumber);

  useEffect(() => {
    dispatch(setParticleAnimationState(true));
  }, [dispatch, eventNumber]);

  const memoizedOnFinishHandler = useMemo(() => {
    return (): void => {
      dispatch(setParticleAnimationState(false));
    };
  }, [dispatch, eventNumber]);

  return <>{startParticleAnimation && <Particles onFinish={memoizedOnFinishHandler} />}</>;
};

export default memo(ParticleSystem);

import { memo, useEffect, useMemo } from "react";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import { selectEventNumber } from "@features/event/eventSlice";
import {
  selectParticleAnimation,
  setParticleAnimationState
} from "@features/global/globalsSlice";

import useEscapeKeydown from "@hooks/useEscapeKeydown/useEscapeKeydown.hook";

import Particles from "./Particles.three";

const ParticleSystem = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const startParticleAnimation = useAppSelector(selectParticleAnimation);
  const eventNumber = useAppSelector(selectEventNumber);

  useEffect(() => {
    dispatch(setParticleAnimationState(true));
  }, [dispatch, eventNumber]);

  useEscapeKeydown(() => dispatch(setParticleAnimationState(false)));

  const memoizedOnFinishHandler = useMemo(() => {
    return (): void => {
      dispatch(setParticleAnimationState(false));
    };
  }, [dispatch, eventNumber]);

  return (
    <>
      {startParticleAnimation && (
        <Particles
          onFinish={memoizedOnFinishHandler}
          explosionSpeed={0.25}
          electronSpeed={0.435}
        />
      )}
    </>
  );
};

export default memo(ParticleSystem);

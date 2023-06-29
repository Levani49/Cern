import { memo, useEffect, useMemo } from "react";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import {
  selectParticleAnimation,
  setParticleAnimationState
} from "@features/global/globalsSlice";

import useEscapeKeydown from "@hooks/useEscapeKeydown/useEscapeKeydown.hook";
import useEvent from "@hooks/useEvent/useEvent.hook";

import Particles from "./Particles.three";

const ParticleSystem = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const startParticleAnimation = useAppSelector(selectParticleAnimation);
  const { eventNumber } = useEvent();

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
          electronSpeed={0.235}
          explosionSpeed={0.045}
        />
      )}
    </>
  );
};

export default memo(ParticleSystem);

import { memo, useEffect, useMemo } from "react";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import {
  selectParticleAnimation,
  setParticleAnimationState
} from "@features/global/globalsSlice";

import useEscapeKeydown from "@hooks/useEscapeKeydown/useEscapeKeydown.hook";
import useEvent from "@hooks/useEvent/useEvent.hook";

import { isMobile } from "@utils/isMobile.utils";

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

  const particleProps = {
    particlesSize: 0.00525,
    numberOfParticles: 1000,
    lifeExpectancy: 600
  };

  return (
    <>
      {isMobile() === false && startParticleAnimation && (
        <Particles
          onComplete={memoizedOnFinishHandler}
          electronSpeed={0.235}
          explosionSpeed={0.045}
          {...particleProps}
        />
      )}
    </>
  );
};

export default memo(ParticleSystem);

import { memo, useEffect } from "react";

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
    if (startParticleAnimation) {
      dispatch(setParticleAnimationState(false));

      setTimeout(() => {
        dispatch(setParticleAnimationState(true));
      }, 300);
    } else {
      dispatch(setParticleAnimationState(true));
    }
  }, [dispatch, eventNumber]);

  useEscapeKeydown(() => dispatch(setParticleAnimationState(false)));

  const onComplete = (): void => {
    dispatch(setParticleAnimationState(false));
  };

  const particleProps = {
    particlesSize: 0.00525,
    numberOfParticles: 1000,
    lifeExpectancy: 600
  };

  return (
    <>
      {isMobile() === false && startParticleAnimation && (
        <Particles
          onComplete={onComplete}
          electronSpeed={0.235}
          explosionSpeed={0.045}
          {...particleProps}
        />
      )}
    </>
  );
};

export default memo(ParticleSystem);

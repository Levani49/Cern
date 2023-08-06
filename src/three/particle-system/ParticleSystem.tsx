import { memo, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import { setDrawEvents } from "@features/event/eventSlice";
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

  useEscapeKeydown(() => {
    dispatch(setParticleAnimationState(false));
    dispatch(setDrawEvents(true));
  });

  const onComplete = (): void => {
    dispatch(setParticleAnimationState(false));
  };

  const size = isMobile() ? 0.00325 : 0.00525;

  const particleProps = {
    particlesSize: size,
    numberOfParticles: 1000,
    lifeExpectancy: 600
  };

  return (
    <>
      {startParticleAnimation && (
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

import { memo, useEffect, useMemo } from "react";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import { selectEventNumber } from "@features/event/eventSlice";
import {
  selectParticleAnimation,
  setParticleAnimationState
} from "@features/global/globalsSlice";

import Particles from "./Particles.three";

const ParticleSystem = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const startParticleAnimation = useAppSelector(selectParticleAnimation);
  const eventNumber = useAppSelector(selectEventNumber);

  useEffect(() => {
    dispatch(setParticleAnimationState(true));
  }, [dispatch, eventNumber]);

  useEffect(() => {
    const cancelAnimation = (e: KeyboardEvent): void => {
      if (e.key === "27" || e.key === "Escape") {
        dispatch(setParticleAnimationState(false));
      }
    };

    window.addEventListener("keydown", cancelAnimation);

    return () => window.removeEventListener("keydown", cancelAnimation);
  }, [dispatch]);

  const memoizedOnFinishHandler = useMemo(() => {
    return (): void => {
      dispatch(setParticleAnimationState(false));
    };
  }, [dispatch, eventNumber]);

  return (
    <>
      {startParticleAnimation && (
        <Particles onFinish={memoizedOnFinishHandler} />
      )}
    </>
  );
};

export default memo(ParticleSystem);

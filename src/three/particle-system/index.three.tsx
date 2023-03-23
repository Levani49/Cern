import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectParticleAnimationState,
  setParticleAnimationState,
} from "../../features/globalsSlice";
import Particles from "./Particles.three";

/**
 *
 */
export default function ParticleSystem(): JSX.Element {
  const dispatch = useAppDispatch();
  const startParticleAnimation = useAppSelector(selectParticleAnimationState);

  /**
   *
   */
  const onFinishHandler = (): void => {
    dispatch(setParticleAnimationState(false));
  };

  return (
    <>{startParticleAnimation && <Particles onFinish={onFinishHandler} />}</>
  );
}

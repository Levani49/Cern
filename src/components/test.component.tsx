import { useAppDispatch } from '../app/hooks';
import { setParticleAnimationState } from '../features/global/globalsSlice';

/**
 *
 */
export default function Test(): JSX.Element {
  const dispatch = useAppDispatch();

  /**
   *
   */
  const onClick = (): void => {
    dispatch(setParticleAnimationState(true));
  };

  return (
    <div className="absolute text-white top-20 left-10" role="presentation" onClick={onClick}>
      test
    </div>
  );
}

import { useAppDispatch, useAppSelector } from "../app/hooks";

import { increment } from "./countSlice";
/**
 *
 */
export default function Comp(): JSX.Element {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  /**
   *
   */
  const handler = (): void => {
    console.log("hi");
    dispatch(increment());
  };

  return (
    <div className="z-50">
      <h1>{count}</h1>
      <button onClick={handler}>+</button>
    </div>
  );
}

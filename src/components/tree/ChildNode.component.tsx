// import { useAppDispatch } from "../../app/hooks";
// import { updateState } from "../../features/geometryMenuSlice/geometryMenuSlice";
import { useAppDispatch } from "../../app/hooks";
import { updateChildNodeState } from "../../features/geometryMenuSlice/geometryMenuSlice";
import { GeometryState } from "../../features/geometryMenuSlice/geometryTree";

interface Props {
  uid: string;
  name: string;
  modelState: GeometryState;
}

/**
 *
 * @param root0
 * @param root0.parentIsActive
 * @param root0.name
 * @param root0.onClick
 * @param root0.uid
 * @param root0.state
 * @param root0.modelState
 */
export default function ChildNode({
  name,
  uid,
  modelState,
}: Props): JSX.Element {
  const dispatch = useAppDispatch();

  // console.log(modelState);

  const onClickHandler = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ): void => {
    e.stopPropagation();
    const state: GeometryState =
      modelState === "isLoaded" ? "notLoaded" : "isLoaded";

    dispatch(
      updateChildNodeState({
        nodeId: uid,
        propToChange: "state",
        modelState: state,
      }),
    );
  };

  let innerState: string;

  if (modelState === "isLoaded") {
    innerState = "text-green";
  } else {
    innerState = "text-white";
  }

  return (
    <li
      role="presentation"
      className={`ml-4 cursor-pointer select-none flex ${innerState}`}
      onClick={onClickHandler}
    >
      {name}
    </li>
  );
}

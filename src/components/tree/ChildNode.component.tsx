import { useAppDispatch } from "../../app/hooks";
import { updateChildNodeState } from "../../features/geometryMenuSlice/geometryMenuSlice";
import { GeometryState } from "../../features/geometryMenuSlice/geometryTree";

interface Props {
  uid: string;
  name: string;
  modelState: GeometryState;
  nodeEnd?: boolean;
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
 * @param root0.nodeEnd
 */
export default function ChildNode({
  name,
  uid,
  modelState,
  nodeEnd,
}: Props): JSX.Element {
  const dispatch = useAppDispatch();

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
        value: state,
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
      className={`cursor-pointer mt-[-1px] select-none flex uppercase border-l-[1px] border-white ml-[1.69rem] ${
        nodeEnd && "last-child-event-line"
      } ${innerState}`}
      onClick={onClickHandler}
    >
      <span className="relative overflow-ellipsis whitespace-nowrap text-left align-middle transition before:relative before:inline-block before:w-[15px] left-0 before:align-middle before:border before:border-t-[1px] before:text-white border-white">
        {name}
      </span>
    </li>
  );
}

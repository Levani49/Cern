import { useAppDispatch } from "../../app/hooks";
import { updateParentNodeState } from "../../features/geometryMenuSlice/geometryMenuSlice";
import { GeometryState } from "../../features/geometryMenuSlice/geometryTree";

interface Props {
  uid: string;
  name: string;
  modelState: GeometryState;
  children: JSX.Element | JSX.Element[];
}

/**
 *
 * @param root0
 * @param root0.name
 * @param root0.parentIsActive
 * @param root0.children
 * @param root0.onClick
 * @param root0.uid
 * @param root0.modelState
 */
export default function ParentNode({
  uid,
  name,
  modelState,
  children,
}: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const onClickHandler = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
  ): void => {
    e.stopPropagation();
    const state = modelState === "isLoaded" ? "notLoaded" : "isLoaded";
    console.log({ modelState, uid });
    dispatch(
      updateParentNodeState({
        nodeId: uid,
        propToChange: "state",
        modelState: state,
      }),
    );
  };

  let innerState: string;

  if (modelState === "isLoaded") {
    innerState = "text-green";
  } else if (modelState === "partialyLoaded") {
    innerState = "text-yellow-500";
  } else {
    innerState = "text-white";
  }

  return (
    <ul
      role="presentation"
      className={`${innerState} ml-4 cursor-pointer`}
      onClick={onClickHandler}
    >
      <span>+</span>
      {name}
      <div className="flex flex-col select-none gap-[1px]">{children}</div>
    </ul>
  );
}

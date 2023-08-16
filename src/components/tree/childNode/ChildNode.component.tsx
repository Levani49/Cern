import { useAppDispatch } from "@store/hooks";

import { updateChildNodeState } from "@features/tree/treeSlice";

import { GeometryState } from "@constants/geometryTree";

export interface ChildNodeProps {
  uid: string;
  name: string;
  modelState: GeometryState;
  nodeEnd?: boolean;
}

export default function ChildNode({
  name,
  uid,
  modelState,
  nodeEnd
}: ChildNodeProps): JSX.Element {
  const dispatch = useAppDispatch();

  const onClickHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
    e.stopPropagation();
    const state: GeometryState =
      modelState === "isLoaded" ? "notLoaded" : "isLoaded";

    dispatch(
      updateChildNodeState({
        nodeId: uid,
        propToChange: "state",
        value: state
      })
    );
  };

  let innerState: string;

  if (modelState === "isLoaded") {
    innerState = "text-blue-700 dark:text-accent1";
  } else {
    innerState = "text-accent4";
  }

  return (
    <li
      className={`relative left-[-1px] flex items-center border-l-[0.5px] border-white ${
        nodeEnd && "last-child-event-line border-l border-solid border-transparent"
      } ${innerState}`}
    >
      <span
        role="presentation"
        onClick={onClickHandler}
        className="relative left-0  cursor-pointer overflow-ellipsis whitespace-nowrap border-white text-left align-middle text-[0.75rem] text-xs font-medium uppercase  transition before:relative before:mr-[2px] before:inline-block before:w-[15.5px] before:border-0  before:border-t-[0.5px] before:align-middle before:text-accent4 sm:font-light"
      >
        {name}
      </span>
    </li>
  );
}

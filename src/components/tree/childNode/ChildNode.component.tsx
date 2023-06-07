import { useAppDispatch } from "@store/hooks";

import { updateChildNodeState } from "@features/tree/treeSlice";

import { GeometryState } from "../../../constants/geometryTree";

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

  const onClickHandler = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ): void => {
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
    innerState = "text-green";
  } else {
    innerState = "text-white";
  }

  return (
    <li
      className={`flex items-center border-l-[1px] border-white ${
        nodeEnd && "last-event-line border-l border-solid border-transparent"
      } ${innerState}`}
    >
      <span
        role="presentation"
        onClick={onClickHandler}
        className="relative left-0 ml-[-0.5px] cursor-pointer overflow-ellipsis whitespace-nowrap border-white text-left align-middle text-xs uppercase transition before:relative before:mr-[2px] before:inline-block before:w-[15px] before:border before:border-t-[0.5px] before:align-middle before:text-white"
      >
        {name}
      </span>
    </li>
  );
}

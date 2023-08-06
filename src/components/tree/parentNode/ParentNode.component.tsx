import { useCallback, useState } from "react";

import { ReactComponent as MinusCircleIcon } from "@assets/svg/minusCircleIcon.svg";
import { ReactComponent as PlusCircleIcon } from "@assets/svg/plusCircleIcon.svg";

import { useAppDispatch } from "@store/hooks";

import { updateParentNodeState } from "@features/tree/treeSlice";

import { GeometryState } from "@constants/geometryTree";

export interface ParentNodeProps {
  root?: boolean | undefined;
  showChildren: boolean;
  uid: string;
  name: string;
  modelState: GeometryState;
  children: JSX.Element | JSX.Element[];
  nodeEnd?: boolean | undefined;
}

export type MouseEv = React.MouseEvent<HTMLElement, MouseEvent>;
export type IconMouseEv = React.MouseEvent<SVGSVGElement, MouseEvent>;

export default function ParentNode({
  uid,
  name,
  modelState,
  showChildren,
  children,
  nodeEnd,
  root
}: ParentNodeProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(showChildren);

  const onClickHandler = useCallback(
    (e: MouseEv): void => {
      e.stopPropagation();
      const state = modelState === "isLoaded" ? "notLoaded" : "isLoaded";
      dispatch(
        updateParentNodeState({
          nodeId: uid,
          propToChange: "state",
          value: state,
          restrictAncestorsUpdate: false
        })
      );
    },
    [dispatch, modelState, uid]
  );

  const showChildrenHandler = (e: IconMouseEv): void => {
    e.stopPropagation();
    setShow((prev) => !prev);
  };

  const innerState =
    modelState === "isLoaded"
      ? "text-blue-700 dark:text-accent1"
      : modelState === "partialyLoaded"
      ? "text-black dark:text-yellow-500"
      : "text-white";

  const componentClasses = `border-l-[0.5px] border-transparent text-left transition before:relative before:inline-block before:w-[15.5px]  before:border-t-[0.5px] before:border-0 before:text-white before:align-middle ${
    nodeEnd ? "last-event-line" : ""
  } ${root && "before:opacity-0"}`;

  const inconClasses =
    "h-5 w-5 text-white stroke-1 hover:text-accent2 hover:dark:text-accent1 transition-all cursor-pointer";

  return (
    <li
      className={`border-solid ${
        !nodeEnd && "relative left-[-1px] border-l-[0.5px] border-white"
      } ${root && "border-none"}`}
    >
      <div
        className={`relative flex items-center whitespace-nowrap py-[1px] text-xs ${componentClasses} left-[-1px]`}
      >
        {show ? (
          <MinusCircleIcon
            onClick={showChildrenHandler}
            className={`${inconClasses}`}
          />
        ) : (
          <PlusCircleIcon
            onClick={showChildrenHandler}
            className={`${inconClasses}`}
          />
        )}

        <span
          role="presentation"
          className={`${innerState} ml-[5px] cursor-pointer align-middle text-[0.75rem] text-xs font-medium uppercase  transition-all ease-in-out sm:font-light`}
          onClick={onClickHandler}
        >
          {name}
        </span>
      </div>
      <ul className={`ml-[1.6rem] mt-[-2px] block  p-0 ${!show && "hidden"}`}>
        {children}
      </ul>
    </li>
  );
}

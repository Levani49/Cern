import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { useCallback } from "react";
import { useAppDispatch } from "../../app/hooks";
import { updateParentNodeState } from "../../features/geometryMenuSlice/geometryMenuSlice";
import { GeometryState } from "../../features/geometryMenuSlice/geometryTree";

interface Props {
  uid: string;
  name: string;
  modelState: GeometryState;
  showChildren: boolean;
  children: JSX.Element | JSX.Element[];
  root?: boolean | undefined;
  nodeEnd?: boolean | undefined;
  borderImageSlice?: string;
}

type MouseEv = React.MouseEvent<HTMLElement, MouseEvent>;
type IconMouseEv = React.MouseEvent<SVGSVGElement, MouseEvent>;

const iconClass =
  "h-6 w-6 text-white hover:text-blue hover:dark:text-green transition-all";

/**
 *
 * @param root0
 * @param root0.name
 * @param root0.parentIsActive
 * @param root0.children
 * @param root0.onClick
 * @param root0.uid
 * @param root0.modelState
 * @param root0.showChildren
 * @param root0.root
 * @param root0.nodeEnd
 * @param root0.borderImageSlice
 */
export default function ParentNode({
  uid,
  name,
  modelState,
  showChildren,
  children,
  nodeEnd,
  root,
  borderImageSlice,
}: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const onClickHandler = useCallback(
    (e: MouseEv): void => {
      e.stopPropagation();
      const state = modelState === "isLoaded" ? "notLoaded" : "isLoaded";
      dispatch(
        updateParentNodeState({
          nodeId: uid,
          propToChange: "state",
          value: state,
          restrictAncestorsUpdate: false,
        }),
      );
    },
    [dispatch, modelState, uid],
  );

  const showChildrenHandler = useCallback(
    (e: IconMouseEv): void => {
      e.stopPropagation();
      dispatch(
        updateParentNodeState({
          nodeId: uid,
          propToChange: "showChildren",
          value: !showChildren,
          restrictAncestorsUpdate: true,
        }),
      );
    },
    [dispatch, showChildren, uid],
  );

  const innerState =
    modelState === "isLoaded"
      ? "text-green"
      : modelState === "partialyLoaded"
      ? "text-yellow-500"
      : "text-white";

  const styles = `border-l-[2px] border-transparent text-left transition before:relative before:inline-block before:w-[15px] before:left-0 before:align-middle before:border before:border-t-[px] before:text-white before:align-middle ${
    nodeEnd ? "last-event-line" : ""
  } ${root && "before:text-transparent"}`;

  return (
    <li
      role="presentation"
      className={`border-solid  ${!nodeEnd && "border-l-[2px] border-white"} ${
        root && "border-none"
      }`}
      onClick={onClickHandler}
      style={{ borderImageSlice: borderImageSlice }}
    >
      <div
        className={`flex items-center text-xs relative whitespace-nowrap py-[1px] ${styles}`}
      >
        {showChildren ? (
          <MinusCircleIcon
            onClick={showChildrenHandler}
            className={`${iconClass}`}
          />
        ) : (
          <PlusCircleIcon
            onClick={showChildrenHandler}
            className={`${iconClass}`}
          />
        )}

        <span className={`${innerState} ml-[2] uppercase`}>{name}</span>
      </div>
      <ul
        className={`p-0 ml-[1.7rem] mt-[-2px]  block ${
          !showChildren && "hidden"
        }`}
      >
        {children}
      </ul>
    </li>
  );
}

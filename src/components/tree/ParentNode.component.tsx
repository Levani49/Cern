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
  root,
  nodeEnd,
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

  let ulStyle: string;
  let ulChildStyle: string;

  if (root) {
    ulStyle = "nan";
    ulChildStyle = "ml-4";
  } else {
    ulStyle = "border-l-[1px] border-white ml-[1.69rem]";
    ulChildStyle =
      "relative overflow-ellipsis whitespace-nowrap  text-left align-middle transition before:relative before:inline-block before:w-[15px] left-0 before:align-middle before:border before:text-white before:border-t-[1px] border-white";
  }

  return (
    <ul
      role="presentation"
      className={`${innerState} uppercase text-sm flex flex-col mt-[-1px] cursor-pointer ${ulStyle} ${
        nodeEnd && "last-parent-event-line"
      }`}
      onClick={onClickHandler}
      style={{ borderImageSlice: borderImageSlice }}
    >
      <div className="">
        <div className={`flex items-center text-xs ${ulChildStyle}`}>
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

          <span>{name}</span>
        </div>
        <div
          className={`flex flex-col select-none gap-[1px] ${
            !showChildren && "hidden"
          }`}
        >
          {children}
        </div>
      </div>
    </ul>
  );
}

import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { useCallback, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { updateParentNodeState } from '../../features/tree/treeSlice';
import { GeometryState } from '../../constants/geometryTree';

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
  'h-6 w-6 text-white stroke-1 hover:text-blue hover:dark:text-green transition-all cursor-pointer';

export default function ParentNode({
  uid,
  name,
  modelState,
  showChildren,
  children,
  nodeEnd,
  root,
}: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(showChildren);

  const onClickHandler = useCallback(
    (e: MouseEv): void => {
      e.stopPropagation();
      const state = modelState === 'isLoaded' ? 'notLoaded' : 'isLoaded';
      dispatch(
        updateParentNodeState({
          nodeId: uid,
          propToChange: 'state',
          value: state,
          restrictAncestorsUpdate: false,
        }),
      );
    },
    [dispatch, modelState, uid],
  );

  const showChildrenHandler = (e: IconMouseEv): void => {
    e.stopPropagation();
    setShow((prev) => !prev);
  };

  const innerState =
    modelState === 'isLoaded'
      ? 'text-green'
      : modelState === 'partialyLoaded'
      ? 'text-yellow-500'
      : 'text-white';

  const styles = `border-l-[1px] border-transparent text-left transition before:relative before:inline-block before:w-[15px] before:left-0 before:align-middle before:border before:border-t-[0.5px] before:text-white before:align-middle ${
    nodeEnd ? 'last-event-line' : ''
  } ${root && 'before:!text-transparent'}`;

  return (
    <li
      className={`border-solid  ${!nodeEnd && 'border-l-[1px] border-white'} ${
        root && 'border-none'
      }`}
    >
      <div className={`flex items-center text-xs relative whitespace-nowrap py-[1px] ${styles}`}>
        {show ? (
          <MinusCircleIcon onClick={showChildrenHandler} className={`${iconClass}`} />
        ) : (
          <PlusCircleIcon onClick={showChildrenHandler} className={`${iconClass}`} />
        )}

        <span
          role="presentation"
          className={`${innerState} ml-[2] text-xs uppercase cursor-pointer`}
          onClick={onClickHandler}
        >
          {name}
        </span>
      </div>
      <ul className={`p-0 ml-[1.7rem] mt-[-2px]  block ${!show && 'hidden'}`}>{children}</ul>
    </li>
  );
}

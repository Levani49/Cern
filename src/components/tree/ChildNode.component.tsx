import { useAppDispatch } from '../../app/hooks';
import { updateChildNodeState } from '../../features/tree/treeSlice';
import { GeometryState } from '../../constants/geometryTree';

interface Props {
  uid: string;
  name: string;
  modelState: GeometryState;
  nodeEnd?: boolean;
}

export default function ChildNode({ name, uid, modelState, nodeEnd }: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const onClickHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
    e.stopPropagation();
    const state: GeometryState = modelState === 'isLoaded' ? 'notLoaded' : 'isLoaded';

    dispatch(
      updateChildNodeState({
        nodeId: uid,
        propToChange: 'state',
        value: state,
      }),
    );
  };

  let innerState: string;

  if (modelState === 'isLoaded') {
    innerState = 'text-green';
  } else {
    innerState = 'text-white';
  }

  return (
    <li
      className={`flex items-center border-l-[1px] border-white ${
        nodeEnd && 'last-event-line border-transparent border-l border-solid'
      } ${innerState}`}
    >
      <span
        role="presentation"
        onClick={onClickHandler}
        className="relative uppercase text-xs cursor-pointer border-white ml-[-0.5px] overflow-ellipsis whitespace-nowrap text-left align-middle transition before:relative before:inline-block before:w-[15px] left-0 before:align-middle before:border before:border-t-[0.5px] before:text-white before:mr-[2px]"
      >
        {name}
      </span>
    </li>
  );
}

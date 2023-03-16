// import { useAppDispatch } from "../../app/hooks";
// import { updateState } from "../../features/geometryMenuSlice/geometryMenuSlice";
import { GeometryState } from "../../features/geometryMenuSlice/geometryTree";

interface Props {
  uid: string;
  name: string;
  state: GeometryState;
  onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

/**
 *
 * @param root0
 * @param root0.parentIsActive
 * @param root0.name
 * @param root0.onClick
 * @param root0.uid
 * @param root0.state
 */
export default function ChildNode({ name, uid, state }: Props): JSX.Element {
  // const dispatch = useAppDispatch();

  const onClickHandler = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ): void => {
    e.stopPropagation();
    console.log(uid);
  };

  let innerState: string;

  if (state === "isLoaded") {
    innerState = "text-red-500";
  } else {
    innerState = "text-white";
  }

  return (
    <li
      role="presentation"
      className={`ml-4 ${innerState}`}
      onClick={onClickHandler}
    >
      {name}
    </li>
  );
}

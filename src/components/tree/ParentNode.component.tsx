import { GeometryState } from "../../features/geometryMenuSlice/geometryTree";

interface Props {
  uid: string;
  name: string;
  parentIsActive: GeometryState;
  onClick: (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => void;
  children: JSX.Element | JSX.Element[];
}

/**
 *
 * @param root0
 * @param root0.name
 * @param root0.parentIsActive
 * @param root0.children
 * @param root0.onClick
 */
export default function ParentNode({
  name,
  parentIsActive,
  onClick,
  children,
}: Props): JSX.Element {
  let innerState: string;

  if (parentIsActive === "isLoaded") {
    innerState = "text-red-500";
  } else if (parentIsActive === "partialyLoaded") {
    innerState = "text-yellow-500";
  } else {
    innerState = "text-white";
  }

  return (
    <ul role="presentation" className={`${innerState} ml-4`} onClick={onClick}>
      <span>+</span>
      {name}
      <div className="flex flex-col gap-[1px]">{children}</div>
    </ul>
  );
}

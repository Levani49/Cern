import { ReactComponent as ArrowDownIcon } from "@assets/svg/arrowDown.svg";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import { selectMenuBar, setMenuBar } from "@features/global/globalsSlice";

import NavIcon from "@components/navigation/navIcon/navIcon";

export default function ShowMenuBar(): JSX.Element {
  const dispatch = useAppDispatch();
  const showMenuBar = useAppSelector(selectMenuBar);

  const handleClick = (): void => {
    dispatch(setMenuBar(true));
  };

  return (
    <>
      {!showMenuBar && (
        <NavIcon
          Icon={ArrowDownIcon}
          onClick={handleClick}
          className="flex h-5 w-12 items-center justify-center rounded-b-2xl border border-t-0 border-transparentGray bg-customGray p-[3px]"
        />
      )}
    </>
  );
}

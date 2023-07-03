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
          className="fixed left-1/2 top-0 z-50 flex  h-5 w-12 flex-auto -translate-x-1/2 transform select-none flex-col items-center  justify-center rounded-b-2xl border border-t-0 border-transparentGray bg-customGray p-[3px]"
        />
      )}
    </>
  );
}

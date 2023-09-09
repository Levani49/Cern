import { useState } from "react";

import { ReactComponent as ArrowDownIcon } from "#/assets/svg/arrowDown.svg";
import { ReactComponent as ArrowUpIcon } from "#/assets/svg/arrowUp.svg";
import { useAppDispatch, useAppSelector } from "#/store/hooks";
import { selectMenuBar, setMenuBar } from "#/features/global/globalsSlice";
import NavIcon from "#/components/navigation/navIcon/navIcon";
import { useEventListener } from "#/hooks/useEventListener/useEventListener.hook";

export default function ShowMenuBar() {
  const [mobileIcon, setMobileIcon] = useState(false);
  const dispatch = useAppDispatch();
  const showMenuBar = useAppSelector(selectMenuBar);

  useEventListener(
    "resize",
    (): void => {
      if (window.innerWidth < 768) {
        setMobileIcon(true);
      } else {
        setMobileIcon(false);
      }
    },
    true
  );

  const handleClick = (): void => {
    dispatch(setMenuBar(true));
  };

  return (
    <>
      {!showMenuBar && (
        <NavIcon
          Icon={mobileIcon ? ArrowUpIcon : ArrowDownIcon}
          onClick={handleClick}
          className="fixed bottom-0 left-1/2 z-50 flex h-5 w-12 flex-auto -translate-x-1/2  transform select-none flex-col items-center justify-center rounded-b-none rounded-t-2xl border  border-t-0 border-highlight1 bg-dark1 p-[3px] sm:bottom-auto sm:top-0 sm:rounded-b-2xl sm:rounded-t-none"
        />
      )}
    </>
  );
}

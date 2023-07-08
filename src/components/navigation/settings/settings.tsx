import { useState } from "react";

import SettingsModal from "@/components/modal/settings/settings.modal";

import { ReactComponent as SettingsIcon } from "@assets/svg/settings.svg";

import NavIcon from "@components/navigation/navIcon/navIcon";

export default function Utils(): JSX.Element {
  const [show, setShow] = useState(true);

  return (
    <>
      <NavIcon
        Icon={SettingsIcon}
        title="Settings"
        onClick={(): void => setShow((prev) => !prev)}
      />
      {show && <SettingsModal />}
    </>
  );
}

import { ReactComponent as MegaPhone } from "#/assets/svg/megaphone.svg";
import NavIcon from "#/components/navigation/navIcon/navIcon";

export default function Report() {
  return (
    <>
      {import.meta.env.VITE_ENV === "development" && (
        <NavIcon
          Icon={MegaPhone}
          title="Bug Report or Suggestions"
          className="-scale-x-1"
        />
      )}
    </>
  );
}

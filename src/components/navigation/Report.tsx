import Icons from "#/utils/icons";
import NavIcon from "#/components/navigation/NavIcon";

export default function Report() {
  return (
    <>
      {import.meta.env.VITE_ENV === "development" && (
        <NavIcon
          Icon={Icons.MegaPhone}
          title="Bug Report or Suggestions"
          className="-scale-x-1"
        />
      )}
    </>
  );
}

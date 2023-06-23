import { isDesktop } from "@utils/isDesktop.utils";

export default function NavTitle(): JSX.Element {
  return (
    <>
      {isDesktop() && (
        <h1 className="text-base font-medium text-light">
          <span className="text-lg  text-blue dark:text-green">T</span>CORE
        </h1>
      )}
    </>
  );
}

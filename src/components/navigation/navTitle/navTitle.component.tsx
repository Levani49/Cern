import { isDesktop } from "@utils/isDesktop.utils";

export default function NavTitle(): JSX.Element {
  return <>{isDesktop() && <h1 className="text-base text-light">CORE</h1>}</>;
}

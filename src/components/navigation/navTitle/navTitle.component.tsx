import { isMobile } from "@utils/isMobile.utils";

export default function NavTitle(): JSX.Element {
  return <>{!isMobile() && <h1 className="text-base text-light">CORE</h1>}</>;
}

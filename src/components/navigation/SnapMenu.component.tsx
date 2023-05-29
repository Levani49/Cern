import MenuIcon from './MenuIcon.component';

import { ReactComponent as TestIcon } from '../../assets/svg/snap.svg';
import SnapModal from '../modal/snap/Snap.modal';

export default function SnapMenu(): JSX.Element {
  return (
    <>
      <MenuIcon Icon={TestIcon} />
      <SnapModal />
    </>
  );
}

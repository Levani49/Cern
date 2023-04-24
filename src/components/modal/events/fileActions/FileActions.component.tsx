import { useIntl } from 'react-intl';

import { ReactComponent as ArrowUpTrayIcon } from '../../../../assets/svg/arrowUpTrayIcon.svg';
import { ReactComponent as ChevronLeftIcon } from '../../../../assets/svg/chervonLeftIcon.svg';
import { ReactComponent as ChevronRightIcon } from '../../../../assets/svg/chervonRightIcon.svg';
import { ReactComponent as FolderIcon } from '../../../../assets/svg/folderIcon.svg';

export default function FileActions(): JSX.Element {
  const intl = useIntl();
  const group = intl.formatMessage({ id: 'modal.events.groupName' });

  return (
    <div className="w-full flex justify-between px-2 items-center">
      <ArrowUpTrayIcon className="icon" />
      <div className="flex gap-2 items-center">
        <ChevronLeftIcon className="icon" />
        <span className="text-xs text-light font-medium">{group} E 06/50</span>
        <ChevronRightIcon className="icon" />
      </div>
      <FolderIcon className="icon" />
    </div>
  );
}

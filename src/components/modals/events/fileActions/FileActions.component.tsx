import {
  ArrowUpTrayIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  FolderIcon,
} from '@heroicons/react/24/outline';

export default function FileActions(): JSX.Element {
  return (
    <div className="w-full flex justify-between px-2 items-center">
      <ArrowUpTrayIcon className="icon" />
      <div className="flex gap-2 items-center">
        <ChevronLeftIcon className="icon" />
        <span className="text-xs text-light font-medium">Group E 06/50</span>
        <ChevronRightIcon className="icon" />
      </div>
      <FolderIcon className="icon" />
    </div>
  );
}

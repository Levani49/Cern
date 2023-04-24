interface Props {
  title: string;
  titleLabel: string;
  lastEvent?: boolean;
}

/**
 *
 *
 * @param root0
 * @param root0.lastEvent
 * @param root0.title
 * @param root0.titleLabel
 */
export default function EventLine({ title, titleLabel, lastEvent }: Props): JSX.Element {
  return (
    <ul className="block pl-[11px]">
      <li className={`text-xs border-l boder-white ${lastEvent && 'last-event-line'}`}>
        <div className="block relative overflow-ellipsis whitespace-nowrap py-[1px] text-left align-middle transition before:relative before:inline-block before:w-[15px]  left-0 before:align-middle before:border before:border-t-[1px] border-white">
          <span className="ml-[3px]">
            {titleLabel} : {title}
          </span>
        </div>
      </li>
    </ul>
  );
}

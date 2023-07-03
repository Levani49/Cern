interface Props {
  title: string;
  titleLabel: string;
  lastEvent?: boolean;
}

export default function EventLine({
  title,
  titleLabel,
  lastEvent
}: Props): JSX.Element {
  return (
    <ul className="block pl-[11px]">
      <li
        className={`border-l border-[rgb(55,60,75)] text-xs ${
          lastEvent && "last-event-line-events"
        }`}
      >
        <div className="relative left-0 block overflow-ellipsis whitespace-nowrap border-[rgb(55,60,75)] py-[1px] text-left align-middle transition before:relative  before:inline-block before:w-[15px] before:border before:border-t-[1px] before:border-[rgb(55,60,75)] before:align-middle">
          <span className="ml-[3px] select-none capitalize text-[#8c92a4]">
            {titleLabel} : {title}
          </span>
        </div>
      </li>
    </ul>
  );
}

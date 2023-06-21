interface Props {
  title: string;
  titleLabel: string;
  lastEvent?: boolean;
}

export default function EventLine({ title, titleLabel, lastEvent }: Props): JSX.Element {
  return (
    <ul className="block pl-[11px]">
      <li className={`boder-white border-l text-xs ${lastEvent && "last-event-line"}`}>
        <div className="relative left-0 block overflow-ellipsis whitespace-nowrap border-white py-[1px] text-left align-middle transition before:relative  before:inline-block before:w-[15px] before:border before:border-t-[1px] before:align-middle">
          <span className="ml-[3px] select-none">
            {titleLabel} : {title}
          </span>
        </div>
      </li>
    </ul>
  );
}

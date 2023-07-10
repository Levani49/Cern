import Checkbox from "@components/modal/event/event-objects/Checkbox.component";

interface Props {
  title: string;
  id: string;
  checked: boolean;
  onClick: () => void;
}

export default function CheckboxHandler({ title, ...rest }: Props): JSX.Element {
  return (
    <div className="flex items-center gap-2">
      <span>{title}</span>
      <Checkbox {...rest} />
    </div>
  );
}

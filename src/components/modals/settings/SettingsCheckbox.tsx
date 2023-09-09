import Checkbox from "#/components/modals/event/event-objects/Checkbox";

interface Props {
  title: string;
  id: string;
  checked: boolean;
  onClick: () => void;
}

export default function SettingsCheckBox({ title, ...rest }: Props) {
  return (
    <div className="flex items-center gap-2">
      <span>{title}</span>
      <Checkbox {...rest} />
    </div>
  );
}

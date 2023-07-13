import { ChangeEvent } from "react";

interface Props {
  filterProp: string;
  onChangeHandler: (key: string, value: string) => void;
  filter: string;
  value: string | undefined;
}

const numberPattern = /^-?[0-9]*\.?[0-9]*$/;

export default function FilterInput({
  filterProp,
  filter,
  value,
  onChangeHandler
}: Props): JSX.Element {
  // const [value, setValue] = useState<undefined | string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = event.target.value;
    const isValid = numberPattern.test(inputValue);

    if (isValid) {
      if (inputValue.indexOf(".") === 0) {
        onChangeHandler(filter, "0" + inputValue);
      } else {
        onChangeHandler(filter, inputValue);
      }
    }
  };

  return (
    <div className="relative flex w-full flex-wrap items-center">
      <div className="flex h-full w-8 justify-center rounded-t-sm border border-highlight1 px-[0.25rem] py-[2px]">
        <span className="text-sm">{filterProp}</span>
      </div>
      <input
        onBlur={(): void => window.scrollTo(0, 0)}
        className="ml-[-3px] w-16 flex-grow overflow-y-hidden rounded-t-sm border border-dark3 bg-highlight1 px-[0.25rem] text-base text-accent3 outline-none dark:border-highlight1 dark:bg-gray1 md:flex-grow-0"
        onChange={handleInputChange}
        value={value ? value : ""}
      />
    </div>
  );
}

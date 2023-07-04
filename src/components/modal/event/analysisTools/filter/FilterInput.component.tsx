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
      <div className="mb-[-1px] flex w-8 justify-center rounded-t-sm border border-transparentGray px-[0.25rem] py-[0.1rem]">
        <span className="text-sm">{filterProp}</span>
      </div>
      <input
        className="ml-[-3px] mt-[1px] w-16 flex-grow rounded-t-sm border border-transparentGray bg-[rgb(41,45,57)] px-[0.25rem] py-[0.1rem] text-sm text-[#8C92A4] outline-none md:flex-grow-0"
        onChange={handleInputChange}
        value={value ? value : ""}
      />
    </div>
  );
}

import { ChangeEvent, useState } from 'react';

interface Props {
  filterProp: string;
}

const numberPattern = /^[0-9]*\.?[0-9]*$/;

export default function FilterInput({ filterProp }: Props): JSX.Element {
  const [value, setValue] = useState<undefined | string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = event.target.value;
    const isValid = numberPattern.test(inputValue);

    if (isValid) {
      if (inputValue.indexOf('.') === 0) {
        setValue('0' + inputValue);
      } else {
        setValue(inputValue);
      }
    }
  };

  return (
    <div className="relative flex flex-wrap items-center w-full">
      <div className="rounded-t-sm border flex justify-center border-transparentGray w-8 mb-[-1px] py-[0.1rem] px-[0.25rem]">
        <span className="text-sm">{filterProp}</span>
      </div>
      <input
        className="text-light flex-grow ml-[-3px] mt-[1px] w-24 rounded-t-sm text-sm border border-transparentGray bg-transparentLight py-[0.1rem] px-[0.25rem] outline-none md:flex-grow-0"
        onChange={handleInputChange}
        value={value}
      />
    </div>
  );
}

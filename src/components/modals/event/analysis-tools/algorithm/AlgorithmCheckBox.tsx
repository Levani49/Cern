import { useState } from "react";

type Props = {
  label: string;
};

export default function AlgorithmCheckBox({ label }: Props) {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        value=""
        onChange={(): void => setChecked((prev) => !prev)}
        checked={checked}
        className="text-accent2-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
      />
      <label
        htmlFor="#"
        className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  );
}

import { useState } from "react";

interface Props {
  label: string;
}

/**
 *
 * @param root0
 * @param root0.label
 */
export default function AlgorithmCheckBox({ label }: Props): JSX.Element {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        value=""
        onChange={(): void => setChecked((prev) => !prev)}
        checked={checked}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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

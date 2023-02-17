/**
 * @returns {JSX.Element} ReactElement
 */
export default function OptionsBox(): JSX.Element {
  return (
    <div className="select-wrapper">
      <label
        htmlFor="countries"
        className="block mb-2 mt-1 text-sm font-medium text-gray-900 dark:text-white text-xs ml-1"
      >
        Camera mode
      </label>
      <select
        id="countries"
        className="bg-gray-700 border appearance-none text-sm rounded-lg focus:ring-black-500 focus:border-blue-500 block w-full p-1.5 border-gray-600 placeholder-gray-400 text-white"
      >
        <option value="CA">Perspective</option>
        <option value="FR">Orthographic</option>
      </select>
    </div>
  );
}

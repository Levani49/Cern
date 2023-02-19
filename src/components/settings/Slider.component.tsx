interface Props {
  title: string;
}

/**
 * Slider component that displays a form with a title and a range input.
 *
 * @param {Props} props - The props of the component.
 * @param {string} props.title - The title of the slider.
 * @returns {JSX.Element} ReactElement
 */
export default function Slider({ title }: Props): JSX.Element {
  return (
    <form className="shadow-md rounded p-1 border-solid">
      <h4 className="block select-none font-light text-xs text-gray-300 text-white">{title}</h4>
      <input type="range" value="100" className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700" />
    </form>
  );
}

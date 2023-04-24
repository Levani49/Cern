interface Props {
  name: string;
  src: string;
  role: string;
}

/**
 * Renders a Slot component that displays an image, name, and role.
 *
 * @function
 * @name Slot
 * @param {object} props - The properties to be passed to the component.
 * @param {string} props.name - The name to be displayed in the component.
 * @param {string} props.src - The image source URL to be displayed in the component.
 * @param {string} props.role - The role to be displayed in the component.
 * @returns {JSX.Element} - A JSX element representing the Slot component.
 */
export default function Slot({ name, role }: Props): JSX.Element {
  return (
    <div className="cursor-pointer flex gap-2 items-center">
      <a className="text-sm text-blue dark:text-green underline" href="https://cern.ch">
        {name}
      </a>{' '}
      -<h3 className="text-xs">{role}</h3>
    </div>
  );
}

interface Props {
  children: React.ReactNode | React.ReactNode[];
  show: boolean;
}

/**
 * SettingsDropdown component that displays and hides children components based on the "show" prop.
 *
 * @param {Props} props - The props of the component.
 * @param {React.ReactNode | React.ReactNode[]} props.children - The children components to be displayed.
 * @param {boolean} props.show - Whether the children components should be displayed or not.
 * @returns {JSX.Element} ReactElement
 */
export default function SettingsDropdown({ show, children }: Props): JSX.Element {
  return (
    <div
      className={`duration-300 transition-all  overflow-hidden ${
        show ? "max-h-[800px]" : "max-h-0"
      } mt-2 flex flex-col gap-2`}
    >
      {children}
    </div>
  );
}

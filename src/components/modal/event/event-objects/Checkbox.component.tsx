interface Props {
  checked: boolean;
  onClick: () => void;
  className?: string;
  id: string;
}

export default function Checkbox({ id, checked, onClick }: Props) {
  return (
    <>
      <input
        hidden
        id={id}
        type="checkbox"
        className=" accent-blue  dark:accent-green"
        checked={checked}
        onChange={onClick}
      />
      <label
        htmlFor={id}
        className={`relative flex h-4 w-4 cursor-pointer select-none items-center justify-center rounded border border-transparent  hover:border-white  ${
          checked ? "bg-accent2 dark:bg-accent1" : "bg-gray1"
        } `}
      >
        <svg
          className={`h-[90%] w-[90%] ${checked && "stroke-white"}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      </label>
    </>
  );
}

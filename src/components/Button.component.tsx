import { twMerge } from "tailwind-merge";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export default function Button({ children, className, ...props }: Props) {
  const componentClasses = twMerge(
    "rounded bg-highlight1 px-4 py-2 outline-none transition-all ease-in-out hover:bg-black",
    className
  );

  return (
    <button className={componentClasses} {...props}>
      {children}
    </button>
  );
}

export default function Logo(): JSX.Element {
  return (
    <div className="absolute left-2 top-2 select-none sm:bottom-[1px] sm:left-auto sm:top-auto">
      <div className=" flex h-16 cursor-pointer justify-center font-medium uppercase text-light">
        <img
          src="/assets/images/tracer-logo.webp"
          alt="tracer logo"
          height={65}
          width={100}
        />
      </div>
    </div>
  );
}

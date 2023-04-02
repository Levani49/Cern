///tracer-logo.png

export default function Logo(): JSX.Element {
  return (
    <div className="absolute bottom-[1px] left-1 select-none">
      <div className="uppercase font-medium text-light cursor-pointer h-16 flex justify-center">
        <img src="/tracer-logo.png" alt="logo" height={65} width={100} />
      </div>
    </div>
  );
}

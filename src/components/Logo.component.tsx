export default function Logo() {
  return (
    <div className="absolute left-1/2 top-2 -translate-x-1/2 transform select-none sm:bottom-[1px] sm:left-4  sm:top-auto sm:translate-x-[0]">
      <div className=" flex h-16 cursor-pointer justify-center font-medium uppercase text-textColor">
        <img
          src="/images/tracer-logo.webp"
          alt="tracer logo"
          height={65}
          width={100}
        />
      </div>
    </div>
  );
}

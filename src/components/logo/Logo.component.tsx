import LazyLoad from "react-lazy-load";

export default function Logo(): JSX.Element {
  return (
    <div className="absolute bottom-[1px] left-5 select-none">
      <div className="flex h-16 cursor-pointer justify-center font-medium uppercase text-light">
        <LazyLoad>
          <img
            src="/assets/tracer-logo.webp"
            alt="tracer logo"
            height={65}
            width={100}
          />
        </LazyLoad>
      </div>
    </div>
  );
}
